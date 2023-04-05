import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import LessonCard from '../components/LessonCard';
import MoVideoPlayer from 'react-native-mo-video-player';
import fonts from '../assets/fonts';

const buttons = [
    {
        id: 1,
        text: 'Lessons',
    },
    {
        id: 2,
        text: 'Descriptions',
    }
]

const lessonVideos = [
    {
        id: 1,
        heading: 'Lesson 2',
        text: '3 videos',
        timeIcon: 'ios-time-sharp',
        time: '14 m 35 s',
        icon: 'keyboard-arrow-down'
    },
    {
        id: 2,
        heading: 'Lesson 3',
        text: '3 videos',
        timeIcon: 'ios-time-sharp',
        time: '14 m 35 s',
        icon: 'lock'
    }
]


const Lesson = () => {
    const [chooseButton, setChooseButton] = useState(1)
    const [isOption, setIsOption] = useState(true)

    const width = Dimensions.get('window').width;

    const onButtonPress = (buttonID) => {
        setChooseButton(buttonID)

        if (buttonID == '2') {
            setIsOption(false)
        } else {
            setIsOption(true)
        }
    }

    const onCardPress = (cardID) => {
        if (cardID == '1') {
            alert('work in progress')
        } else if (cardID == '2') {
            alert('lesson 3 is locked')
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <MoVideoPlayer
                source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}
                style={{ width: width, height: heightPercentageToDP('35%'), marginTop: 50 }}
                showSeeking10SecondsButton={false}
                autoPlay={true}
            />
            <Wrapper
                style={{
                    backgroundColor: colors.background_color
                }}
            >
                <View>
                    {/* <Video
                    source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}
                    style={{ height: heightPercentageToDP('32%') }}
                    controls={true}
                    muted={true}
                />  */}
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: heightPercentageToDP('10%') }}
                >
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('2.5%'),
                            padding: heightPercentageToDP('4%')
                        }}
                    >
                        <Text
                            style={{
                                color: colors.black,
                                fontSize: heightPercentageToDP('2.3%'),
                                fontFamily: fonts.Regular
                            }}
                        >Lesson 1</Text>
                        <View
                            style={{
                                paddingTop: heightPercentageToDP('2%')
                            }}
                        >
                            <Text
                                style={{
                                    color: colors.black,
                                    fontSize: heightPercentageToDP('3%')
                                }}
                            >Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing</Text>
                            <View
                                style={{
                                    paddingTop: heightPercentageToDP('5%'),
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                {buttons.map((item) => (
                                    <TouchableOpacity
                                        key={item.id}
                                        style={chooseButton == item.id ? styles.option : styles.buttonOpt}
                                        onPress={() => onButtonPress(item.id)}
                                        activeOpacity={0.9}
                                    >
                                        <Text
                                            key={item.id}
                                            style={chooseButton == item.id ? styles.text : styles.textOption}
                                        >
                                            {item.text}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            {isOption ?
                                <View
                                    style={{
                                        paddingTop: heightPercentageToDP('4%')
                                    }}
                                >
                                    {lessonVideos.map((item) => (
                                        <LessonCard
                                            key={item.id}
                                            style={item.id == '2' && styles.card}
                                            heading={item.heading}
                                            text={item.text}
                                            time={item.time}
                                            timeIcon={item.timeIcon}
                                            icon={item.icon}
                                            onPress={() => onCardPress(item.id)}
                                        />
                                    ))}
                                </View>
                                :
                                <View
                                    style={{
                                        paddingTop: heightPercentageToDP('3.5%')
                                    }}
                                >
                                    <Text
                                        style={{
                                            width: heightPercentageToDP('40%'),
                                            color: colors.black,
                                            fontSize: heightPercentageToDP('2%')
                                        }}
                                    >Lorem ipsum dolor sit amet, elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.{'\n'}{'\n'}

                                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</Text>
                                </View>
                            }
                        </View>
                    </View>
                </ScrollView>
            </Wrapper>
        </View>
    )
}

export default Lesson;

const styles = StyleSheet.create({
    option: {
        backgroundColor: colors.primary,
        padding: heightPercentageToDP('1.7%'),
        borderRadius: 10,
        width: widthPercentageToDP('40%'),
    },
    buttonOpt: {
        width: widthPercentageToDP('40%'),
        padding: heightPercentageToDP('1.7%'),
        backgroundColor: '#E3E3E3',
        borderRadius: 10,
    },
    text: {
        fontSize: heightPercentageToDP('2.5%'),
        alignSelf: 'center',
        color: colors.white
    },
    textOption: {
        fontSize: heightPercentageToDP('2.5%'),
        alignSelf: 'center',
    },
    card: {
        opacity: 0.7,
    }
})