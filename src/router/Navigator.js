import {createAppContainer, createSwitchNavigator} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import SigninScreen from "./../screens/Signin/SigninScreen";
import SelectPreferences from "./../screens/SelectPreferences/SelectPreferencesScreen";
import MovieDetailsScreen from "./../screens/MovieDetails/MovieDetailsScreen";
import MoviesListScreen from "./../screens/MoviesList/MoviesListScreen";
import ProfileScreen from "./../screens/Profile/ProfileScreen";
import LoginScreen from "./../screens/Login/LoginScreen";

const AuthStack = createStackNavigator({
    Signin: SigninScreen,
    Select: SelectPreferences,
    Login: LoginScreen
});

const MovieStack = createStackNavigator({
    MoviesList: MoviesListScreen,
    MovieDetails: MovieDetailsScreen
})

const AppTab = createBottomTabNavigator({
    Movie: MovieStack,
    Profile: ProfileScreen
})