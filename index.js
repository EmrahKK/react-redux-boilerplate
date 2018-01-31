import React from 'react'
import { AppRegistry } from 'react-native';
// For wraping store over app component
import { Provider } from 'react-redux'

import configureStore from './src/store'

import NavigationDeepLinkingApp from './src/NavigationDeepLinkingApp';

// create/configure store object
const store = configureStore()

// wrap store over App component
const ReduxApp = () => (
    <Provider store={store}>
        <NavigationDeepLinkingApp />
    </Provider>
)

AppRegistry.registerComponent('rnlearnredux', () => ReduxApp);
