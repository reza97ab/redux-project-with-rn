import React, { useState } from 'react';
import {
  StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {SignUpScreen, PremiumScreen} from './screens';
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';
import {DrawerContent, AppContext} from './components'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import RootReducers from './components/redux/reducers';
import thunk from 'redux-thunk';

const Drawer = createDrawerNavigator();

const App = () => {
  const [cart, setCart] = useState(false);
  const [itemCart, setItemCart] = useState([])

  const DATA = {
    ToggleCart : () => {
      setCart(!cart)
    },

    ShowCart : cart,

    ToggleItemCart : async (item) => {
      try {
        setItemCart([item]);
        await AsyncStorage.setItem('Item_Cart', JSON.stringify([item]))
      } catch (error) {
        console.log(error)
      }
      
    },

    ItemCart : itemCart

  }
  
  return (
    <Provider store={createStore(RootReducers, applyMiddleware(thunk))}>
      <NavigationContainer>
        <AppContext.Provider value={DATA}>
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props}/>}
            initialRouteName="Home"
            screenOptions={{
              headerShown : false
            }}
          >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Register" component={SignUpScreen} />
            <Drawer.Screen name="Login" component={SignInScreen} />
            <Drawer.Screen name="Premium" component={PremiumScreen} />
          </Drawer.Navigator>
        </AppContext.Provider>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
