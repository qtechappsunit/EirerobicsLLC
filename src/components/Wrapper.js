import React from 'react-native';
import { StyleSheet, Text , View } from 'react-native';
import colors from '../assets/colors';

const Wrapper = ({style,children}) => {
        return (
            <View style={[styles.container,style]}>{children}</View>
        )
}

export default Wrapper;

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        flex: 1
    }
})