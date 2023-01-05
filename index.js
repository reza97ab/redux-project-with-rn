/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import axios from 'axios';
axios.defaults.baseURL="http://192.168.0.103:3000/graphql";
axios.defaults.headers.post['Accept'] = 'Application/json';
axios.defaults.params = {
    name : 'ALI'
}
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
