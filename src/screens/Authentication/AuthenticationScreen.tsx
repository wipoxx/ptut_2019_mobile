import React from "react";
// import AsyncStorage from "@react-native-community/async-storage";
import { AsyncStorage } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

import LoadingScreen from "screens/LoadingScreen";

type Props = {
	navigation: NavigationStackProp<{ userId: string }>;
};

interface State {}

export default class AuthenticationScreen extends React.Component<
	Props,
	State
> {
	componentDidMount() {
		this.loadScreen();
	}

	loadScreen = async () => {
		const userToken = await AsyncStorage.getItem("userid");
		await AsyncStorage.clear();
		const screen = userToken ? "App" : "Auth";
		this.props.navigation.navigate(screen);
	};

	render() {
		return <LoadingScreen />;
	}
}
