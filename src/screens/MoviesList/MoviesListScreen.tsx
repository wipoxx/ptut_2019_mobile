import React from "react";
import MoviePreview from "./components/MoviePreview";
import {getFilms} from "../../api/films";
import { StyleSheet, Text, View } from "react-native";

interface Props {}

interface State {
	movies: any,
}

export default class MoviesListScreen extends React.Component<Props, State> {
	constructor(props: Props){
		super(props); 
		this.state = {
			movies: "",
		}
	}

	async getFilmsJson(){
		const movies = await getFilms();
		console.log(movies);
		this.setState({movies: movies});
	}

	async render() {
		await this.getFilmsJson();
		// const films = await this.getFilmsJson();
		console.log(this.state.movies); 
		return (
			<View>
				<View style={styles.title}>
					<Text style={styles.titleText}>Films recommandés</Text>
				</View>
				<MoviePreview 
					movie={this.state.movies[0]}
				/>
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
