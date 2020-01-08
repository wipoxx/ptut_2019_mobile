import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	TextInput,
} from "react-native";
import { Picker } from "react-native-picker-dropdown";
import { NavigationStackProp } from "react-navigation-stack";

import { putUser } from "api/users";
import Colors from "constants/Colors";
import GenderButton from "./components/GenderButton";

const occupationList: { [key: string]: string } = {
	other: "Autre",
	"academic/educator": "Professeur/Instituteur",
	artist: "Artiste",
	"clerical/admin": "Clergé",
	"college/grad": "Etudiant",
	customer: "Client",
	"doctor/health": "Médecin/Santé",
	"executive/managerial": "Cadre/Direction",
	farmer: "Agriculteur",
	homemaker: "Femme/Homme au foyer",
	"K-12": "Collégien/Lycéen",
	lawyer: "Avocat",
	programmer: "Développeur",
	retired: "Retraité",
	"sales/marketing": "Commercial",
	scientist: "Scientifique",
	"self-employed": "Auto-entrepreneur",
	"technician/engineer": "Technicien/Ingénieur",
	"tradesman/craftsman": "Artisan",
	unemployed: "Sans emploi",
	writer: "Ecrivain",
};

const ageList: { [key: string]: string } = {
	"Under 18": "Moins de 18 ans",
	"18 - 24": "De 18 à 24 ans",
	"25 - 34": "De 25 à 34 ans",
	"35 - 44": "De 35 à 44 ans",
	"45 - 49": "De 45 à 49 ans",
	"50 - 55": "De 50 à 55 ans",
	"56+": "Plus de 56 ans",
};

const genderSelection = [
	{
		image: require("assets/menIcon.png"),
		genderValue: "M",
	},
	{
		image: require("assets/womenIcon.png"),
		genderValue: "F",
	},
	{
		image: require("assets/otherIcon.png"),
		genderValue: "A",
	},
];

interface Props {
	navigation: NavigationStackProp;
}

interface State {
	selectedAge: string;
	gender: string;
	selectedJob: string;
	selectedJobIndex: number;
	zipcode: string;
}

export default class SigninScreen extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			selectedAge: Object.keys(ageList)[0],
			gender: "A",
			selectedJob: occupationList.other,
			selectedJobIndex: 0,
			zipcode: "",
		};
	}

	setGender = (gender: string) => {
		this.setState({ gender: gender });
	};

	setJob = (job: string, index: number) => {
		this.setState({ selectedJob: job });
		this.setState({ selectedJobIndex: index });
	};

	setAge = (index: string) => {
		console.log("index: ", index);
		console.log("Object.keys(ageList)[index]: ", Object.keys(ageList));
		console.log("ageList[index]: ", ageList[index]);
		this.setState({ selectedAge: index });
	};

	render() {
		console.log(
			"ageList[this.state.selectedAge]: ",
			ageList[this.state.selectedAge],
		);
		console.log("this.state.selectedAge: ", this.state.selectedAge);
		return (
			<View style={styles.view}>
				<TouchableOpacity
					onPress={() => this.props.navigation.navigate("Login")}
				>
					<Text style={styles.login}>Se connecter</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.avatar}>
					<Image source={require("assets/avatarButton.png")} />
					{/**TODO : Chercher image dans le téléphone */}
				</TouchableOpacity>

				{/* Genre */}
				<View style={styles.gender}>
					{genderSelection.map((value, index) => {
						return (
							<GenderButton
								image={value.image}
								genderValue={value.genderValue}
								key={index}
								onPress={this.setGender}
								isSelected={value.genderValue == this.state.gender}
							/>
						);
					})}
				</View>

				{/* Occupation */}
				<Text>Profession :</Text>
				<View style={styles.dropdown}>
					<Picker
						selectedValue={this.state.selectedJob}
						onValueChange={(value: string, index: number) =>
							this.setJob(value, index)
						}
					>
						{Object.keys(occupationList).map((value, index) => {
							return (
								<Picker.Item
									label={occupationList[value]}
									value={value}
									key={index}
								/>
							);
						})}
					</Picker>
				</View>

				{/* Age */}
				<Text>Age :</Text>
				<View style={styles.dropdown}>
					<Picker
						selectedValue={this.state.selectedAge}
						onValueChange={(value: string) => this.setAge(value)}
					>
						{Object.keys(ageList).map((value, index) => {
							return (
								<Picker.Item label={ageList[value]} value={value} key={index} />
							);
						})}
					</Picker>
				</View>

				{/* Zipcode */}
				<Text>Code postal : </Text>
				<TextInput
					onChangeText={(text: string) => this.setState({ zipcode: text })}
					style={styles.dropdown}
				/>

				<TouchableOpacity
					style={styles.nextButton}
					onPress={() => this.saveUser()}
				>
					<Text style={styles.text}>Suivant →</Text>
				</TouchableOpacity>
			</View>
		);
	}

	saveUser = async () => {
		const {
			selectedAge,
			zipcode,
			gender,
			selectedJob,
			selectedJobIndex,
		} = this.state;
		console.log("selectedJobIndex: ", selectedJobIndex);
		console.log("selectedJob: ", selectedJob);
		console.log("gender: ", gender);
		console.log("zipcode: ", zipcode);
		console.log("age: ", selectedAge);

		const res = await putUser(
			selectedAge,
			gender,
			selectedJobIndex,
			selectedJob,
			zipcode,
		);
		console.log("res: ", res);
		this.props.navigation.navigate("SelectPreferences");
	};
}

const styles = StyleSheet.create({
	avatar: {
		alignContent: "center",
		padding: "2%",
		//width: '50%'
	},
	gender: {
		padding: 20,
		flexDirection: "row",
	},
	view: {
		flex: 1,
		padding: "15%",
		backgroundColor: Colors.primary,
		//justifyContent: "center",
		alignItems: "center",
	},
	dropdown: {
		backgroundColor: "white",
		width: "80%",
		margin: "3%",
		justifyContent: "center",
		height: 48,
	},
	nextButton: {
		backgroundColor: "red",
		justifyContent: "center",
		height: "8%",
		width: "40%",
		minHeight: 30,
		minWidth: 80,
		margin: "3%",
	},
	text: {
		textAlign: "center",
		color: "white",
		fontWeight: "bold",
	},
	login: {
		textAlign: "right",
		textDecorationLine: "underline",
		color: "white",
	},
	datePicker: {
		backgroundColor: "white",
		width: "80%",
		margin: "3%",
	},
});
