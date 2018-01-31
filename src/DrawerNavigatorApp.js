//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//import DrawerNavigator
import { DrawerNavigator } from "react-navigation";
// import screens
import { homeScreen, detailsScreen, peopleScreen } from "./view/screens";
// import ionic icons
import Icon from 'react-native-vector-icons/Ionicons';

// create a component
const DrawerNavigatorApp = DrawerNavigator({
    Home: {
        screen: homeScreen,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor, focused }) => (
                <Icon
                    name={focused ? 'ios-home' : 'ios-home-outline'}
                    size={20}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    Detail: {
        screen: detailsScreen,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor, focused }) => (
                <Icon
                    name={focused ? 'ios-home' : 'ios-home-outline'}
                    size={20}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    People: {
        screen: peopleScreen,
        navigationOptions: {
            drawerLabel: 'Profile',
            drawerIcon: ({ tintColor, focused }) => (
                <Icon
                    name={focused ? 'ios-person' : 'ios-person-outline'}
                    size={20}
                    style={{ color: tintColor }}
                />
            ),
        },
    }
})

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default DrawerNavigatorApp;
