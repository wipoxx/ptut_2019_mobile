import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {}

interface State {}

export default class MoviesListScreen extends React.Component<Props, State> {
	render() {
		return (
			<View>
				<View style={styles.title}>
					<Text style={styles.titleText}>Films recommandés</Text>
				</View>
				<View style={styles.title}>
					<Text style={styles.titleText}>Films les mieux notés</Text>
				</View>
				<View style={styles.title}>
					<Text style={styles.titleText}>Films par catégories</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		backgroundColor: "#105AA6",
		width: "100%",
		padding: "4%",
		alignItems: "center",
		height: "16%",
	},
	titleText: {
		color: "white",
	},
});
