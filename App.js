import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';;
import {createStackNavigator} from '@react-navigation/stack';
import Main from "./screens/Main";
import Home from "./screens/Home";
const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.navigator initialRouteName = "home" screenOptions = {{
        headerShown: false
      }}>
        <stack.screen name = "home" component = {home}/>
        <stack.screen name = "main" component = {main}/>
      </stack.navigator>
    </NavigationContainer>
  );
}

export default App;