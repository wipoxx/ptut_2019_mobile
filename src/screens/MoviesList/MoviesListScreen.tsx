import React from "react";
import MoviePreview from "./components/MoviePreview";
import { getFilms } from "../../api/films";
import { StyleSheet, Text, View } from "react-native";
import LoadingScreen from "screens/LoadingScreen";

interface Props {}

interface State {
	movies: Array<object>;
	isLoadingComplete: boolean;
}

export default class MoviesListScreen extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			movies: [],
			isLoadingComplete: false,
		};
	}

	async componentDidMount() {
		const movies = await getFilms();
		this.setState({ movies: movies, isLoadingComplete: true });
	}

	render() {
		// const films = await this.getFilmsJson();
		const { movies, isLoadingComplete } = this.state;
		if (!isLoadingComplete) {
			return <LoadingScreen />;
		} else {
			return (
				<View>
					<View style={styles.title}>
						<Text style={styles.titleText}>Films recommandés</Text>
					</View>
					{movies.map((value, index) => {
						return <MoviePreview movie={value} key={index} />;
					})}
					{/* <View>
					<Text>
						{this.state.movies}
					</Text>
				</View> */}
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
