import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import images from '../assets/images';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';
import Play from 'react-native-vector-icons/Entypo';
import MenuBar from '../components/MenuBar';
import Button from '../components/Button';
import Introduction from '../components/Introduction';
import VideoIntroduction from '../components/VideoIntroduction';
import Programs from '../components/Programs';
import Swiper from 'react-native-swiper';
import SwiperIcon from 'react-native-vector-icons/MaterialIcons';
import fonts from '../assets/fonts/index';

const popularPrograms = [
    {
        id: 1,
        image: images.program,
        heading: 'Reels',
        detail: 'A lower intensity dance work out with reel music only.'
    },
]


const Homepage = () => {
    return (
        <Wrapper
            style={{
                backgroundColor: '#FCFCFC'
            }}
        >
            <View
                style={{
                    position: 'absolute',
                    zIndex: 1
                }}
            >
                <Header
                    iconStyle={{ left: heightPercentageToDP('16.5%') }}
                />
            </View>
            <ScrollView>
                <Image
                    source={images.home}
                    style={styles.image}
                />
                <View style={styles.playWrapper}>
                    <View
                        style={{
                            borderColor: colors.white,
                            borderWidth: 1,
                            padding: heightPercentageToDP('7%'),
                            width: widthPercentageToDP('7%'),
                            borderRadius: 100,
                        }}
                    >
                    </View>
                    <Play
                        name={'controller-play'}
                        size={45}
                        color={colors.white}
                        style={{ bottom: heightPercentageToDP('10.2%'), marginLeft: heightPercentageToDP('1%') }}
                    />
                </View>
                <View
                    style={{
                        padding: heightPercentageToDP('4%'),
                    }}
                >
                    <Text
                        style={{
                            fontSize: heightPercentageToDP('3.5%'),
                            color: colors.black,
                            width: widthPercentageToDP('60%'),
                            fontFamily: fonts.Regular,
                        }}
                    >Dance Is The Soul
                        Of The Body</Text>
                    <Text style={{
                        marginVertical: heightPercentageToDP('2.2%'),
                        fontSize: heightPercentageToDP('2%'),
                        color: colors.black,
                        width: widthPercentageToDP('89%')
                    }}>Eirerobics is an easy to follow Irish Dance{'\n'}{'\n'}
                        Exercise Program - a Dance Exercise Video / DVD{'\n'}{'\n'}
                        featuring wonderful Traditional Irish Music.</Text>
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('1%')
                        }}
                    >
                        <Button
                            buttonText={'Become A Member'}
                            onPress={() => alert('work in progress')}
                        />
                    </View>
                </View>
                <View
                    style={{
                        paddingTop: heightPercentageToDP('8%'),
                    }}
                >
                    <Introduction />
                </View>
                <View
                    style={{
                        paddingTop: heightPercentageToDP('20%'),
                        padding: heightPercentageToDP('5.5%')
                    }}
                >
                    <VideoIntroduction />
                </View>
                <View style={{
                    paddingTop: heightPercentageToDP('3%')
                }}>
                    <Text
                        style={{
                            fontSize: heightPercentageToDP('3.2%'),
                            color: 'black',
                            alignSelf: 'center',
                            fontFamily: fonts.Regular,
                            width: widthPercentageToDP('60%')
                        }}
                    >Our Most Popular Programs</Text>
                </View>
                <View
                    style={{
                        alignItems: 'center',
                    }}
                >
                    <Swiper
                        horizontal={true}
                        loadMinimal
                        loadMinimalSize={3}
                        showsButtons={true}
                        style={styles.wrapper}
                        buttonWrapperStyle={{
                            paddingTop: heightPercentageToDP('4%'),
                            justifyContent: 'center',
                        }}
                        nextButton={
                            <View style={styles.button}>
                                <SwiperIcon
                                    name={'navigate-next'}
                                    color={colors.black}
                                    size={34}
                                    style={{ alignSelf: 'center' }}
                                />
                            </View>
                        }
                        prevButton={
                            <View style={styles.button}>
                                <SwiperIcon
                                    name={'navigate-before'}
                                    color={colors.black}
                                    size={34}
                                    style={{ alignSelf: 'center' }}
                                />
                            </View>
                        }
                    >
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingTop: heightPercentageToDP('6%'),
                            }}
                        >
                            {popularPrograms.map((item) => (
                                <Programs
                                    key={item.id}
                                    image={item.image}
                                    heading={item.heading}
                                    detail={item.detail}
                                    textWrapper={{ marginLeft: -2 }}
                                />
                            ))}
                        </View>
                    </Swiper>
                </View>
            </ScrollView>
            <MenuBar />
        </Wrapper >


    )
}

export default Homepage;

const styles = StyleSheet.create({
    image: {
        height: heightPercentageToDP('80%'),
        width: heightPercentageToDP('51%'),
    },
    playWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        height: heightPercentageToDP('65%'),
        position: 'absolute',
        top: 120,
        left: 0,
        right: 0,
        bottom: 0
    },
    wrapper: {
    },
    button: {
        backgroundColor: '#FFFFFF',
        padding: heightPercentageToDP('0.5%'),
        width: widthPercentageToDP('10%'),
        marginRight: heightPercentageToDP('2%')
    },

})  
