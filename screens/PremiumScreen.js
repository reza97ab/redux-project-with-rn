import React from 'react';
import {View, Text, TouchableHighlight, Pressable, ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PremiumContent} from '../components'

const PremiumScreen = (props) => {
    return(
        <View style={{flex : 1, backgroundColor : '#0da7a1', flexDirection : 'column'}}>
            <View style={{flex : 1, flexDirection : 'column'}}>
                <ScrollView>
                    <View style={{width : '100%', justifyContent : 'space-between', alignItems : 'center', flexDirection : 'row', marginBottom : 25}}>
                        <Pressable
                            style={{marginLeft : 25, marginTop : 25}}
                            onPress={() => {}}
                        >
                            <MaterialIcons name="arrow-back" size={22} color="#fff"/>
                        </Pressable>
                        <Text style={{color : '#fff', fontSize : 16, fontWeight : 'bold', marginRight : 25, marginTop : 25}}>Account upgrade</Text>
                    </View>

                    <PremiumContent name="Golden Account" price="1.200" time="1 Year" color="gold" {...props}/>
                    <PremiumContent name="Silver Account" price="800" time="6 month" color="silver" {...props}/>
                    <PremiumContent name="Bronze Account" price="400" time="2 month" color="#ff6f00" {...props}/>
                    
                </ScrollView>
            </View>
        </View>
    )
}

export {PremiumScreen}