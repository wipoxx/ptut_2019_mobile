import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import SigninScreen from "screens/Signin/SigninScreen";
import ProfileScreen from "screens/Profile/ProfileScreen";
import LoginScreen from "screens/Login/LoginScreen";
import AuthenticationScreen from "screens/Authentication/AuthenticationScreen";
import SelectPreferencesScreen from "screens/SelectPreferences/SelectPreferencesScreen";
import MovieDetailsScreen from "screens/MovieDetails/MovieDetailsScreen";
import MoviesListScreen from "screens/MoviesList/MoviesListScreen";

const AuthStack = createStackNavigator(
	{
		Signin: SigninScreen,
		SelectPreferences: SelectPreferencesScreen,
		Login: LoginScreen,
	},
	{
		initialRouteName: "Signin",
		headerMode: "none",
	},
);

const MovieStack = createStackNavigator(
	{
		MoviesList: MoviesListScreen,
		MovieDetails: MovieDetailsScreen,
	},
	{
		initialRouteName: "MoviesList",
		headerMode: "none",
	},
);

const AppTab = createBottomTabNavigator(
	{
		Movie: MovieStack,
		Profile: ProfileScreen,
	},
	{
		initialRouteName: "Movie",
	},
);

export default createAppContainer(
	createSwitchNavigator(
		{
			Auth: AuthStack,
			App: AppTab,
			Authentication: AuthenticationScreen,
		},
		{
			initialRouteName: "Authentication",
		},
	),
);
