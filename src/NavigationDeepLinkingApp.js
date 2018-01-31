//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

// import react navigation stacknavigator
import { StackNavigator } from "react-navigation";
// import Screens
import { homeScreen, detailsScreen } from "./view/screens";

const SimpleSatckNavApp = StackNavigator({
    Home: {
        screen: homeScreen
    },
    Details: {
        screen: detailsScreen,
        path: 'chat/:user', // path for deep linking
    }
})

// on Android, the URI prefix typically contains a host in addition to scheme
const prefix = Platform.OS == 'android' ? 'rnlearnredux://rnlearnredux/' : 'rnlearnredux://';

const NavigationDeepLinkingApp = () => <SimpleSatckNavApp uriPrefix={prefix} />;

//make this component available to the app
export default NavigationDeepLinkingApp;
