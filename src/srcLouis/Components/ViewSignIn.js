import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Dropdown } from 'react-native-material-dropdown';

//Images 
//import avatarButton from "..\\assets\\images\\viewSignIn\\avatarButton.PNG"


class viewSignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: null,
      gender: -1,
      jobList: [{
        value: 'Sans emploi',
      }, {
        value: 'Ingénieur',
      }, {
        value: 'Cheminot',
      }],
      selectedJob: "",
    }
  }

  setGender(gender){
    this.setState({gender: gender});
  }

  setJob(job){
    this.setState({selectedJob: job});
  }

  
    render() {
      return ( 
        <View style={styles.view}>
          <TouchableOpacity name="avatarButton" title="Avatar" style={styles.avatar}>
            <Image source={require('./../assets/avatarButton.png')}/>{/**TODO : Chercher image dans le téléphone */}
          </TouchableOpacity>

          {/* selection du genre */}
          <View style={styles.gender}>
            <TouchableOpacity name="genderM" style={styles.genderButton} title="Homme" onPress={() => this.setGender(0)}>
              <Image source={require('./../assets/menIcon.png')}/>
            </TouchableOpacity>
            <TouchableOpacity name="genderF" style={styles.genderButton} title="Femme" onPress={() => this.setGender(2)}>
              <Image source={require('./../assets/womenIcon.png')}/>
            </TouchableOpacity>
            <TouchableOpacity name="genderO" style={styles.genderButton} title="Non renseigné" onPress={() => this.setGender(1)}>
              <Image source={require('./../assets/otherIcon.png')}/>
            </TouchableOpacity>
          </View>

          {/* Age */}
          <DatePicker
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="DD/MM/YYYY"
            confirmBtnText="Ok"
            cancelBtnText="Anuler"
            onDateChange={(date) => {this.setState({date: date})}}
            style={styles.datePicker}
          />
          <View style= {styles.dropdown}>
            <Dropdown
              label='Métier'
              data = {this.state.jobList}
              onChangeText = {(value) => this.setJob(value)}
              //style = {styles.dropdown}
            />
          </View>

          <TouchableOpacity 
            name="nextButton" 
            title="Suivant >" 
            style={styles.nextButton}
            onPress={() => this.props.navigation.navigate("ViewHome")}>
              <Text style={styles.text}>Suivant →</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
   
  const styles = StyleSheet.create({
    avatar: {
      alignContent: 'center',
      padding: '2%'
      //width: '50%'
    },
    gender: {
      padding: 20,
      flexDirection: "row",
    },
    genderButton: {
      padding: '2%',
      borderColor: '#105AA6',
      borderRadius: 10,
      borderWidth: 1,
      backgroundColor: 'white',
    },
    view: {
      flex: 1,
      padding: '15%',
      backgroundColor: '#105AA6',
      //justifyContent: "center",
      alignItems: "center",
    },
    dropdown: {
      backgroundColor: 'white',
      width: '80%',
      margin: '3%',
      justifyContent: "center",
      height: 48,
    },
    nextButton: {
      backgroundColor: 'red',
      justifyContent: "center",
      height: '8%',
      width: '40%',
      minHeight: 30,
      minWidth: 80, 
      margin: '3%',
    },
    text: {
      textAlign: "center",
      color: 'white',
      fontWeight: 'bold',
    },
    datePicker: {
      backgroundColor: "white",
      width: '80%',
      margin: '3%',
    }
  });

  export default viewSignIn