import React from 'react';
import {View, StyleSheet} from 'react-native';
// import {ThemeProvider, Button, Icon} from 'react-native-elements';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Paragraph, Drawer } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContent = (props) => {
    return(
        <View style={{flex : 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection : 'row', marginTop : 15}}>
                            <Avatar.Image source={{
                                uri : 'https://www.clipartmax.com/png/middle/248-2487966_matthew-man-avatar-icon-png.png'
                            }} size={50}/>
                            <View style={{marginLeft : 15, flexDirection : 'column'}}>
                                <Title style={styles.title}>Ali kiani</Title>
                                <Caption style={styles.caption}>@alikiaani</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>120</Paragraph>
                                <Caption style={styles.caption}>following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>140</Paragraph>
                                <Caption style={styles.caption}>follower</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon name="home-outline" color={color} size={size}/>
                            )}
                            label ="Premium Account"
                            onPress={() => {props.navigation.navigate('Premium')}}
                        />

                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon name="account-outline" color={color} size={size}/>
                            )}
                            label ="Profile"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />

                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon name="bookmark-outline" color={color} size={size}/>
                            )}
                            label ="Bookmark"
                            onPress={() => {props.navigation.navigate('Bookmark')}}
                        />

                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon name="account-settings-outline" color={color} size={size}/>
                            )}
                            label ="Setting"
                            onPress={() => {props.navigation.navigate('Setting')}}
                        />

                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon name="account-check-outline" color={color} size={size}/>
                            )}
                            label ="Supports"
                            onPress={() => {props.navigation.navigate('Supports')}}
                        />

                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon name="exit-to-app" color={color} size={size}/>
                    )}
                    label ="Sign Out"
                    onPress={() => {props.navigation.navigate('Login')}}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent : {
        flex : 1
    },

    userInfoSection : {
        paddingLeft : 20
    },

    title : {
        fontSize : 16,
        marginTop : 3,
        fontWeight : 'bold'
    },

    caption : {
        fontSize : 14,
        lineHeight : 14
    },

    row : {
        marginTop : 20,
        flexDirection : 'row',
        alignItems : 'center'
    },

    section : {
        flexDirection : 'row',
        alignItems : 'center',
        marginRight : 15
    },

    paragraph : {
        fontWeight : 'bold',
        marginRight : 3
    },

    drawerSection : {
        marginTop : 15
    },

    bottomDrawerSection : {
        marginBottom : 15,
        borderTopColor : '#f4f4f4',
        borderTopWidth : 1
    },

    preference : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingVertical : 12,
        paddingHorizontal : 16
    }


})

export {DrawerContent}