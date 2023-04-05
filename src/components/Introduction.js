import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import images from '../assets/images';
import Button from './Button';
import fonts from '../assets/fonts';

const Introduction = () => {
    return (
        <ImageBackground
            source={images.intro1}
            imageStyle={styles.image}
            style={styles.wrapper}
        >
            <Text
                style={{
                    color: colors.primary,
                    fontSize: heightPercentageToDP('2.5%'),
                    fontFamily: fonts.Medium,
                }}
            >Welcome To Eirerobics</Text>
            <Text style={{
                color: colors.white,
                fontSize: heightPercentageToDP('4%'),
                marginVertical: heightPercentageToDP('2%'),
                width: widthPercentageToDP('50%'),
                fontFamily: fonts.Regular,
            }}>Welcome To
                Eirerobics</Text>
            <Image
                source={images.intro2}
                style={styles.image2}
            />
            <View>
                <View style={styles.coursesView}>
                    <Text
                        style={{
                            alignSelf: 'center',
                            color: colors.white,
                            fontWeight: 'bold',
                            fontSize: heightPercentageToDP('3%')
                        }}
                    >200+</Text>
                    <Text
                        style={{
                            alignSelf: 'center',
                            color: colors.white
                        }}
                    >COURSES</Text>
                </View>
            </View>
            <View
                style={{
                    paddingTop: heightPercentageToDP('5%')
                }}
            >
                <Text
                    style={{
                        color: colors.white,
                        fontSize: heightPercentageToDP('2%')
                    }}
                >If you have ever enjoyed an Irish dance performance, and wished you could “do a little jig,” Eirerobics is for you! By simplifying the basic dance steps and combining it with aerobic moves and basic marching, we have created a way to enjoy the fun and joy of Irish dancing at home. Where you truly can “dance as if no one were watching”!</Text>
            </View>
            <View style={{
                paddingTop: heightPercentageToDP('4%')
            }}>
                <Button
                    buttonText={'More About Us'}
                />
            </View>
        </ImageBackground>
    )
}

export default Introduction;

const styles = StyleSheet.create({
    image: {
        height: heightPercentageToDP('120%'),
        width: widthPercentageToDP('100%')
    },
    wrapper: {
        padding: heightPercentageToDP('6%')
    },
    image2: {
        height: heightPercentageToDP('40%'),
        width: heightPercentageToDP('27%'),
        alignSelf: 'flex-end'
    },
    coursesView: {
        backgroundColor: colors.primary,
        padding: heightPercentageToDP('1%'),
        width: widthPercentageToDP('29%'),
        position: 'absolute',
        bottom: 40,
    }
})