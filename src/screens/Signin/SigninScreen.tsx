import React, { Component } from "react";
import {
	AsyncStorage,
	Image,
	Picker,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Alert,
} from "react-native";
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
		this.setState({ selectedAge: index });
	};

	render() {
		return (
			<View style={styles.view}>
				<TouchableOpacity
					onPress={() => this.props.navigation.navigate("Login")}
				>
					<Text style={styles.login}>Se connecter</Text>
				</TouchableOpacity>
				<View style={styles.signinView}>
					<TouchableOpacity style={styles.avatar}>
						<Image source={require("assets/avatarButton.png")} />
						{/**TODO : Chercher image dans le téléphone */}
					</TouchableOpacity>

					{/* Genre */}
					<View style={[styles.gender]}>
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
					<View style={styles.inputView}>
						<Text style={[styles.text, styles.label]}>Profession :</Text>
						<View style={styles.dropdown}>
							<Picker
								selectedValue={this.state.selectedJob}
								onValueChange={(value: string, index: number) =>
									this.setJob(value, index)
								}
								itemStyle={{
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "green",
								}}
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
					</View>
					{/* Age */}
					<View style={styles.inputView}>
						<Text style={[styles.text, styles.label]}>Age :</Text>
						<View style={styles.dropdown}>
							<Picker
								selectedValue={this.state.selectedAge}
								onValueChange={(value: string) => this.setAge(value)}
							>
								{Object.keys(ageList).map((value, index) => {
									return (
										<Picker.Item
											label={ageList[value]}
											value={value}
											key={index}
										/>
									);
								})}
							</Picker>
						</View>
					</View>
					{/* Zipcode */}
					<View style={styles.inputView}>
						<Text style={[styles.text, styles.label]}>Code postal : </Text>
						<TextInput
							onChangeText={(text: string) => this.setState({ zipcode: text })}
							style={styles.dropdown}
						/>
					</View>

					<TouchableOpacity
						style={styles.nextButton}
						onPress={() => this.saveUser()}
					>
						<Text style={styles.text}>Suivant →</Text>
					</TouchableOpacity>
				</View>
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
		if (res.data && res.data.userid) {
			AsyncStorage.setItem("userid", res.data.userid.toString());
			this.props.navigation.navigate("Authentication");
		} else {
			Alert.alert(
				"Erreur",
				"Problème lors de la création de l'utilisateur, veuillez recommencer.",
			);
		}
	};
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		padding: "2%",
		backgroundColor: Colors.primary,
	},
	signinView: {
		paddingTop: 10,
		alignItems: "center",
	},
	inputView: {
		height: "15%",
		width: "80%",
	},
	avatar: {
		alignContent: "center",
		padding: "2%",
		margin: "2%",
	},
	gender: {
		flexDirection: "row",
		backgroundColor: "white",
		padding: 1,
		borderRadius: 10,
		borderWidth: 0,
	},
	dropdown: {
		backgroundColor: "white",
		width: "100%",
		marginVertical: "3%",
		justifyContent: "center",
		borderRadius: 10,
		height: "50%",
		minHeight: 25,
		paddingHorizontal: "2%",
	},
	nextButton: {
		backgroundColor: "red",
		justifyContent: "center",
		alignContent: "center",
		height: "8%",
		width: "40%",
		minHeight: 30,
		minWidth: 80,
		borderRadius: 10,
	},
	text: {
		textAlign: "center",
		color: "white",
		fontWeight: "bold",
	},
	label: {
		textAlign: "left",
	},
	login: {
		textAlign: "right",
		textDecorationLine: "underline",
		color: "white",
	},
});
