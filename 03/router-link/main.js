import Vue from '../vue.js';
import VueRouter from '../vue-router.js';
//引入组件们
import Home from './Home.js';
import App from './App.js';
//安装插件
Vue.use(VueRouter);
//创建路由对象
var router = new VueRouter({
    routes:[
        { name: 'home',path: '/myhome',component:Home}
    ]
});

new Vue({
    el: '#app',
    render: c=>c(App),
    router
})