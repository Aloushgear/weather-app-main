import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, Image, Button} from 'react-native';


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


const WeatherItem = ({title, value, unit}) => {
    return(
        <View style={styles.weatherItem}>
            <Text style={styles.weatherItemTitle}>{title}</Text>
            <Text style={styles.weatherItemTitle}>{value}{unit}</Text>
        </View>
    )
}

const DateTime = ({city,liste}) => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    useEffect (() => {
        setInterval(() => {
            const time = new Date();
            const month = time.getMonth();
            const date = time.getDate();
            const day = time.getDay();
            const hour = time.getHours();
            const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
            const minutes = time.getMinutes();
            const ampm = hour >=12 ? 'pm' : 'am'
        
            setTime((hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes) +ampm) 
        
            setDate(days[day] + ', ' + date+ ' ' + months[month]) 
        
        }, 1000);
    }, [])
    var b=liste? liste[0].main.temp: ""
    var c =Math.floor(b)
    const d = liste? liste[0].weather[0].description: ""
    const e =liste? liste[0].weather[0].icon:""
    
    console.log(e)
    console.log("ixi")
    const show = {uri: 'http://openweathermap.org/img/wn/'+e+'@4x.png'}
    return (
        <View style={styles.container}>  
           <View>
               <View style={styles.rightAlign} >
                   <Text style={styles.heading}>{c}°</Text>
                   <Text style={styles.timezone}  >{city? city.country+'/'+city.name : ""}</Text> 
               </View>
               <View>
                   <Text style={styles.subheading}>{d}</Text>
                   
               </View>
               <View style={styles.weatherItemContainer}>
                    <Image style={styles.image} source={show}/>
                    <WeatherItem title="Humidité  " value={liste? liste[0].main.humidity: ""} unit="%"/>
                    <WeatherItem title="Pression  " value={liste? liste[0].main.pressure: ""} unit="hPA"/>                 
               </View>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:2,
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',
        padding: 8
    },
    heading: {
        fontSize: 60,
        color:'white',
        fontWeight: '100'
    },
    subheading: {
        textTransform:'capitalize',
        fontSize: 15,
        color: '#eee',
        fontWeight: '300'
    },
    rightAlign: {
        alignContent:'center'
    },
    centerAlign:{
        justifyContent:'center'
    },
    timezone: {
        fontSize: 16,
        color:'white',
        fontWeight: '400'
    },
    latlong:{
        fontSize:16,
        color:'white',
        fontWeight: '400'
    },
    weatherItemContainer: {
        borderRadius: 10,
        padding: 10,
        marginLeft:60,
    }, 
    weatherItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    weatherItemTitle: {
        color:'#eee',
        fontSize: 14,
        fontWeight: '100'
    },
    image: {
        width: 200,
        height: 200,
        marginLeft:10
    },
})

export default DateTime
