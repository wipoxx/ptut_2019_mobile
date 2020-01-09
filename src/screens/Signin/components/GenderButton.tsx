import React, { Component } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

import Colors from "constants/Colors";

interface Props {
	image: number;
	genderValue: string;
	onPress: Function;
	isSelected: boolean;
}

export default class GenderButton extends Component<Props> {
	render() {
		const { image, genderValue, onPress, isSelected } = this.props;
		const backgroundColor = isSelected ? Colors.secondary : "white";
		return (
			<TouchableOpacity
				style={[styles.genderButton, { backgroundColor }]}
				onPress={() => onPress(genderValue)}
			>
				<Image source={image} />
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	genderButton: {
		padding: "2%",
		borderRadius: 10,
	},
});
