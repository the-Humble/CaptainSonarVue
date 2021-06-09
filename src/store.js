import Vue from 'vue'
import Vuex from 'vuex'
import Player from './model/Player'
import Team from './model/Team'
import CaptainRole from './model/CaptainRole.js'
import OfficerRole from './model/OfficerRole.js'
import EngineerRole from './model/EngineerRole.js'
import RadarRole from './model/RadarRole.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: new Player(),
    loggedIn: false,
    blueTeam: new Team("Blue"),
    redTeam: new Team("Red"),
  },
  mutations: {
    SET_CURRENT_USER: (state, aUser)=>state.currentUser = aUser,
    
    ADD_PLAYER:(state, newPlayer)=>{
      if(newPlayer.team == "blue")
      {
        state.blueTeam.players.push(newPlayer)
        newPlayer.roleNames.forEach(element => {
          switch(element){
            case "Captain":
              state.blueTeam.captain = new CaptainRole(element, newPlayer)
              break;
            case "Officer":
              state.blueTeam.officer = new OfficerRole(element, newPlayer)
              break;
            case "Engineer":
              state.blueTeam.engineer = new EngineerRole(element, newPlayer)
              break;
            case "Radar":
              state.blueTeam.radar = new RadarRole(element, newPlayer)
              break;
          }
        });
        return;
      }else{
        state.redTeam.players.push(newPlayer)
      }
    },

    UPDATE_TEAM_DATA:(state, teamUpdated)=>{
      state.blueTeam = teamUpdated;
    }
  },
  actions: {
    setUser({commit}, aUser){
      commit('SET_CURRENT_USER', aUser)
    },
    addPlayer({commit}, newPlayer){
      commit('ADD_PLAYER', newPlayer)
    },
    updateTeamData({commit}, updatedTeamData){
      commit('UPDATE_TEAM_DATA', updatedTeamData)
    }
  },
  getters: {
    theUser: state => state.currentUser,
    blueTeam: state=> state.blueTeam,
    redTeam: state => state.redTeam,
  },
  
})
