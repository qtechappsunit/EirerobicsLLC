import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import fonts from '../assets/fonts';

const Programs = ({ image, heading, detail, programWrapper, textStyle, text, textWrapper }) => {
    return (
        <View style={[styles.wrapper, programWrapper]}>
            <View>
                <View style={styles.programView}>
                    {text &&
                        <View
                            style={{
                                marginLeft: heightPercentageToDP('3.5%'),
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: heightPercentageToDP('3.5%'),
                                    color: colors.black,
                                    marginBottom: heightPercentageToDP('7%'),
                                    marginTop: heightPercentageToDP('2%'),
                                    width: widthPercentageToDP('53%'),
                                    fontFamily: fonts.Regular
                                }}
                            >Our Most Plural Program</Text>
                        </View>
                    }
                    <View
                        style={{
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={image}
                            style={styles.image}
                        />
                    </View>
                    <View
                        style={[{
                            padding: heightPercentageToDP('1%'),
                            marginLeft: heightPercentageToDP('3.5%')
                        }, textWrapper]}
                    >
                        <Text
                            style={[{
                                fontSize: heightPercentageToDP('2.5%'),
                                color: colors.black
                            }, textStyle]}
                        >{heading}</Text>
                        <Text
                            style={{
                                marginVertical: heightPercentageToDP('2%'),
                                width: widthPercentageToDP('70%'),
                                color: colors.black,
                                fontSize: heightPercentageToDP('1.9%')
                            }}
                        >
                            {detail}
                        </Text>
                        <View style={{
                            borderBottomColor: '#E5E5E5',
                            borderBottomWidth: 1
                        }}>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Programs;

const styles = StyleSheet.create({
    wrapper: {
    },
    programView: {
        backgroundColor: colors.background_color,
        padding: heightPercentageToDP('2%'),
    },
    image: {
        height: heightPercentageToDP('22%'),
        width: heightPercentageToDP('24%')
    }
})