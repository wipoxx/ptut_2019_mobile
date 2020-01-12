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
		var movie = {
			id: 1, 
			poster_path: "https://s1.qwant.com/thumbr/0x380/8/6/f7a1aa046fd34fd02ed44f5019f960ff6d58b6dc5efc238e1a446f8ef00c41/latest.jpg?u=http%3A%2F%2Fvignette2.wikia.nocookie.net%2Flotr%2Fimages%2Fb%2Fb6%2FAragorn_profile.jpg%2Frevision%2Flatest%3Fcb%3D20170121121423&q=0&b=1&p=0&a=1",
			title: "Lotr",
		}
		if (!isLoadingComplete) {
			return <LoadingScreen />;
		} else { 
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
