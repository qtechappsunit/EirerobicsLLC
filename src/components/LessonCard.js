import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import Time from 'react-native-vector-icons/Ionicons'
import ArrowDown from 'react-native-vector-icons/MaterialIcons';

const LessonCard = ({ icon, timeIcon, text, time, heading, style, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.Card, style]}
            onPress={onPress}
        >
            <View>
                <Text
                    style={{
                        color: colors.black,
                        fontWeight: 'bold',
                        fontSize: heightPercentageToDP('2.2%')
                    }}
                >{heading}</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        paddingTop: heightPercentageToDP('1%')
                    }}
                >
                    <Text
                        style={{
                            color: colors.black,
                            fontSize: heightPercentageToDP('1.8%'),
                            fontWeight: 'bold'
                        }}
                    >{text}</Text>
                    <Time
                        name={timeIcon}
                        color={colors.black}
                        size={17}
                        style={{ marginLeft: heightPercentageToDP('1.5%'), alignSelf: 'center' }}
                    />
                    <Text
                        style={{
                            color: colors.black,
                            marginLeft: heightPercentageToDP('1%'),
                            fontWeight: 'bold'
                        }}
                    >{time}</Text>
                </View>
            </View>
            <ArrowDown
                name={icon}
                color={colors.black}
                size={20}
                style={{ alignSelf: 'center' }}
            />
        </TouchableOpacity>
    )
}

export default LessonCard;

const styles = StyleSheet.create({
    Card: {
        padding: heightPercentageToDP('2%'),
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginBottom: heightPercentageToDP('3%'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 3,
    }
})