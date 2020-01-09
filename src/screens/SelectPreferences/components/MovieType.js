import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

class MovieType extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            //id: this.props.id,
            name: this.props.name,
            selected: false,
        }
    }

    setSelected(){
        this.setState({selected: !this.state.selected});
    }

    render(){
        var style; 
        if(this.state.selected){
            style = styles.viewSelected;
        }else{
            style = styles.viewNotSelected;
        }
        return(
            <View key={this.props.index}>
                <TouchableOpacity 
                    style={style}
                    onPress={() => this.setSelected()}>
                    <Text style={styles.text}>
                        {this.state.name}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewSelected: {
        backgroundColor: '#A5A5A5', 
        padding: 5,
        borderRadius: 40, 
        margin: 5, 
    },
    viewNotSelected: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 40, 
        margin: 5,
    },
    text: {
        padding: '3%', 
    }
});

export default MovieType;