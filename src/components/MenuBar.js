import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import User from 'react-native-vector-icons/FontAwesome';
import Menu from 'react-native-vector-icons/Feather';
import fonts from '../assets/fonts';
import { useNavigation } from '@react-navigation/native';

const MenuBar = () => {

    const navigation = useNavigation();

    return (
        <View style={{
            padding: heightPercentageToDP('1.2%'),
            left: 0,
            bottom: 0,
            elevation: 0,
            borderTopWidth: 0,
            position: 'absolute',
            marginBottom: heightPercentageToDP('0.7%')
        }}
        >
            <View style={styles.menuView}>
                <TouchableOpacity
                    style={styles.iconView}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <User
                        name={'user-o'}
                        color={colors.white}
                        size={24}
                        style={{ position: 'absolute' }}
                    />
                </TouchableOpacity>
                <Text
                    style={{
                        color: colors.primary,
                        fontSize: heightPercentageToDP('2.5'),
                        alignSelf: 'center',
                        fontFamily: fonts.Regular,
                    }}
                >EIREROBICS LLC</Text>
                <TouchableOpacity
                    style={styles.iconView}
                    onPress={() => navigation.navigate('Menu')}
                >
                    <Menu
                        name={'menu'}
                        color={colors.white}
                        size={24}
                        style={{ position: 'absolute' }}
                    />
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default MenuBar;

const styles = StyleSheet.create({
    menuView: {
        backgroundColor: colors.white,
        padding: heightPercentageToDP('1%'),
        width: widthPercentageToDP('95%'),
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 50,

    },
    iconView: {
        padding: heightPercentageToDP('3.5%'),
        width: widthPercentageToDP('3.5%'),
        borderRadius: 100,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    }
})