import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import Colors from "constants/Colors";
export default class LoadingScreen extends Component {
	render() {
		return (
			<View style={[styles.container]}>
				<ActivityIndicator size="large" color={Colors.secondary} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
	},
	horizontal: {
		flexDirection: "row",
		justifyContent: "space-around",
		padding: 10,
	},
});
