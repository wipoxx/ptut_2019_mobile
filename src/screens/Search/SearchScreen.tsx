import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {  TouchableOpacity, TextInput } from "react-native-gesture-handler";
import {searchFilms} from "api/films";

interface Props {
}

interface State {
    value: string,
    init: boolean,
}

export default class SearchScreen extends React.Component<Props, State> {
    constructor(props: Props){
        super(props); 
        this.state = {
            value: "nom du film",
            init: true,
        }
    }

    firstClick(){
        if(this.state.init){
            this.setState({
                init: false,
                value: ""
            })
        }
    }

    async search(){
        await searchFilms(this.state.value);
    }

    render() {
        return (
            <View style={styles.screenView}>
                <Text style={styles.titleText}>Recherche</Text>
                <View style={styles.searchView}>
                    <TextInput 
                        style={styles.textInput}
                        value={this.state.value}
                        onChangeText={(text: string) => {this.setState({value: text})}}
                        onTouchStart={() => this.firstClick()}
                    >
                    </TextInput>
                    <TouchableOpacity 
                        style={styles.searchButton}
                        onPress={() => this.search()}
                    >
                        <Text style={styles.searchText}>Rechercher</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screenView: {
        flex: 1,
        backgroundColor: "#105AA6",
    },
    searchView: {
        flexDirection: "row", 
        height: '12%',
        padding: 20,
    },
    titleText: {
        fontSize: 30, 
        fontWeight: "bold", 
        width: '100%',
        paddingTop: 40, 
        textAlign: "center",
        color: "white",
    },
	textInput: {
        borderRadius: 10,
        marginRight: 10,
        paddingLeft: 10, 
        flex: 6, 
        backgroundColor: "white",
		padding: 5, 
    },
    searchButton: {
        flex: 1,
        height: 30, 
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: "red", 
    },
    searchText: {
        height: '100%', 
        width: '100%',
        paddingTop: 10, 
        paddingHorizontal: 10, 
        fontWeight: "bold", 
        fontSize: 16, 
    }
});
