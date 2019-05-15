import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import App from './app';

import * as serviceWorker from './serviceWorker';

AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root')
});

serviceWorker.unregister();
