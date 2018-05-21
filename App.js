import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';
import HomeScreen from './src/screens/Home/Home';


// Register screens
Navigation.registerComponent(
  'thoughts.AuthScreen',
  () => AuthScreen
);
Navigation.registerComponent(
  'thoughts.HomeScreen',
  () => HomeScreen
);

// Start App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'thoughts.AuthScreen',
    title: 'Login'
  }
});