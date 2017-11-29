import Vue from '../vue.js';
import VueRouter from '../vue-router.js';

import Home from './Home.js';
import App from './App.js';

Vue.use(VueRouter);

var router = new VueRouter();
router.addRoutes([
    {name: 'home',path: '/home',component: Home,meta: {
        name: 'jack',age: 18
    }},
    {
        name: 'home222', path: '/home22222', component: Home, meta: {
            name: 'jack', age: 18
        }
    }
]);

router.beforeEach((to,from,next)=>{
    console.log(to);
    console.log(from);

    if(to.name == 'home222'){
        next();
    }else {
        next({
            name: 'home222'
        });
    }
});

new Vue({
    el: '#app',
    render: c=>c(App),
    router
})