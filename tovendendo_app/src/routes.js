import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import SingIn from './pages/SingIn';
import Categories from './pages/Categories';
import Products from './pages/Products';

const AuthStack = createStackNavigator();

export default function Routes() {
    return (
      <NavigationContainer>
        <AuthStack.Navigator>
          <AuthStack.Screen 
            name="Login" component={Login}
            options={{headerShown: false }}
          />
          <AuthStack.Screen 
            name="SingIn" component={SingIn}
            options={{headerShown: false }}
          />
          <AuthStack.Screen 
            name="Categories" component={Categories}
          />        
          <AuthStack.Screen 
            name="Products" component={Products}
          />        
        </AuthStack.Navigator>
      </NavigationContainer>
    );
  }

  