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

    

    render(){
        return(
            <View key={this.state.id}>
                {/* <Image source={this.state.imageUrl}/> */}
                <Text>{this.state.title}</Text>
                {/* TODO : note */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        padding: '3%', 
    },
});

export default MoviePreview;