//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// redux connect
import { connect } from "react-redux";
// react navigation
import { TabNavigator } from "react-navigation";
// import screens
import { homeScreen, detailsScreen, peopleScreen } from "./view/screens";

// create a component

const TabNavigationApp = TabNavigator({
    Home: {
        screen: homeScreen
    },
    Detail: {
        screen: detailsScreen
    },
    People: {
        screen: peopleScreen
    }
})

function mapStateToProps(state) {
    return {
        people: state.people
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPeople: () => dispatch(fetchPeopleFromAPI())
    }
}

//make this component available to the app
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabNavigationApp);
