import React, {useContext} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {AppContext} from '../components'

const PremiumContent = (props) => {
    const {ToggleItemCart} = useContext(AppContext);
    return(
        <TouchableHighlight
            style={{borderRadius : 18, width : '90%', alignSelf : 'center', marginBottom : 25}}
            onPress={() => {
                ToggleItemCart({
                    name : props.name,
                    price : props.price,
                    time : props.time
                })

                props.navigation.navigate('Home')
            }}
        >
            <View style={{flex : 1, backgroundColor : '#fff', width : '100%', borderRadius : 18}}>
                <View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center', padding : 20}}>
                    <Text>{props.name}</Text>
                    <View style={{width : 30, height : 30, borderRadius : 30, backgroundColor : props.color}}/>
                </View>
                <View style={{flex : 1, flexDirection : 'row', justifyContent : 'space-around', alignItems : 'center'}}>
                    <View style={{flex : 1, flexDirection : 'column', justifyContent : 'center', alignItems : 'center', backgroundColor : '#cfd8dc', borderRadius : 15, margin : 15, padding : 12}}>
                        <Text style={{color : 'purple'}}>Price</Text>
                        <Text style={{fontWeight : 'bold'}}>{props.price}</Text>
                    </View>
                    <View style={{flex : 1, flexDirection : 'column', justifyContent : 'center', alignItems : 'center', backgroundColor : '#cfd8dc', borderRadius : 15, margin : 15, padding : 12}}>
                        <Text style={{color : 'purple'}}>Time</Text>
                        <Text style={{fontWeight : 'bold'}}>{props.time}</Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>

    )
}

export {PremiumContent}