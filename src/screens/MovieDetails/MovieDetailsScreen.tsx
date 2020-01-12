import React from "react";
import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { ScrollView, TouchableOpacity, RotationGestureHandler } from "react-native-gesture-handler";
import Star from "./star";

interface Props {
	navigation: NavigationStackProp;
}

interface State {
	movie: object;
	selectedValue: number;
}

export default class MovieDetailsScreen extends React.Component<Props, State> {
	constructor(props: Props){
		super(props); 
		this.state = {
			movie: this.props.navigation.state.params.movie,
			selectedValue: -1,
		}
		this.changeSelectedValue = this.changeSelectedValue.bind(this);
	}

	changeSelectedValue(value: number){
		this.setState({selectedValue: value});
	}

	vote(){
		// TODO : save selectedValue
	}

	render() {
		var movie = this.state.movie;
		var cast = JSON.parse(movie.cast); 
		var imageUrl = "https://image.tmdb.org/t/p/w185" + movie.imageUrl;
		return (
			<View style={styles.screenView}>
				<ScrollView>
					<ImageBackground 
						source={{uri: imageUrl}}
						// source={require('assets/Lotr.jpg')}
						style={styles.image}	
					>
						<View style={styles.titleView}>
							<Text style={styles.titleText}>{movie.title} - {movie.release_date.substring(0,4)}</Text>
							<Text style={styles.runtimeText}>{Math.floor(movie.runtime/60)}h{movie.runtime%60}</Text>
						</View>
					</ImageBackground>
					{/* TODO : Supperposer image et titre*/}
					<View style={styles.detailsView}>
						<View style={styles.descriptionView}>
							<Text style={styles.whiteText}>Acteurs : 
								{cast.map((value, index) => {
									return <Text key={index}> {value.name},</Text>
								})}
							</Text>
							<Text style={styles.whiteText}>
								Producteur(s) : 
							</Text>
							<Text style={styles.whiteText}>
								Réalisateur(s) : 
							</Text>
							<Text style={styles.whiteText}>
								{movie.overview}
							</Text>
							<Text style={styles.noteText}>
								Note moyenne : {movie.vote_average/2}/5
							</Text>
						</View>
						<Text style={styles.whiteText}>
							Quelle note attribuez-vous ? 
						</Text>
						<View style={styles.starList}>
							<Star
								value={1}
								selectedValue={this.state.selectedValue}
								changeSelectedValue={this.changeSelectedValue}
							/>
							<Star
								value={2}
								selectedValue={this.state.selectedValue}
								changeSelectedValue={this.changeSelectedValue}
							/>
							<Star
								value={3}
								selectedValue={this.state.selectedValue}
								changeSelectedValue={this.changeSelectedValue}
							/>
							<Star
								value={4}
								selectedValue={this.state.selectedValue}
								changeSelectedValue={this.changeSelectedValue}
							/>
							<Star
								value={5}
								selectedValue={this.state.selectedValue}
								changeSelectedValue={this.changeSelectedValue}
							/>
						</View> 
						<TouchableOpacity style={styles.voteButton} onPress={() => this.vote()}>
							<Text style={styles.voteText}>Voter</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	titleText: {
		fontSize: 30, 
		paddingHorizontal: 30,
		paddingTop: 15,
		textAlign: "justify",
		color: "white",
	},
	titleView: {
		alignSelf: "flex-end",
		backgroundColor: "#303030A0",
		width: '100%',
	},
	starList: {
		flexDirection: "row", 
		flex: 1,
		alignSelf: "center",
		width: '80%',
		padding: 5,
		paddingBottom: 10, 
	},
	runtimeText: {
		color: "white",
		fontSize: 22,
		paddingVertical: 10,
		paddingHorizontal: 40,
	},
    screenView: {	
        flex: 1,
	},
	image: {
		width: '100%',
		flexDirection: "row",
		height: 300,
        backgroundColor: '#EAEAEA',
	},
	detailsView: {
		width: "100%",
		backgroundColor: "#105AA6",
		padding: 25,
		paddingBottom: 35, 
	}, 
	descriptionView: {
		backgroundColor: "#000000", 
		borderRadius: 10,
	},
	whiteText: {
		color: "white",
		padding: 20,
		paddingBottom: 0, 
		fontSize: 18,
	},
	noteText: {
		color: "white",
		padding: 20,
		fontSize: 20,
	},
	overviewText: {
		color: "white",
		textAlign: "justify",
		padding: 20,
	},
	voteButton: {
		backgroundColor: "red", 
		padding: 10,
		borderRadius: 10, 
		width: 100,
		alignSelf: "center",
	},
	voteText: {
		fontSize: 28,
		textAlign: "center",
		fontWeight: "bold", 
	},
});
