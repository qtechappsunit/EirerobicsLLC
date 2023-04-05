import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import images from '../assets/images';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import fonts from '../assets/fonts';

const Header = ({ style, iconStyle }) => {
    return (
        <View>
            <Image
                source={images.header}
                style={[styles.image, style]}
            />
            <View
                style={{
                    paddingTop: heightPercentageToDP('6%'),
                    padding: heightPercentageToDP('5%'),
                    position: 'absolute',
                    flexDirection: 'row'
                }}
            >
                <Text style={styles.headerText}>WELCOME TO EIREROBICS LLC</Text>
                <SearchIcon
                    name={'search1'}
                    color={colors.white}
                    size={25}
                    onPress={() => alert('work in progress')}
                    style={[{ alignSelf: 'center', left: heightPercentageToDP('16%') }, iconStyle]}
                />
            </View>
        </View>

    )
}

export default Header;

const styles = StyleSheet.create({
    headerView: {},
    image: {
        height: heightPercentageToDP('22%'),
        width:  heightPercentageToDP('60%'),
    },
    headerText: {
        fontSize: heightPercentageToDP('2.5%'),
        color: colors.white,
        fontFamily: fonts.Regular,
        width: widthPercentageToDP('42%'),
    }
})