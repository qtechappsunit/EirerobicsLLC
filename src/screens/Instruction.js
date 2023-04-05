import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import images from '../assets/images';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import Programs from '../components/Programs';
import VideoIntroduction from '../components/VideoIntroduction';
import Wrapper from '../components/Wrapper';

const pluralPrograms = [
    {
        id: 1,
        text: 'Our Most Plural Program',
        image: images.program,
        heading: 'Reels',
        detail: 'A lower intensity dance work out with reel music only.'
    },
    {
        id: 2,
        image: images.instruction,
        heading: 'Just The Steps',
        detail: 'Instruction in each of the Eirerobics steps including the basic aerobic moves and Irish dance steps.'
    },
    {
        id: 3,
        image: images.instruction2,
        heading: 'Jigs',
        detail: 'For a quick, fun workout with jig music'
    },
    {
        id: 4,
        image: images.instruction3,
        heading: 'Complete Workout',
        detail: 'Includes warm up, stretching and cool down as well as a combination of jig and reel steps.'
    },

]

const Instruction = () => {
    return (
        <Wrapper
            style={{
                backgroundColor: colors.background_color
            }}
        >
            <Header
                iconStyle={{ left: heightPercentageToDP('16.5%') }}
            />
            <ScrollView
                contentContainerStyle={{ paddingBottom: heightPercentageToDP('15%') }}
                showsVerticalScrollIndicator={false}
            >
                {pluralPrograms.map((item) => (
                    <Programs
                        key={item.id}
                        text={item.text}
                        image={item.image}
                        heading={item.heading}
                        detail={item.detail}
                        textStyle={{ marginTop: heightPercentageToDP('2%') }}
                    />
                ))}
                <View
                    style={{
                        alignItems: 'center',
                        paddingTop: heightPercentageToDP('4%')
                    }}
                >
                    <VideoIntroduction />
                </View>
            </ScrollView>
            <MenuBar />
        </Wrapper>


    )
}

export default Instruction;

const styles = StyleSheet.create({

})