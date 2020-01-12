import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

class MoviePreview extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            id: this.props.movie.id, 
            imageUrl: "https://image.tmdb.org/t/p/w185" + this.props.movie.poster_path,
            // imageUrl: require('assets/Lotr.jpg'),
            title: this.props.movie.title,
        }
    }

    openMovieDetails(movie){
        this.props.navigation.navigate("MovieDetails", movie={movie});
    }
    

    render(){
        return(
            <TouchableOpacity style={styles.view} key={this.state.id} onPress={() => this.openMovieDetails(this.props.movie)}>
                <Image 
                    source={{uri: this.state.imageUrl}}
                    style={styles.image}
                />
                <Text style={styles.text}>
                    {this.state.title}
                    {/* TODO: ajuster le titre pour que les titres trop long prennent une taille maxi */}
                </Text>
                {/* TODO : note */}
            </TouchableOpacity>
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