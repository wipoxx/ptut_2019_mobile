import React from "react";
import MoviePreview from "./components/MoviePreview";
import { getFilms } from "../../api/films";
import { StyleSheet, Text, View } from "react-native";
import LoadingScreen from "screens/LoadingScreen";
import { ScrollView } from "react-native-gesture-handler";
import { NavigationStackProp } from "react-navigation-stack";

interface Props {
	navigation: NavigationStackProp;
}

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
		//const films = await this.getFilmsJson();
		const { movies, isLoadingComplete } = this.state;
		
		if (!isLoadingComplete) {
			return <LoadingScreen />;
		} else { 
			// var moviesJson = JSON.parse(JSON.stringify(movies));
			// console.log("///////////////////// MOVIES ////////////////////////");
			// console.log(moviesJson[1]	);
			// console.log("/////////////////////////////////////////////////////");
			return (
				<View style={styles.screenView}>
					<View style={styles.title}>
						<Text style={styles.titleText}>Films recommandés</Text>
					</View>
					<View style={styles.movieList}>
						<ScrollView horizontal={true}>
							{movies.map((value, index) => {
								return <MoviePreview movie={value} navigation={this.props.navigation} key={index}/>;
							})}
						</ScrollView>
					</View>
					<View style={styles.title}>
						<Text style={styles.titleText}>Films les mieux notés</Text>
					</View>
					<View style={styles.movieList}>
						<ScrollView horizontal={true}>
							{movies.map((value, index) => {
								return <MoviePreview movie={value} navigation={this.props.navigation} key={index}/>;
							})}
						</ScrollView>
					</View>
					<View style={styles.title}>
						<Text style={styles.titleText}>Films par catégories</Text>
					</View>
					<View style={styles.movieList}>
						<ScrollView horizontal={true}>
							{movies.map((value, index) => {
								return <MoviePreview movie={value} navigation={this.props.navigation} key={index} />;
							})}
						</ScrollView>
					</View>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	screenView: {
		flex: 1,
	},
	title: {
		flex: 1,
		backgroundColor: "#105AA6",
		width: "100%",
		
		// alignItems: "center",
		// height: "16%",
	},
	titleText: {
		height: '100%',
		width: '100%',
		textAlign: "center",
		textAlignVertical: "center",
		paddingTop: 15, 
		color: "white",
		fontWeight: 'bold',
		fontSize: 18, 
	},
	movieList: {
		flex: 4,
		backgroundColor: 'black',
	},
	scrollView: {
		flexDirection: 'row', 
		flex: 1, 
	},
});
