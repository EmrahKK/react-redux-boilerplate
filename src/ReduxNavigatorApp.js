//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// For connecting store state and dispatch to App's props object
import { connect } from 'react-redux'
// import duck Actions
import { fetchPeopleFromAPI } from './store/ducks/people'

// react-navigation
import { StackNavigator } from 'react-navigation';
import { homeScreen, detailsScreen } from './view/screens';

const ReduxNavigatorApp = StackNavigator({
    Home: {
        screen: homeScreen,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    Details: {
        screen: detailsScreen,
        navigationOptions: {
            headerTitle: 'Details',
        },
        path: 'detail/:user',
    },
});

// override mapStateToProps function to map store's state to App props
function mapStateToProps(state) {
    return {
        people: state.people
    }
}
// override mapDispatchToProps function to map store's dispatch to App props
function mapDispatchToProps(dispatch) {
    return {
        getPeople: () => dispatch(fetchPeopleFromAPI())
    }
}
// connect store's state and dispatch to App components
export default connect(mapStateToProps, mapDispatchToProps)(ReduxNavigatorApp)
