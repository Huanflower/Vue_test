import Vue from '../vue.js';
import VueRouter from '../vue-router.js';

import Home from './Home.js';
import App from './App.js';
import Music from './Music.js';
import Movie from './Movie.js';

Vue.use(VueRouter);

var router = new VueRouter();
router.addRoutes([
    {name: 'home',path: '/home',component: Home,
     children: [
            {name: 'home.music',path: 'music',component:Music},
            {name: 'home.movie', path: 'movie', component: Movie }
        ]
    }
]);

new Vue({
    el: '#app',
    render: c=>c(App),
    router
})