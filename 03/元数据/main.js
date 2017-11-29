import Vue from '../vue.js';
import VueRouter from '../vue-router.js';

import Home from './Home.js';
import App from './App.js';

Vue.use(VueRouter);

var router = new VueRouter();
router.addRoutes([
    {
        name: 'home',path: '/home',component: Home,meta: {
            name: 'jack',age: 18
        }
    }
]);

new Vue({
    el: '#app',
    render: c=>c(App),
    router
})