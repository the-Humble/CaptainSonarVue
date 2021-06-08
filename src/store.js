import Vue from 'vue'
import Vuex from 'vuex'
import Player from './model/Player'
import Team from './model/Team'

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
        return;
      }
      state.redTeam.players.push(newPlayer)
    },
    UPDATE_TEAM_DATA:(state, teamUpdated)=>{

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
