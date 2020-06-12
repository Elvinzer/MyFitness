// Navigation/Navigation.js

import { createStackNavigator} from 'react-navigation-stack'
import { createAppContainer } from "react-navigation";

import Search from '../Components/Search'
import TrainingDetail from '../Components/TrainingDetail'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Selection du training'
    }
  },
  TrainingDetail: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
    screen: TrainingDetail,
    navigationOptions: {
      title: 'Détail du training'
    }
  }
})

export default createAppContainer(SearchStackNavigator)
