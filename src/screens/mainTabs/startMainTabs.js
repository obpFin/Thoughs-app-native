import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource('ios-home', 30),
    Icon.getImageSource('ios-add', 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'thoughts.HomeScreen',
          title: 'Home',
          icon: sources[0],
          iconInsets: { /// change icon position (optional, iOS only).
            bottom: -10, 
          },
        },
        {
          screen: 'thoughts.AddThoughtScreen',
          title: 'Add Thought',
          icon: sources[1],
          iconInsets: { 
            bottom: -10, 
          },
        }
      ],
    })
  });
};

export default startTabs;