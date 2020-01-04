import React from "react";
import { StyleSheet, View } from "react-native";

import Navigator from "router/Navigator";

export default function App() {
	return (
		<View style={styles.container}>
			<Navigator style={styles.screen} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
	},
	screen: {
		flex: 1,
	},
});
