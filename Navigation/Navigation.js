// Navigation/Navigation.js

import { createStackNavigator} from 'react-navigation-stack'
import { createAppContainer } from "react-navigation";

import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Selection du training'
    }
  },
  FilmDetail: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
    screen: FilmDetail,
    navigationOptions: {
      title: 'Détail du film'
    }
  }
})

export default createAppContainer(SearchStackNavigator)
