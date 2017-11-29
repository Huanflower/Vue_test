//在mian.js中引入vue-router对象
import Vue from '../vue.js';
import VueRouter from '../vue-router.js';

//引入组件们
import Home from './Home.js';
import App from './App.js';

//使用vue来安装插件
Vue.use(VueRouter);

//创建路由对象
var router = new VueRouter();
//配置路由规则
router.addRoutes([
    //path 代表锚点值
    {path: '/home',component: Home},
]);
//配置好的路由对象交给Vue
new Vue({
    el: '#app',
    render: c=>c(App),
    // router: router
    router
});
