import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Intro from './src/views/screens/Intro';
import Home from './src/views/screens/Home';
import Destino from './src/views/screens/Destino';
import Formulario from './src/views/screens/Formulario';
import Siviaja from './src/views/screens/Siviaja';
import Noviaja from './src/views/screens/Noviaja';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Destino" component={Destino} />
        <Stack.Screen name="Formulario" component={Formulario}/>
        <Stack.Screen name="Siviaja" component={Siviaja}/>
        <Stack.Screen name="Noviaja" component={Noviaja}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;