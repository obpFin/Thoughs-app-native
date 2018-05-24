import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource('ios-map', 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'thoughts.HomeScreen',
          label: 'Home',
          title: 'Home',
          icon: sources[0]
        }
      ],
      tabStyle: {
        tabBarSelectedButtonColor: 'blue'
      }
    })
  });
};

export default startTabs;