import React from 'react'
import {View, ScrollView, Image, Text, StyleSheet} from 'react-native'
import moment from 'moment-timezone'


const WeatherScroll = ({weatherData}) => {
    
    console.log(weatherData)
    return (
        <ScrollView horizontal={true} style={styles.scrollView}>
            <CurrentTempEl data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}/>
            <CurrentTempEl data={weatherData && weatherData.length > 0 ? weatherData[1] : {}}/>
            <CurrentTempEl data={weatherData && weatherData.length > 0 ? weatherData[2] : {}}/>
            <CurrentTempEl data={weatherData && weatherData.length > 0 ? weatherData[3] : {}}/>
            <CurrentTempEl data={weatherData && weatherData.length > 0 ? weatherData[4] : {}}/>    
        </ScrollView>
    )
}

const CurrentTempEl = ({data}) => {

    

    if(data && data.weather){
        const imge = {uri: 'http://openweathermap.org/img/wn/'+ data.weather[0].icon +'@4x.png'}
        console.log(data)
        return(
            <View>
                <View style={styles.currentTempContainer}>
                <Image source={imge} style={styles.image} />
                <View  style={styles.otherContainer}>
                    <Text  style={styles.day}>{moment(data.dt * 1000).format('HH:mm')}</Text>
                    <Text  style={styles.temp}>{data.main.temp}&#176;C</Text>
                    <Text  style={styles.humid}>{data.main.humidity}&#176;%</Text>
                </View>
                </View>
            </View>
            
        )
    }else{
        return( 
            <View>

            </View>

        )
        
    }
   
}

const styles = StyleSheet.create({
    scrollView: {
        flex:0.4,
    },
    image: {
        width: 70,
        height: 70
    },
    currentTempContainer: {
        flexDirection: 'column',
        justifyContent:"center",
        alignItems:'center',
        borderColor:'#000000',
        padding: 2,
    },
    day: {
        fontSize: 14,
        color:"white",
        padding: 5,
        textAlign:"center",
        borderRadius: 50,
        fontWeight: "200",
        marginBottom: 15
    },
    temp: {
        fontSize: 14,
        color:"white",
        fontWeight:"100",
        textAlign:"center"
    },
    humid:{
        fontSize:14,
        color:"white",
        fontWeight:"100",
        textAlign:"center",
        marginTop:20

    },
    otherContainer: {
        paddingRight: 18,
        paddingLeft:10
    },
    oblic:{
        position: 'absolute',
        right: 5,
        top: 5,

    }
})

export default WeatherScroll
