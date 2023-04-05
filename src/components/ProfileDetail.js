import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import Arrowright from 'react-native-vector-icons/MaterialIcons';
import fonts from '../assets/fonts';

const ProfileDetail = ({ heading, text, subscription, onPress }) => {
    return (
        <View>
            <Text style={{ fontSize: heightPercentageToDP('2.5%'), color: colors.black, fontFamily: fonts.Medium }}>{heading}</Text>
            <View style={{ paddingTop: heightPercentageToDP('2.5%') }}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={onPress}
                >
                    <View style={styles.detailView}>
                        <View style={{ paddingTop: heightPercentageToDP('1.5%'), marginLeft: heightPercentageToDP('2%') }}>
                            <Text style={{
                                fontSize: heightPercentageToDP('2.1%'), color: colors.white
                            }}>{text}</Text>
                            <Text style={{
                                color: colors.white,
                                marginVertical: heightPercentageToDP('1%')
                            }}>{subscription}</Text>
                        </View>
                        <Arrowright
                            name={'keyboard-arrow-right'}
                            size={37}
                            color={colors.white}
                            style={{ alignSelf: 'center', marginRight: heightPercentageToDP('0.7%') }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileDetail;

const styles = StyleSheet.create({
    detailView: {
        backgroundColor: colors.primary,
        padding: heightPercentageToDP('0.7%'),
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: heightPercentageToDP('4%')
    }
})