import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from '../screens/Homepage';
import About from '../screens/About';
import Instruction from '../screens/Instruction';
import Playlist from '../screens/Playlist';
import Faqs from '../screens/Faqs';
import Lesson from '../screens/Lesson';
import AppStatusBar from '../components/AppStatusBar';
import Menu from '../screens/Menu';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <>
            <AppStatusBar />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name='Homepage' component={Homepage} />
                    <Stack.Screen name='About' component={About} />
                    <Stack.Screen name='Instruction' component={Instruction} />
                    <Stack.Screen name='Playlist' component={Playlist} />
                    <Stack.Screen name='Faqs' component={Faqs} />
                    <Stack.Screen name='Lesson' component={Lesson} />
                    <Stack.Screen name='Menu' from component={Menu} />
                    <Stack.Screen name='Profile' component={Profile} />
                </Stack.Navigator>
            </NavigationContainer>
        </>

    )
}

export default AuthStack;