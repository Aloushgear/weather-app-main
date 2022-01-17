import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet} from 'react-native';
import Home from './Home';
import Nextpage from './Nextpage';
import Liston from './Liston';
const img =require('../assets/bli.jpg')

const Stack = createNativeStackNavigator();

export const Navigue = () => {
    return(
        <Stack.Navigator initialRouteName="Liston"  >
            <Stack.Screen  name="Accueil" options={{title:'',headerShown:false}}  component={Home}/>
            <Stack.Screen name="Nextpage" component={Nextpage}/>
            <Stack.Screen name="Liston" options={{title:'Villes'}} component={Liston}/>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    }
  });