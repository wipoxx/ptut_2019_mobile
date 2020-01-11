import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

class MoviePreview extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            value: this.props.value, 
            isSelected: false,
            emptyUrl: require("assets/empty_star.png"),
            yellowUrl: require("assets/yellow_star.png"),
        }
    }

    select(){
        this.props.changeSelectedValue(this.state.value);
    }

    render(){
        return(
            <TouchableOpacity style={styles.star} onPress={() => this.select()}>
                <Image source={this.state.value <= this.props.selectedValue ? this.state.yellowUrl : this.state.emptyUrl}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    star: {
		paddingVertical: 10, 
        flex: 1, 
    },
});

export default MoviePreview;