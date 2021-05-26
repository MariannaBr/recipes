import React from "react";
import { Provider } from "react-redux"
import { createStore, combineReducers } from "redux"
import { BottomTabNavigator } from "./navigation/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";
import mealsReducer from "./store/reducers/mealsReducer"

const rootReducer = combineReducers({
  meals: mealsReducer
})

const store = createStore(rootReducer)


export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
    </Provider>
  );
}
