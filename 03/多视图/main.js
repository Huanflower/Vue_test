import Vue from '../vue.js';
import VueRouter from '../vue-router.js';

import App from './App.js';

import HeaderVue from './components/headerVue.js';
import FooterVue from './components/FooterVue.js';
import BodyVue from './components/BodyVue.js';

Vue.use(VueRouter);

var router = new VueRouter();
router.addRoutes([
    {name: 'home',path: '/home',components: {
        'a':HeaderVue,
        'b':FooterVue,
        'c':BodyVue
    }},
    {
        name: 'home2', path: '/home2', components: {
            'a': BodyVue,
            'b': FooterVue,
            'c': HeaderVue
        }
    },
    {
        name: 'home3', path: '/home3', components: {
            'a': FooterVue,
            'b': BodyVue,
            'c': HeaderVue
        }
    },
]);


new Vue ({
    el: '#app',
    render: c=>c(App),
    router
})