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
import Splash from '@/routes/Splash.vue'
import Game from '@/routes/Game.vue'

import Captain from '@/components/Captain.vue'
import Engineer from '@/components/Engineer.vue'
import Officer from '@/components/Officer.vue'
import Radar from '@/components/Radar.vue'


export default new Router({
    routes: [
        { path:"/",      name:"Home",  component: Home, props: { name: "DemoApp"} },
        { path:"/about", name:"About", component: About },
        { path:"/game", name:"Game", component: Splash},
        {path: "/gameplay", name: "Gameplay", component: Game, props: {name:"CaptainSonarVue", user: "Player1", team:"blue"}
        , children :
        [
            {path : "captain", name: "Captain", component: Captain},
            {path : "officer", name: "Officer", component: Officer},
            {path : "engineer", name: "Engineer", component: Engineer},
            {path : "radar", name: "Radar", component: Radar}
        ]
        }
        
    ]
});