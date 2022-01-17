import React from "react";
import { View,Text,TextInput,FlatList,StyleSheet, TouchableWithoutFeedback,Button,ScrollView,SafeAreaView, TouchableOpacity} from 'react-native';
import {useDispatch,useSelector} from 'react-redux';
import { bindActionCreators } from "redux";
import { removeCity } from "../redux/actions/city";
import { Icon } from "react-native-elements";



export default function Liston ({navigation}) {

    const { city } = useSelector(state => state.cityReducer);
    const dispatch = useDispatch();
    const actions = bindActionCreators({
        removeCity
    }, dispatch);

    return (
        
        <SafeAreaView>
                <ScrollView>
                <View
            style={{
            backgroundColor: '#fff',
            padding: 10,
            marginVertical: 10,
            borderRadius: 20
            }}
        >
             <FlatList  data={city} 
                                keyExtractor={item => item}
                                showsVerticalScrollIndicator={false}
                                renderItem={({item,index}) =>
                                <TouchableWithoutFeedback  onPress={() =>navigation.navigate('Accueil',{a:item})}
                                >
                                    <View style={styles.ps}>
                                             <Text style={styles.pa}>{item}</Text>
                                             <Icon style={styles.pa} name="trash-outline" color='black' type='ionicon' onPress={() => actions.removeCity(index)} />
                                    </View>
                                    
                                 </TouchableWithoutFeedback>
                                 
                                    }                 
                        />                  
        </View>
            </ScrollView>
            <View style={styles.container} >
                <Button title=" Ajouter des villes" onPress={() => navigation.navigate('Nextpage')}/>
            </View>

            
            
             
        </SafeAreaView>
       
        
    );
}

const styles = StyleSheet.create({
    container: {
        width:200,
        height:100,
        left:92,
        alignContent:'center'
        //flexDirection:'row',
        //alignItems:'flex-start'
    },
    ps:{
        left:60,
        
        
    },
    pa:{
        fontSize:20,
        left:60,
    }
  });