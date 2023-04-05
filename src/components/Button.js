import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';

const Button = ({ buttonStyle, buttonText, onPress, textStyle }) => {
    return (
        <TouchableOpacity
            style={[styles.buttonContainer, buttonStyle]}
            onPress={onPress}
        >
            <Text style={[styles.buttonText, textStyle]}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: colors.primary,
        padding: heightPercentageToDP('2%'),
        width: widthPercentageToDP('40%'),
        borderRadius: 30,
        alignItems: 'center'
    },
    buttonText: {
        color: colors.white,
    }
})