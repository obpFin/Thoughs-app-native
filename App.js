import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import HomeScreen from './src/screens/Home/Home';
import AddThoughtScreen from './src/screens/AddThought/AddThought';
import configureStore from './src/store/configureStore';

const store = configureStore();

// Register screens
Navigation.registerComponent(
  'thoughts.AuthScreen',
  () => AuthScreen
);
Navigation.registerComponent(
  'thoughts.HomeScreen',
  () => HomeScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'thoughts.AddThoughtScreen',
  () => AddThoughtScreen,
  store,
  Provider
);

// Start App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'thoughts.AuthScreen',
    title: 'Login'
  }
});