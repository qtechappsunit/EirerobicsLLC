import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import Icon from 'react-native-vector-icons/Entypo';

const DanceCard = () => {
    return (
        <View style={styles.card}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Text
                    style={{
                        color: colors.white,
                        fontSize: heightPercentageToDP('1.9%'),
                        width: heightPercentageToDP('26%')

                    }}
                >I have never done Irish dancing. Will this workout be too difficult for me?</Text>
                <Icon
                    name={'minus'}
                    color={colors.white}
                    size={25}
                    style={{ alignSelf: 'center' }}
                />

            </View>
            <View
                style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#65914C',
                    paddingTop: heightPercentageToDP('1.5%')
                }}
            >
            </View>
            <View
                style={{
                    paddingTop: heightPercentageToDP('2%')
                }}
            >
                <Text
                    style={{
                        color: colors.white,
                        fontSize: heightPercentageToDP('1.9%')
                    }}
                >Over half the women in the dvd had never done Irish dancing, and a couple had no dance experience at all. The steps are done in counts of four or eight, so there is no quick change of movement; and as there is very little arm movement in Irish dance, there is no coordination of feet and arms to worry about. Many users can follow along without even going to the instruction section.</Text>
            </View>
        </View>
    )
}

export default DanceCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.primary,
        padding: heightPercentageToDP('2%'),
        borderRadius: 15
    }
})