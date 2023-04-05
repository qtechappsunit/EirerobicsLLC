import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import fonts from '../assets/fonts';
import Button from '../components/Button';
import ProfileDetail from '../components/ProfileDetail';
import ArrowBack from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const profileDetails = [
    {
        id: 1,
        heading: 'Membership',
        text: 'Monthly Subscriptions',
        subscription: 'subscription until 20 june 2023'
    },
    {
        id: 2,
        heading: 'Bills & Payment',
        text: 'Billing Details',
        subscription: 'VISA  **** **** 1902'
    }
]

const Profile = () => {

    const navigation = useNavigation();

    return (
        <View
            style={{
                backgroundColor: colors.background_color,
                flex: 1
            }}
        >
            <View
                style={{
                    paddingTop: heightPercentageToDP('7%'),
                    padding: heightPercentageToDP('2%')
                }}
            >
                <ArrowBack
                    name={'arrowleft'}
                    size={40}
                    color={colors.black}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View
                style={{
                    alignItems: 'center'
                }}
            >
                <Image
                    source={require('../assets/images/profileimage.jpg')}
                    style={styles.profileImage}
                />
                <Text
                    style={{
                        fontSize: heightPercentageToDP('3%'),
                        marginTop: heightPercentageToDP('2%'),
                        fontFamily: fonts.Medium,
                        color: colors.black,
                    }}
                >Jonathan</Text>
                <View
                    style={{
                        paddingTop: heightPercentageToDP('4%'),
                    }}
                >
                    <Button
                        buttonText={'Edit Profile'}
                        buttonStyle={{
                            borderRadius: 10
                        }}
                        onPress={() => alert('work in progress')}
                    />
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('2.5%')
                        }}
                    >
                        <Button
                            buttonText={'Logout'}
                            buttonStyle={{
                                borderRadius: 10
                            }}
                            onPress={() => alert('work in progress')}
                        />
                    </View>
                </View>

            </View>
            <View
                style={{
                    padding: heightPercentageToDP('3%'),
                    paddingTop: heightPercentageToDP('5%')
                }}
            >
                {profileDetails.map((item, i) => (
                    <ProfileDetail
                        key={i}
                        heading={item.heading}
                        text={item.text}
                        subscription={item.subscription}
                        onPress={() => alert('work in progress')}
                    />
                ))}
            </View>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    profileImage: {
        height: heightPercentageToDP('15.5%'),
        width: heightPercentageToDP('15.5%'),
        borderRadius: 100
    },

})