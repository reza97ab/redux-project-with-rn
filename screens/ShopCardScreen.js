import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image, Pressable, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from '../components'


const ShopCardScreen = () => {
    const {ToggleCart ,ItemCart} = useContext(AppContext);
    const [item, setItem] = useState([])

    useEffect(() => {
        const current = async () => {
            const value = await AsyncStorage.getItem('Item_Cart')
            setItem(JSON.parse(value))
        }
        current()
    }, [])

    return(
        item.length != 0 ? 
            <View style={{position : 'absolute', justifyContent : 'center', width : '100%', height : '100%', backgroundColor : '#333', opacity : 0.9}}>
                <Pressable
                    onPress={() => {ToggleCart()}}
                    style={{position : 'absolute', width : '100%', height : '100%'}}
                />
                <View style={{width : '85%', backgroundColor : '#fff', borderRadius : 20, alignSelf : 'center'}}>
                    <View style={{flexDirection : 'row', justifyContent : 'space-between', borderBottomColor : '#333', borderBottomWidth : 1, marginLeft : 5, marginRight : 5}}>
                        <Pressable
                        onPress={() => {ToggleCart()}}
                            style={{margin : 15}}
                        >
                            <MaterialIcons name="close" color="red" size={22} />
                        </Pressable>
                        <Text style={{fontWeight : 'bold', fontSize : 15, margin : 15}}>سبد خرید</Text>
                    </View>

                    <View style={{marginTop : 30, padding : 15}}>
                        <Text style={{fontWeight : 'bold', fontSize : 14}}>شما می خواهید حساب کاربری خود را به <Text style={{backgroundColor : 'gold'}}>{item[0].name}</Text> ارتقاء دهید</Text>
                        <Text style={{color : 'green', fontWeight : 'bold', fontSize : 12, marginTop : 25}}>حساب کاربری شما به مدت یک سال به حالت طلایی تغییر پیدا خواهد کرد و از این پس می توانید به صورت نامحدود به بخش های مختلف دسترسی داشته باشید.</Text>
                        <View style={{flexDirection : 'row', justifyContent : 'space-between', marginTop : 30}}>
                            <Text style={{fontWeight : 'bold', fontSize : 14}}>{item[0].price}</Text>
                            <Text style={{fontWeight : 'bold', fontSize : 14}}>مبلغ : </Text>
                        </View>

                        <View style={{marginTop : 15}}>
                            <TextInput placeholder="کد تخفیف" style={{backgroundColor : '#e0e0e0', borderRadius : 8, textAlign : 'right', padding : 5}}/>
                            <Pressable
                                style={{position : 'absolute', top : 10, left : 10}}
                            >
                                <MaterialIcons name="check-circle" size={16} color="red" />
                            </Pressable>

                            <Pressable
                                style={{backgroundColor : 'green', marginTop : 15, borderRadius : 8, padding : 10, justifyContent : 'center', alignItems : 'center'}}
                            >
                                <Text style={{color : '#fff', fontWeight : 'bold'}}>مبلغ نهایی : 10.00</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>

            :

            <View/>
    )
}

export {ShopCardScreen}