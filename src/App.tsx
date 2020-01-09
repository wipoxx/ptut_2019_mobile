import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import Navigator from "router/Navigator";
import Colors from "constants/Colors";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar
				translucent
				backgroundColor={Colors.darkerPrimary}
				barStyle="light-content"
			/>
			<Navigator style={styles.screen} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		paddingTop: StatusBar.currentHeight || 0,
	},
	screen: {
		flex: 1,
	},
});
