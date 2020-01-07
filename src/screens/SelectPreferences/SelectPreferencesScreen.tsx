import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

import MovieType from "./components/MovieType";
import Colors from "constants/Colors";

interface Props {
	navigation: NavigationStackProp;
}

interface State {
	typesOfMovies: Array<string>;
}

export default class SelectPreferencesScreen extends React.Component<
	Props,
	State
> {
	constructor(props: Props) {
		super(props);
		this.state = {
			typesOfMovies: [
				"Action",
				"Aventure",
				"Science-Fiction",
				"Documentaire",
				"Comédie",
				"Drame",
				"Triller",
				"Fantaisie",
				"Animation",
			],
		};
	}
	render() {
		return (
			<View style={styles.view}>
				{this.state.typesOfMovies.map((type, index) => {
					return <MovieType name={type} key={index} />;
				})}
				<TouchableOpacity style={styles.saveButton}>
					<Text style={styles.saveButtonText}>Enregistrer</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	nextButton: {
		backgroundColor: Colors.secondary,
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
	view: {
		flex: 1,
		backgroundColor: Colors.primary,
		flexDirection: "row",
		padding: "6%",
		flexWrap: "wrap",
		alignItems: "flex-start",
	},
	saveButton: {
		backgroundColor: "red",
		padding: 5,
		borderRadius: 40,
		margin: 5,
	},
	saveButtonText: {
		padding: "3%",
		color: "white",
	},
});
