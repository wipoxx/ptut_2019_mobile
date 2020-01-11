import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

class MoviePreview extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            id: this.props.movie.id, 
            imageUrl: this.props.movie.poster_path,
            title: this.props.movie.title,
        }
    }

    openMovieDetails(movie){
        this.props.navigation.navigate("MovieDetails", movie={movie});
    }
    

    render(){
        return(
            <View style={styles.view} key={this.state.id} onTouchEnd={() => this.openMovieDetails(this.props.movie)}>
                <Image 
                    source={this.state.imageUrl}
                    style={styles.image}
                />
                <Text style={styles.text}>
                    {this.state.title}
                    {/* TODO: ajuster le titre pour que les titres trop long prennent une taille maxi */}
                </Text>
                {/* TODO : note */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 10,

    },
    text: {
        padding: '3%', 
        textAlign: "center",
        fontSize: 16,
    },
    image: {
        height: 130,
        width: 100,
        backgroundColor: '#EAEAEA',
    }
});

export default MoviePreview;