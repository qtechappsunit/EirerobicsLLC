import React from 'react-native';
import { StyleSheet, StatusBar } from 'react-native';

const AppStatusBar = () => {
        return (
            <StatusBar 
              backgroundColor={'transparent'}
              translucent={true}
              barStyle={'light-content'}
            />
        )
}

export default AppStatusBar;

const styles = StyleSheet.create({
    
})