import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import images from '../assets/images';
import Button from '../components/Button';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import VideoIntroduction from '../components/VideoIntroduction';
import Wrapper from '../components/Wrapper';
import fonts from '../assets/fonts';

const Buttons = [
    {
        id: 1,
        text: 'View Demo Video',
    },
    {
        id: 2,
        text: 'Listen To Soundtrack',
    },
    {
        id: 3,
        text: 'Buy DVD / CD',
    },
    {
        id: 4,
        text: 'About Us',
    }
]

const Playlist = () => {
    return (
        <Wrapper>

            <Header />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: heightPercentageToDP('10%') }}
            >
                <View style={{
                    padding: heightPercentageToDP('5.5%'),
                }}>
                    <Text
                        style={{
                            fontSize: heightPercentageToDP('3.5%'),
                            color: 'black',
                            fontFamily: fonts.Regular
                        }}
                    >The Video</Text>
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('2%')
                        }}
                    >
                        <Text
                            style={{
                                color: 'black'
                            }}
                        >Dance to the tune of our fiddle! Do the Irish 3 step, the Seven’s and the Jig, as well as aerobic dance steps like the Charleston, Grapevine, and Heel Digs. Have fun with steps that are Irish inspired, but created for Eirerobics, such as  he Irish Cross, the Celtic Knot and the Shrug. Advanced dvd format allows you to play all, or pick your favorite routines. Choose from two audio options – with or without commentary. Three shorter versions are also available: “Beginning Irish” “Jigs Only” or “Eirerobics Mix”. A section on step instructions is included, although most people find they can learn by just following along. A brief overview of the history of dance in Ireland will get you in the mood to dance!
                            NOTE: This is not an instruction DVD in Irish dancing. It is an exercise program, inspired by Irish dance steps, using traditional dance music.</Text>
                    </View>

                </View>
                <View
                    style={{
                        padding: heightPercentageToDP('2%'),
                        marginLeft: heightPercentageToDP('1%'),
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}
                >
                    {/* <FlatList
                        data={Buttons}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        renderItem={({ item }) => (
                            <Button
                                key={item.id}
                                buttonStyle={styles.button}
                                buttonText={item.text}
                                textStyle={styles.buttonText}
                            />
                        )}
                    /> */}
                    {Buttons.map((item) => (
                        <Button
                            key={item.id}
                            buttonStyle={styles.button}
                            buttonText={item.text}
                            textStyle={styles.buttonText}
                        />
                    ))}
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        padding: heightPercentageToDP('3.5%')
                    }}
                >
                    <Image
                        source={images.video}
                        style={styles.videoImage}
                    />
                    <Button
                        buttonStyle={styles.videoClip}
                        buttonText={'Download Sample Video Clip'}
                    />
                </View>
                <View style={{
                    padding: heightPercentageToDP('4%')
                }}>
                    <Image
                        source={images.video2}
                        style={styles.musicImage}
                    />
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('5%')
                        }}
                    >
                        <Text
                            style={{
                                color: colors.black,
                                fontSize: heightPercentageToDP('4%'),
                                fontFamily: fonts.Regular
                            }}
                        >The Music</Text></View>
                    <View>
                        <View
                            style={{
                                paddingTop: heightPercentageToDP('2.5%')
                            }}
                        >
                            <Text
                                style={{
                                    color: colors.black
                                }}
                            >An original recording of traditional Irish music, 12 Irish tunes arranged specifically for this program Featuring Cady Finlayson on fiddle www.cadyfinlayson.com Cady Finlayson has brought her spirited Irish fiddling to 25 U.S. States and Ireland, performing at venues such as Carnegie Hall, the Brooklyn Museum of Art and the Slainte Irish Festival. She has recorded two fiddle CDs and music from her Harp and Shamrock CD is featured in Irish baseball film, The Emerald Diamond. For this special program, Cady is accompanied by Padraig Allen on guitar and Tim Alworth on bodhran and snare.Complete step instructions also included – no prior dance experience required</Text>
                        </View>
                    </View>
                    <View style={{
                        paddingTop: heightPercentageToDP('6%')
                    }}>
                        <VideoIntroduction />
                    </View>
                </View>
            </ScrollView>
            <MenuBar />
        </Wrapper>


    )
}

export default Playlist;

const styles = StyleSheet.create({
    button: {
        height: heightPercentageToDP('6.5%'),
        width: widthPercentageToDP('42%'),
        marginBottom: heightPercentageToDP('2%'),
        marginRight: heightPercentageToDP('1%'),
    },
    buttonText: {
        fontSize: heightPercentageToDP('1.7%')
    },
    videoImage: {
        height: heightPercentageToDP('20%'),
        width: widthPercentageToDP('30%')
    },
    videoClip: {
        alignSelf: 'center',
        width: widthPercentageToDP('55%'),
        marginLeft: heightPercentageToDP('1.5%')
    },
    musicImage: {
        height: heightPercentageToDP('50%'),
        width: widthPercentageToDP('85%')
    }
})