import React, {useContext, useState, useEffect} from 'react';
import { StyleSheet ,View, Image, Text, Pressable} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from '../components';
 
const HomeHeader = (props) => {
    const {ToggleCart, ItemCart} = useContext(AppContext);
    const [item, setItem] = useState([])

    useEffect(() => {
        const current = async () => {
            const value = await AsyncStorage.getItem('Item_Cart')
            setItem(JSON.parse(value))
        }
        current()
    }, [])

    return(
        <View style={styles.headerStyle}>
            <View>
                <Pressable
                    onPress={() => {
                        props.navigation.openDrawer()
                    }}
                >
                    <MaterialIcons name="menu" size={22} color="#333" style={styles.headerIcon}/>
                </Pressable>
            </View>

            <View style={{flexDirection : 'row', marginTop : 20}}>
                <Pressable
                    onPress={() => {ToggleCart()}}
                    style={{marginRight : 20}}
                >
                    <MaterialIcons name="shopping-cart" size={25} />
                    <View style={{position : 'absolute', right : 5, width : 12, height : 12, borderRadius : 12, backgroundColor : 'red', justifyContent : 'center', alignItems : 'center'}}>
                        <Text style={{color : '#fff', fontSize : 8}}>{item.length}</Text>
                    </View>
                </Pressable>
                <View>
                    <Image source={require('../assets/images/avatar.png')} style={styles.headerAvatar}/>
                    <View style={{position : 'absolute', width : 8, height : 8, borderRadius : 8, backgroundColor : 'red', top : 20}}/>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    headerStyle : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : '100%',
        height : 60,
        backgroundColor : '#fff'
    },

    headerIcon : {
        marginTop : 20,
        marginLeft : 20
    },

    headerAvatar : {
        backgroundColor : 'grey',
        marginRight : 20,
        width : 30,
        height : 30,
        borderRadius : 30
    }

})

export {HomeHeader}