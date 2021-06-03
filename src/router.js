/*
VUE App's MAIN Component.
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
'use strict';

import Vue from 'vue'
import Router from 'vue-router';
Vue.use( Router );

import Home from '@/routes/Home.vue'
import About from '@/routes/About.vue'
import Game from '@/routes/Game.vue'


export default new Router({
    routes: [
        { path:"/",      name:"Home",  component: Home, props: { name: "DemoApp"} },
        { path:"/about", name:"About", component: About },
        { path:"/game", name:"Game", component: Game, props: {name: "CaptainSonarVue"} }
    ]
});