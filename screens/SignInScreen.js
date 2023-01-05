import React, { useState, useContext } from 'react';
import {View, StyleSheet, Dimensions, Platform, TextInput, StatusBar, Text, Pressable,ActivityIndicator} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {Formik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import {connect} from 'react-redux';
import {watting_for_login} from '../components/redux/actions'

const validationSchema = yup.object().shape({
    username : yup.string().min(6, 'نام کاربری وارد شده مععتبر نمی باشد'),
    password : yup.string().min(6, 'پسورد حداقل باید 6 کارکتر باشد')
})

const SignInScreen = (props, {navigation}) => {

    const onLogin = (handleSubmit) => {
        if(props.loading) {
            return (
                <ActivityIndicator size="large" color="red" />
            )
        } else {
            return (
                <View style={styles.button}>
                    <Pressable style={[styles.signIn, {backgroundColor : '#009387'}]} 
                        onPress={handleSubmit}
                    >
                        <Text style={[styles.textSign, {color : '#fff'}]}>Sign In</Text>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Register')} style={[styles.signIn, {marginTop : 15, borderColor : '#009387', borderWidth : 1}]}>
                        <Text style={[styles.textSign, {color : '#009387'}]}>Sign Up</Text>
                    </Pressable>
                </View>
            )
        }
    }
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>

            <Formik
                initialValues={{username : '', password : ''}}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting}) => {
                    axios({
                        url : '/',
                        method : 'POST',
                        data : {
                            query : `
                                query Login($username : String, $password : String) {
                                    Login(input : {username : $username, password : $password}) {
                                        status,
                                        token
                                    }
                                }
                            `,
                            variables : {
                                username : values.username,
                                password : values.password
                            }
                        }
                    })
                        .then((res) => {
                            props.watting_for_login(res.data.data.Login)
                            if(res.data.data.Login.token != '') {
                                props.navigation.navigate('Home')
                            }
                        })
                        .catch((err) => {console.log(err)})
                    setSubmitting(false)
                }}
            >
                {
                    ({values, errors, handleChange, handleBlur, handleSubmit}) => (
                        <Animatable.View animation="fadeInUpBig" style={[styles.footer, {backgroundColor : '#fff'}]}>
                            <View style={styles.action}>
                                <FontAwesome name="user-o" color={'#000'} size={18}/>
                                <TextInput placeholder="Your Username" placeholderTextColor={'#000'} style={[styles.textInput, {color : '#000'}]} onBlur={handleBlur('username')} onChangeText={handleChange('username')} value={values.username}/>
                            </View>
                            <Text style={{color : 'red', fontWeight : 'bold'}}>{errors.username}</Text>
        
                            <View style={[styles.action, {marginTop : 25}]}>
                                <Feather name="lock" color={'#000'} size={18}/>
                                <TextInput placeholder="Your Password" placeholderTextColor={'#000'} style={[styles.textInput, {color : '#000'}]} onBlur={handleBlur('password')} onChangeText={handleChange('password')} value={values.password}/>
                            </View>
                            <Text style={{color : 'red', fontWeight : 'bold'}}>{errors.password}</Text>

                            {
                                props.error != '' ?
                                    <Text style={{width : '100%', fontWeight : 'bold', fontSize : 16, borderRadius : 10, backgroundColor : '#f44336', padding : 5}}>
                                        {props.error}
                                    </Text>
                                :
                                    <View/>
                            }

                            {
                                onLogin(handleSubmit)
                            }

                        </Animatable.View>
                    )
                }
            </Formik>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        loading : state.Auth.loading,
        token : state.Auth.token,
        error : state.Auth.error
    }
}

export default connect(mapStateToProps, {watting_for_login})(SignInScreen);

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

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

    logo : {
        width : height_logo,
        height : height_logo
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
        flexDirection : 'row',
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
    },

    errorMSG : {
        marginTop : 5,
        color : '#ff0000',
        fontSize : 10,
        fontWeight : 'bold'
    }
})