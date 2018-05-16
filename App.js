import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';


// Register screens
Navigation.registerComponent(
  'thoughts.AuthScreen',
  () => AuthScreen
);

// Start App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'thoughts.AuthScreen',
    title: 'Login'
  }
});