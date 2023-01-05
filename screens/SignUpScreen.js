import React, {useEffect, useState} from 'react';
import {StyleSheet, View, TextInput, StatusBar, Text, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
import {Formik} from 'formik';
import * as yup from 'yup';

const validationschema = yup.object().shape({
    phonenumber : yup.string().max(11, 'شماره وارد شده صحیح نمی باشد').min(10, 'شماره وارد شده صحیح نمی باشد'),
    username : yup.string().min(6, 'نام کاربری وارد شده صحیح نمی باشد'),
    username : yup.string().min(6, ' پسورد وارد شده صحیح نمی باشد'),
})

const SignUpScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>

            <Formik
                initialValues={{phonenumber : '', username : '', password : ''}}
                validationSchema={validationschema}
                onSubmit={(values, {setSubmitting}) => {
                    axios({
                        url : '/',
                        method : 'POST',
                        data : {
                            query : `
                                mutation Register($phonenumber : String, $username :String, $password : String) {
                                    Register(input : {phonenumber : $phonenumber, username : $username, password : $password}) {
                                        status,
                                        message
                                    }
                                }
                            `,
                            variables : {
                                phonenumber : values.phonenumber,
                                username : values.username,
                                password : values.password
                            }
                        } 
                    })
                        .then((res) => {console.log(res.data.data)} )
                        .catch((err) => {console.log(err)})
                }}
            >
                {({values, errors, handleBlur, handleChange, handleSubmit}) => (
                    <View animation="fadeInUpBig" style={styles.footer}>
                        <View style={styles.action}>
                            <FontAwesome name="mobile-phone" color='#05375a' size={18}/>
                            <TextInput placeholder="Your Phone" style={styles.textInput} onBlur={handleBlur('phonenumber')} onChangeText={handleChange('phonenumber')} value={values.phonenumber}/>
                        </View>
                        <Text style={{color : 'red', fontWeight : 'bold'}}>{errors.phonenumber}</Text>

                        <View style={styles.action}>
                            <Feather name="lock" color='#05375a' size={18}/>
                            <TextInput placeholder="Your Username" style={styles.textInput} onBlur={handleBlur('username')} onChangeText={handleChange('username')} value={values.username}/>
                        </View>
                        <Text style={{color : 'red', fontWeight : 'bold'}}>{errors.username}</Text>

                        <View style={styles.action}>
                            <Feather name="lock" color='#05375a' size={18}/>
                            <TextInput placeholder="Your Password" style={styles.textInput} onBlur={handleBlur('password')} onChangeText={handleChange('password')} value={values.password}/>
                        </View>
                        <Text style={{color : 'red', fontWeight : 'bold'}}>{errors.password}</Text>

                        <View style={styles.button}>
                            <Pressable style={[styles.signIn, {backgroundColor : '#009387'}]}
                                onPress={handleSubmit}
                            >
                                <Text style={[styles.textSign, {color : '#fff'}]}>Sign Up</Text>
                            </Pressable>
        
                            <Pressable onPress={() => navigation.goBack()} style={[styles.signIn, {marginTop : 15, borderColor : '#009387', borderWidth : 1}]}>
                                    <Text style={[styles.textSign, {color : '#009387'}]}>Sign In</Text>
                            </Pressable>
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#009387'
    },

    header : {
        flex : 1,
        justifyContent : 'flex-end',
        paddingHorizontal : 20,
        paddingBottom : 50
    },

    footer : {
        flex : 5,
        backgroundColor : '#fff',
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30,
        paddingVertical : 50,
        paddingHorizontal : 30
    },

    title : {
        color : '#05375a',
        fontSize : 32,
        fontWeight : 'bold'
    },

    text : {
        color : 'grey',
        marginTop : 5
    },

    button : {
        alignItems : 'center',
        marginTop : 50
    },

    signIn : {
        width : '100%',
        height : 40,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 10,
        flexDirection : 'row'
    },

    textSign : {
        fontSize : 14,
        fontWeight : 'bold'
    },

    textInput : {
        flex : 1,
        marginTop : Platform.OS === 'android' ? -12 : 0,
        paddingLeft : 10,
        color : '#05375a'
    },

    action : {
        flexDirection : 'row',
        marginTop : 10,
        borderBottomWidth : 1,
        borderBottomColor : '#f2f2f2',
        paddingBottom : 5
    },

    text_header : {
        color : '#fff',
        fontWeight : 'bold',
        fontSize : 30
    },

    text_footer : {
        color : '#05375a',
        fontSize : 14
    }
})

export {SignUpScreen}