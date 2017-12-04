import Vue from 'vue';
import App from './App.vue';
import Axios from 'axios';

Vue.prototype.$axios = Axios;
//配置默认基础url
Axios.defaults.baseURL = 'http://localhost:3000/';
//配置拦截器
//请求发起前
Axios.interceptors.request.use((config)=>{
    return config;
})
// 响应回来后
Axios.interceptors.response.use((response)=>{
    return response;
})

new Vue({
    el: '#app',
    render:c=>c(App)
})