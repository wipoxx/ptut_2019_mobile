import React from "react";
import { Text, View } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
// import { AsyncStorage } from "react-native";

import { getUser } from "api/users";

interface Props {
	navigation: NavigationStackProp;
}

interface State {}

export default class LoginScreen extends React.Component<Props, State> {
	async componentDidMount() {
		const user = await getUser(1);
		console.log("user: ", user);
		// await AsyncStorage.setItem("userToken", "a");
		// this.props.navigation.navigate("Authentication");
	}
	render() {
		return (
			<View>
				<Text>Logins</Text>
			</View>
		);
	}
}
