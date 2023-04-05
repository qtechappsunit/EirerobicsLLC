import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import images from '../assets/images';
import Play from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import fonts from '../assets/fonts';

const VideoIntroduction = () => {
    return (
        <View>
            <Text
                style={{
                    color: colors.black,
                    fontSize: heightPercentageToDP('3%'),
                    width: widthPercentageToDP('65%'),
                    alignSelf: 'center',
                    fontFamily: fonts.Regular,
                }}
            >Introduction To
                Eirerobics By Diane</Text>
            <View
                style={{
                    paddingTop: heightPercentageToDP('4%'),
                }}
            >

                <ImageBackground
                    source={images.home2}
                    style={styles.image2}
                >
                    <LinearGradient
                        colors={['#000', 'transparent']}
                        start={{ x: 0, y: 2.2 }} end={{ x: 1, y: 0 }}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <View
                            style={{
                                paddingTop: heightPercentageToDP('5%')
                            }}
                        >
                            <View
                                style={{
                                    borderColor: colors.white,
                                    borderWidth: 1,
                                    padding: heightPercentageToDP('5%'),
                                    width: widthPercentageToDP('5%'),
                                    borderRadius: 100,
                                }}
                            >
                            </View>
                            <Play
                                name={'controller-play'}
                                size={40}
                                color={colors.white}
                                style={{ bottom: heightPercentageToDP('8%'), left: heightPercentageToDP('3%') }}
                            />
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </View>
        </View >
    )
}

export default VideoIntroduction;

const styles = StyleSheet.create({
    image2: {
        height: heightPercentageToDP('30%'),
        width: heightPercentageToDP('40%'),
    }
})