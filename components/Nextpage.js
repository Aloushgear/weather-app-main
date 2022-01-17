import React, { useState, useEffect } from 'react';
import { View,Text,TextInput,ActivityIndicator,Button,StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCityFetch } from '../redux/actions/city';
const API = 'f22d6da9dac96102fd7c57b6a813b2b9';





export default function Nextpage ({navigation}) {


    const [city, setCity] = useState('');

    const [datasFetch, SetDatasFetch] = useState(null);
    const [loadingFetch, SetLoadingFetch] = useState(false);
    const dispatch = useDispatch();
    const actions = bindActionCreators({addCityFetch},dispatch);
   

    useEffect(() => {

    }, [])

    const getDatasWithFetch = (city) => {
        SetLoadingFetch(true);
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=fr&cnt=8&appid=${API}`)
            .then(async res => {
                const reponse = await res.json();
                if (reponse.city.id > 0) {
                    SetDatasFetch(reponse.city.name);
                    SetLoadingFetch(false);
                    actions.addCityFetch(reponse.city.name);
                }
            }).catch(err => {
                SetDatasFetch(err.toString());
                SetLoadingFetch(false);
             
            });
    }
    
    const DisplayCity = (datas) => {
        if(datas) {
            return (
                <View>
                    <Text>{datas}</Text>
                </View>
            );
        }
    }
    

    return (
        
        <View
            style={{
            backgroundColor: '#fff',
            padding: 10,
            marginVertical: 10,
            borderRadius: 20
            }}
        >
            <TextInput
            placeholder="Entrer une ville"
            style={{ backgroundColor: '#fff', padding: 20,marginVertical:50,fontSize:20 }}
            onChangeText={city => setCity(city)}
            />
            <Button  title="Voir Météo" onPress={() => navigation.navigate('Accueil', {a:city})}/>
            <Button  title="Favoris ville"  onPress={() => navigation.navigate('Liston')}/>
            <Button  title="Enregistrer"
                            onPress={
                                () => getDatasWithFetch(city)
                            } />
            <View>
                    {
                        loadingFetch ?
                        <ActivityIndicator size="large" color="grey" /> :
                        DisplayCity(datasFetch)
                    }
        </View>
        
        </View>
       
        
    );
}