import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import DanceCard from '../components/DanceCard';
import FaqCard from '../components/FaqCard';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import Wrapper from '../components/Wrapper';
import fonts from '../assets/fonts';

const Card = [
    {
        id: 1,
        text: 'How long is the workout?'
    },
    {
        id: 2,
        text: 'Do I need special dance shoes?'
    },
    {
        id: 3,
        text: 'Will this teach me Irish dance?'
    },
    {
        id: 4,
        text: 'How many calories will I burn?'
    }
]

const Faqs = () => {
    return (
        <Wrapper>
            <Header />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: heightPercentageToDP('10%')
                }}
            >
                <View
                    style={{
                        padding: heightPercentageToDP('5.5%')
                    }}
                >
                    <Text
                        style={{
                            fontSize: heightPercentageToDP('3.5%'),
                            color: colors.black,
                            fontFamily: fonts.Regular
                        }}
                    >Faq's</Text>
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('3%')
                        }}
                    >
                        <DanceCard />
                    </View>
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('3%')
                        }}
                    >
                        {Card.map((item) => (
                            <FaqCard
                                key={item.id}
                                text={item.text}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>
            <MenuBar />
        </Wrapper>

    )
}

export default Faqs;

const styles = StyleSheet.create({

})