import React, {useContext} from 'react';
import { View, StatusBar} from 'react-native';
import { useState } from 'react/cjs/react.development';
import {HomeHeader, HomeBanner, HomeContent, AppContext} from '../components';
import {ShopCardScreen} from './ShopCardScreen';
import {connect} from 'react-redux';

const HomeScreen = (props) => {
    const {ShowCart} = useContext(AppContext);
    const [cart, setCart] = useState(false);
    return(
        <View style={{flex : 1, backgroundColor : '#fff'}}>
            <StatusBar hidden/>
            <HomeHeader {...props}/>
            <HomeBanner/>
            {
                console.log(props.token)
            }
            <HomeContent/>
            {
                ShowCart ? <ShopCardScreen {...props}/> : null
            }
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        token : state.Auth.token
    }
}

export default connect(mapStateToProps)(HomeScreen)