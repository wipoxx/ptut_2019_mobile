import React from "react";
import { StyleSheet, View } from "react-native";

import ProfileScreen from "./screens/Profile/ProfileScreen";

export default function App() {
	return (
		<View style={styles.container}>
			<ProfileScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
