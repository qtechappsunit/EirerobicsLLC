import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import Add from 'react-native-vector-icons/MaterialIcons';

const FaqCard = ({ text }) => {
    return (
        <View style={styles.cardView}>
            <Text
                style={{
                    color: colors.white,
                    fontSize: heightPercentageToDP('1.9%')
                }}
            >{text}</Text>
            <Add
                name={'add'}
                size={25}
                color={colors.white}
            />
        </View>
    )
}

export default FaqCard;

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: colors.primary,
        padding: heightPercentageToDP('2.5%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 40,
        marginBottom: heightPercentageToDP('2%')
    }
})