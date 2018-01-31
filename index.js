import React from 'react'
import { AppRegistry } from 'react-native';
// For wraping store over app component
import { Provider } from 'react-redux'

import configureStore from './src/store'

import DrawerNavigatorApp from './src/DrawerNavigatorApp';

// create/configure store object
const store = configureStore()

// wrap store over App component
const ReduxApp = () => (
    <Provider store={store}>
        <DrawerNavigatorApp />
    </Provider>
)

AppRegistry.registerComponent('rnlearnredux', () => ReduxApp);
