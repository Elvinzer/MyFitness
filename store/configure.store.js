import { AsyncStorage } from 'react-native';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';

const persistConfig = {
  key: 'my-fitness-store',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  // reducer1,
  // reducer2,
  // ...
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(
  thunkMiddleware,
));
export const persistor = persistStore(store);
