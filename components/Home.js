import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState}from 'react';
import { StyleSheet,View, ImageBackground, Button} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DateTime from '../components/DateTime'
import WeatherScroll from '../components/WeatherScroll';
const API = 'f22d6da9dac96102fd7c57b6a813b2b9';
const img =require('../assets/bli.jpg')
const Stack = createNativeStackNavigator();



console.log("a");
export default function Home({navigation,route}) {
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      if(route.params !==undefined ){
        const ville=route.params.a;
        console.log(`https://api.openweathermap.org/data/2.5/forecast?q=${ville}&units=metric&lang=fr&cnt=8&appid=${API}`)
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${ville}&units=metric&lang=fr&cnt=8&appid=${API}`).then(res => res.json()).then(data => {
        console.log(data)
        setData(data)
        })
  
    }
    else{
        const ville='Abidjan';
    }
    })();
  }, [])

  return (
    <ImageBackground source={img} style={styles.image} >
      <View>
        <View style={styles.bt}>
            <Button title='Retour' onPress={() => navigation.navigate('Nextpage')}/>
        </View>
        <View style={styles.container}>
            <DateTime city={data.city}  liste={data.list}/>
            <WeatherScroll weatherData={data.list}/>     
          </View>  
      </View>
    </ImageBackground>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50
  },
  image:{
    flex:1, 
    resizeMode:"cover", 
    //justifyContent:"center"
    //alignItems:'flex-start'
  },
  bt:{

    position:'absolute',
    top:5,
    width:100,
    left:263
  },
  bo:{
    width:25
  }
});
