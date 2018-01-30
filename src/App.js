import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

// For connecting store state and dispatch to App's props object
import { connect } from 'react-redux'
// import duck Actions
import { fetchPeopleFromAPI } from './store/ducks/people'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        {
          this.props.people.isFetching ?
            <Text style={styles.welcome}>
              Loading
            </Text>
            :
            <TouchableHighlight onPress={() => this.props.getPeople()}>
              <Text style={styles.welcome}>Load People</Text>
            </TouchableHighlight>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
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
)(App)