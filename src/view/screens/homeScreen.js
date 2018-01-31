//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// import duck Actions
import { fetchPeopleFromAPI } from '../../store/ducks/people'

// For connecting store state and dispatch to App's props object
import { connect } from 'react-redux'

// create a component
class homeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Details')}
                    title="Go to details"
                />
                <Button
                    onPress={() => this.props.getPeople()}
                    title="Fetch People"
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
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
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(homeScreen)
