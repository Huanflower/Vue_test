import Vue from '../vue.js';
import VueRouter from '../vue-router.js';

import List from './List.js';
import App from './App.js';
import Detail from './Detail.js';

Vue.use(VueRouter);

var router = new VueRouter();

router.addRoutes([
    { name: 'list', path: '/list', component:List},
    { name: 'detail', path: '/detail', component: Detail },
    { name: 'detail2', path: '/detail/:mid', component: Detail },
]);

new Vue ({
    el: '#app',
    render: c=>c(App),
    router
})
