//Copyright (c) 2021. Jose Ignacio Ferrer. All Rights Reserved.
import Vue from 'vue'
import Vuex from 'vuex'
import Player from './model/Player'
import Game from './model/Game'
import CaptainRole from './model/CaptainRole.js'
import OfficerRole from './model/OfficerRole.js'
import EngineerRole from './model/EngineerRole.js'
import RadarRole from './model/RadarRole.js'
import Axios from 'axios'

import firebase from 'firebase/app'
import 'firebase/firestore'

const fbConfig = {
  apiKey: "AIzaSyDca37lwDD4O_HUL9GVb_Omh21rTQNn-_w",
  authDomain: "captainsonarvue.firebaseapp.com",
  databaseURL: "https://captainsonarvue.firebaseio.com",
  projectId: "captainsonarvue"

}
const fb = firebase.initializeApp(fbConfig)
const db = {
  firestore: fb.firestore()
}

Vue.use(Vuex, Axios)

Axios.defaults.baseURL='http://localhost:3000'

export default new Vuex.Store({
  state: {
    db: firebase.initializeApp(fbConfig, 'CaptainSonarVue').firestore(),
    currentUser: new Player(),
    loggedIn: false,
    game: new Game()
  },
  mutations: {
    SET_CURRENT_USER: (state, aUser)=>state.currentUser = aUser,
    
    ADD_PLAYER:(state, newPlayer)=>{
      if(newPlayer.team == "blue")
      {
        state.game.blueTeam.players.push(newPlayer)
        newPlayer.roleNames.forEach(element => {
          switch(element){
            case "Captain":
              state.game.blueTeam.captain = new CaptainRole(element, newPlayer)
              break;
            case "Officer":
              state.game.blueTeam.officer = new OfficerRole(element, newPlayer)
              break;
            case "Engineer":
              state.game.blueTeam.engineer = new EngineerRole(element, newPlayer)
              break;
            case "Radar":
              state.game.blueTeam.radar = new RadarRole(element, newPlayer)
              break;
          }
        });
        return;
      }else{
        state.game.redTeam.players.push(newPlayer)
        newPlayer.roleNames.forEach(element => {
          switch(element){
            case "Captain":
              state.game.redTeam.captain = new CaptainRole(element, newPlayer)
              break;
            case "Officer":
              state.game.redTeam.officer = new OfficerRole(element, newPlayer)
              break;
            case "Engineer":
              state.game.redTeam.engineer = new EngineerRole(element, newPlayer)
              break;
            case "Radar":
              state.game.redTeam.radar = new RadarRole(element, newPlayer)
              break;
          }
        });
      }
    },

    UPDATE_TEAM_DATA:(state, teamUpdated)=>{
      
      if(state.currentUser.team == "blue")
      {
        state.game.blueTeam = teamUpdated;
        return;
      }
      state.game.redTeam = teamUpdated;

    },

    END_TURN:(state, teamUpdated)=>{
      
      if(teamUpdated.team == "blue")
      {
        state.game.blueTeam.activeTurn = false;
        return;
      }
      state.game.redTeam.activeTurn = false;

    },

    START_TURN:(state, teamUpdated)=>{
      
      if(teamUpdated.team == "blue")
      {
        state.game.blueTeam.activeTurn = true;
        return;
      }
      state.game.redTeam.activeTurn = true;

    },

    UPDATE_PLAYER_DATA:(state,playerUpdated)=>{
      state.theUser=playerUpdated;
    },

    UPDATE_GAME_DATA:(state,gameUpdated)=>{
      state.game=gameUpdated;
    },

    NEXT_TURN:(state)=>{
      state.game.currentTurn = (state.game.currentTurn + 1)%2;
    },

    PLAYER_READY:(state, isReady)=>{
      state.currentUser.isReady = isReady;
    }
  },
  actions: {

    loadPlayerList({commit}) {

      return new Promise((resolve, reject) => {
        let playerList = [];
        let playerCollection = this.state.db.collection("player");

        let query = playerCollection.where("gameID", "==", this.state.game.id);


        query.get()
          .then(resultList => {
            resultList.docs.forEach(doc => {
              let tempPlayer = new Player();
              tempPlayer.populate(doc);

              commit('ADD_PLAYER', tempPlayer);
            })
            resolve();
          })
      });
      



    },

    setUser({commit}, aUser){
      commit('SET_CURRENT_USER', aUser)
    },
    
    
    updatePlayerData({commit}, playerUpdated){
      commit('UPDATE_PLAYER_DATA', playerUpdated)
    },
    

    //APIs
    //Game
    updateGameData({commit}, gameUpdated){
      Axios.post('/api/game/updateGameData', gameUpdated)
        .then(response =>response.data)
        .then(data=>commit('UPDATE_GAME_DATA', data.payload))
        .catch(error => console.log(error))
    },

    addPlayer({commit}, newPlayer){
      let playerObj = {
        gameID : newPlayer.gameID,
        name : newPlayer.name,
        roleNames : newPlayer.roleNames,
        team : newPlayer.team,
        isReady : newPlayer.isReady
      }
      this.state.db.collection("player").add(playerObj);
      commit('ADD_PLAYER', newPlayer);
    },
    nextTurn({commit}){
      Axios.post('/api/game/nextTurn')
      .then(response => response.data)
      .then(commit('NEXT_TURN'))
      .catch(error)
    },

    //Team
    updateTeamData({commit}, updatedTeamData){
      Axios.post('/api/team/updateTeamData', updatedTeamData)
      .then(response => response.data)
      .then(data=>commit('UPDATE_TEAM_DATA', data.payload))
      .catch(error)
      
    },
    endTurnTeam({commit}, updatedTeamData){
      Axios.post('/api/team/endTurnTeam', updatedTeamData)
      .then(response => response.data)
      .then(commit('END_TURN', data.payload))
      .catch(error)
      
    },
    startTurnTeam({commit}, updatedTeamData){
      Axios.post('/api/team/startTurnTeam', updatedTeamData)
      .then(response => response.data)
      .then(commit('START_TURN', data.payload))
      .catch(error)
      
    },

    //Player
    playerReady({commit}, isReady){
      Axios.post('/api/player/playerReady', isReady)
      .then(response => response.data)
      .then(commit('PLAYER_READY', data.payload))
      .catch(error)
    },




  },
  getters: {
    theUser: state => state.currentUser,
    blueTeam: state=> state.game.blueTeam,
    redTeam: state => state.game.redTeam,
    currentTurn: state => state.game.currentTurn,
    game: state => state.game,
  },
  
})
