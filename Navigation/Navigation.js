// Navigation/Navigation.js

import { createStackNavigator} from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';

import Search from '../Components/Search'
import TrainingDetail from '../Components/TrainingDetail'

//On initialise le menu latéral "Hamburger"
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Selection du training'
    }
  },
  TrainingDetail: { // j'ai mis le même nom que celui du component mais libre de choisir un nom différent
    screen: TrainingDetail,
    navigationOptions: {
      title: 'Detail du training'
    }
}})

export default createAppContainer(SearchStackNavigator)
