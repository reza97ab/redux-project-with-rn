import axios from 'axios';
const instance = axios.create();

instance.defaults.baseURL = "http://192.168.0.102:3000/graphql";
instance.defaults.headers['Authentication'] = "asdklajsdlkasjd;lasasdvsadfasdf";
instance.interceptors.request.use((config) => {
    return config;
})

export {instance}