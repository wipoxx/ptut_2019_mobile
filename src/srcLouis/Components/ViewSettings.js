
import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

import MovieType from './MovieType';

class viewSettings extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            typesOfMovies: [
                "Action", 
                "Aventure", 
                "Science-Fiction", 
                "Documentaire", 
                "Comédie",
                "Drame", 
                "Triller", 
                "Fantaisie", 
                "Animation",
            ],
        }
    }

    render(){
        return(
            <View style={styles.view}>
                {this.state.typesOfMovies.map((type, index) => {
                    return(
                        <MovieType 
                            name = {type}
                        />
                    )
                })}
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>
                        Enregistrer
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#105AA6', 
        flexDirection: "row", 
        padding: '6%',
        flexWrap: "wrap", 
        alignItems: "flex-start",

    },
    saveButton: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 40, 
        margin: 5, 
    },
    saveButtonText: {
        padding: '3%', 
        color: 'white', 
        
    }
});

// class MovieTypeList extends React.Component {
//     constructor(props){
//         super(props); 
//     }

//     render() {
//         return (
//             this.props.typesOfMovies.map((type, index) => {

//             })
//         )
//     }
// }


export default viewSettings;