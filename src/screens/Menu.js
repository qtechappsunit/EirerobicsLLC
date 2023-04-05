import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../assets/colors';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';

const screens = [
    {
        id: 1,
        text: 'About',
        navigate: 'About'
    },
    {
        id: 2,
        text: 'FAQS',
        navigate: 'Faqs'
    },
    {
        id: 3,
        text: 'Instruction',
        navigate: 'Instruction'
    },
    {
        id: 4,
        text: 'Playlist',
        navigate: 'Playlist'
    },
    {
        id: 5,
        text: 'Lesson',
        navigate: 'Lesson'
    }
]



const Menu = () => {

    const navigation = useNavigation();

    const onTextPress = (navigate) => {
        navigation.replace(navigate)
    }

    return (
        <View
            style={{
                backgroundColor: colors.primary,
                flex: 1
            }}
        >
            <View
                style={{
                    padding: heightPercentageToDP('3%'),
                    paddingTop: heightPercentageToDP('6%')
                }}
            >
                <Icon
                    name={'cross'}
                    color={colors.white}
                    size={50}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View
                style={{
                    padding: heightPercentageToDP('3%'),
                    paddingTop: heightPercentageToDP('4%'),
                }}
            >
                {screens.map((item) => (
                    <TouchableOpacity
                        onPress={() => onTextPress(item.navigate)}
                        key={item.id}
                    >
                        <Text
                            key={item.id}
                            style={styles.screensText}
                        >{item.text}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default Menu;

const styles = StyleSheet.create({
    screensText: {
        fontSize: heightPercentageToDP('4%'),
        color: colors.white,
        marginBottom: heightPercentageToDP('3%')
    }
})