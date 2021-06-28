/*
VUE App's MAIN Component.
Copyright (c) 2021 Jose Ignacio Ferrer Vera
*/
'use strict';

import Vue from 'vue'
import Router from 'vue-router';
Vue.use( Router );

import Home from '@/routes/Home.vue'
import About from '@/routes/About.vue'
import Splash from '@/routes/Splash.vue'
import Lobby from '@/routes/JoinGame.vue'
import Game from '@/routes/Game.vue'

import Captain from '@/components/Captain.vue'
import Engineer from '@/components/Engineer.vue'
import Officer from '@/components/Officer.vue'
import Radar from '@/components/Radar.vue'


export default new Router({
    routes: [
        { path:"/", name:"Game", component: Splash},
        { path:"/about", name:"About", component: About },
        { path:"/lobby", name:"Lobby", component: Lobby, props: {playerName:""} },
        {path: "/gameplay", name: "Gameplay", component: Game, props: {name:"CaptainSonarVue", user: "Player1", team:"blue"}
        , children :
        [
            {path : "captain", name: "Captain", component: Captain, props:true},
            {path : "officer", name: "Officer", component: Officer, props:true},
            {path : "engineer", name: "Engineer", component: Engineer, props:true},
            {path : "radar", name: "Radar", component: Radar, props:true}
        ]
        }
        
    ]
});