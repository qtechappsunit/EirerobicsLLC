import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import images from '../assets/images';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import Wrapper from '../components/Wrapper';
import fonts from '../assets/fonts/index';

const AboutImages = [
    {
        id: 1,
        image: images.about3
    },
    {
        id: 2,
        image: images.about4
    },
    {
        id: 3,
        image: images.about5
    },
    {
        id: 4,
        image: images.about6
    }
]

const About = () => {
    return (
        <Wrapper
            style={{
                backgroundColor: colors.background_color
            }}
        >

            <Header />
            <ScrollView
                contentContainerStyle={{ paddingBottom: heightPercentageToDP('50%') }}
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        paddingTop: heightPercentageToDP('6%'),
                        padding: heightPercentageToDP('6%')
                    }}
                >
                    <Image
                        source={images.about}
                        style={styles.image}
                    />
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('4%')
                        }}
                    >
                        <Text style={styles.heading}>Welcome To Eirerobics</Text>
                    </View>
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('2.5%')
                        }}
                    >
                        <Text
                            style={{
                                color: 'black'
                            }}
                        >If you have ever enjoyed an Irish dance performance, and wished you could “do a little jig,” Eirerobics is for you! By simplifying the basic dance steps and combining it with aerobic moves and basic marching, we have created a way to enjoy the fun and joy of Irish dancing at home. Where you truly can “dance as if no one were watching”! No one in this video is a professional dancer. We wanted to create a program for real women of all ages – taking the dance back to the crossroads where the Irish used to dance, just for fun. We hope you will come join us. Instructor and Eirerobics creator, Diane Laverty has been a student of dance for over fifty years and been involved with aerobics, both taking and teaching class for almost thirty years. A latecomer to Irish dance, she wanted to create a video where everyone could do some dancing and enjoy the beautiful traditional Irish dance music.</Text>
                    </View>
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('4%')
                        }}
                    >
                        <Image
                            source={images.about2}
                            style={styles.image2}
                        />
                    </View>
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('3%')
                        }}
                    >
                        <Text style={styles.heading}>Dance As If No One Is
                            Watching</Text>
                    </View>
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('2.5%')
                        }}
                    >
                        <Text
                            style={{
                                color: 'black',
                                fontSize: heightPercentageToDP('1.9%')
                            }}
                        >Traditional Irish…. Dance as if no one is watching you ….Irish Proverb Do a little jig. Traditional Irish music arranged and recorded for this program by Cady Finlayson..she is best know for her Spirited Celtic fiddling which she has brought to 38 states and Ireland, performing at venues including Carnegie Hall, Caramoor and the McPherson Scottish Festival.  She performs as a due with French guitarist Vita Tang and her cds have attracted listeners worldwide.  She is accompanied here by Padraig Allen on guitar, and Tim Alworth on bodhran and snare drum.</Text>
                    </View>
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('2.5%'),
                            flexDirection: 'row',
                            flexWrap: 'wrap'
                        }}
                    >
                        {/* <FlatList
                            data={AboutImages}
                            keyExtractor={(item) => item.id}
                            numColumns={2}
                            renderItem={({ item}) => (
                                <Image
                                    key={item.id}
                                    source={item.image}
                                    style={styles.aboutimages}
                                />
                            )}
                        /> */}
                        {AboutImages.map((item) => (
                            <Image
                                key={item.id}
                                source={item.image}
                                style={styles.aboutimages}
                            />
                        ))}
                    </View>
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('2%')
                        }}
                    >
                        <Text
                            style={{
                                color: colors.black,
                                fontSize: heightPercentageToDP('1.9%')
                            }}
                        >At to Welcome to Eirerobics (logo)! Cead Mile Failte! There is an accent over the “e” in cead and the “I’s” in mile and failte. (this means welcome in Irish – a very familiar phrase even with people who don’t speak Irish – just for your information, not for website, not asking you to give the translation) Simple Irish jig and reel steps, combined with classic aerobic moves, provide an easy fun workout for all ages and fitness levels. Inspired by both Irish step dancing and traditional ceili (Irish group dancing) dance steps. The large photo of me in shamrock , smaller pic of me and boy dancing. More about us should lead to info on musicians…should add also the music is available separately on CD..amazon link here. Come join us in the fun and joy of Irish dancing in an aerobic exercise program set to traditional Irish music.   Simple Irish jig and reel steps combined with classic aerobic exercise moves provide an easy, fun workout for all ages.</Text>
                    </View>
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('6%')
                        }}
                    >
                        <Text
                            style={{
                                color: 'red'
                            }}
                        >Note: for more music by Cady, please visit celticfiddle.com Eirerobics music only available on amazon.com</Text>
                    </View>
                </View>
            </ScrollView>

            <MenuBar />
        </Wrapper>

    )
}

export default About;

const styles = StyleSheet.create({
    image: {
        height: heightPercentageToDP('37%'),
        width: heightPercentageToDP('37%'),
        alignSelf: 'center'
    },
    image2: {
        height: heightPercentageToDP('57%'),
        width: heightPercentageToDP('39%'),
        alignSelf: 'center'
    },
    heading: {
        fontSize: heightPercentageToDP('3%'),
        color: colors.black,
        fontFamily: fonts.Regular
    },
    aboutimages: {
        height: heightPercentageToDP('17%'),
        width: heightPercentageToDP('17%'),
        marginRight: heightPercentageToDP('1.5%'),
        marginBottom: heightPercentageToDP('2%'),
        borderRadius: 5
    }
})