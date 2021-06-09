<!--
VFS VUE Single File Component

<pg-game user="User"></pg-home>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="lobby-container game">
        <div class="team-info">
            <form id="lobby-menu" class = "flex-container">
                <label class="title-label">Player Name:</label><br>
                <input placeholder="Player's Name" v-model="playerName"><br>

                <label class="title-label">Team:</label><br>
                <div class="check-item">
                <input type="radio" id="blue" value="blue" v-model="playerTeam">
                    <label class="check-label" for="blue">Blue</label>
                </div>
                <br>
                <div class="check-item">
                <input type="radio" id="red" value="red" v-model="playerTeam">
                    <label class="check-label" for="red">Red</label>
                </div>
                <br>

                <label class="title-label">Player Roles:</label><br>
            
                <div class="check-item">
                <input type="checkbox" id="checkbox-captain" value="Captain" v-model="playerRoles">
                <label class="check-label" for="checkbox-captain">Captain</label>
                </div>
                <div class="check-item">
                <input type="checkbox" id="checkbox-officer" value="Officer" v-model="playerRoles">
                <label class="check-label" for="checkbox-officer">Officer</label>
                </div>
                <div class="check-item">
                <input type="checkbox" id="checkbox-engineer" value="Engineer" v-model="playerRoles">
                <label class="check-label" for="checkbox-engineer">Engineer</label>
                </div>
                <div class="check-item">
                <input type="checkbox" id="checkbox-radar" value="Radar" v-model="playerRoles">
                <label class="check-label" for="checkbox-radar">Radar</label>
                </div>
                <br>

                <input type="submit" value="Create Player" @click = "initializePlayer($event)">
            </form>
            <div class="team-display">
                <div class="team blue">
                    <div v-for="(player, index) in blueTeam.players" :key = "index">
                        {{player.name}}
                    </div>
                </div>
                <div class="team red">
                    <div v-for="(player, index) in redTeam.players" :key = "index">
                        {{player.name}}
                    </div>
                </div>
            </div>
        </div>
        <menu-button path="Gameplay">Ready</menu-button>
    </section>

</template>
<script>

    import Controller from '@/mixins/controller'
    import menuButton from '@/components/MenuButton.vue'
    import Player from '@/model/Player.js'


    class LobbyController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                playerName: "",
                playerTeam: "",
                playerRoles: []
            }
            this.props = {
            }

            this.injectGetters(['theUser', 'blueTeam', 'redTeam'])
            this.injectActions(['setUser', 'addPlayer'])
        }

        initializePlayer(event)
        {
            event.preventDefault();
            let player = new Player(this.playerName, this.playerRoles, this.playerTeam);
            this.addPlayer(player);
            this.setUser(player);
            this.playerName = "";
            this.playerTeam = "";
            this.playerRoles = [];
        }
    }

    export default new LobbyController('pgLobby', {menuButton});

</script>
<style scoped>
    /* Local styles for this template */
    .lobby-container {
        display: flex;
        flex-direction:row;
        justify-content:center;
        align-content: flex-start;
        align-items:center;
    }

    .team-info{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    #lobby-menu{
        width: 20vw;
        border: 2px solid black;
        padding: .5em 1em;
    }

    .team-display{
        border: 2px solid black;
        width: 20vw;
    }

    .team{
        height:50%;
        padding: .5em 1em;
    }

    .blue{
            border: 2px solid blue;
            
        }

    .red{
        border: 2px solid red;
    }

    .check-item{
        display: flex;
        align-content: center;
        align-items: center;
    }

    .title-label{
        color:black;
        margin: .5em;
        font-size: 1.3em;
    }

    .check-label{
        padding-left : 1em;
        color: black;
    }

    .game {
        display:flex;
        flex-direction: column;
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .title-container {
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 4rem;
    }

    .flex-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    select, input, button {
        font-size: 1.2em;
        font-weight: 700;
        height: 1.4em;
    }

    button {
        padding: .5em;
        margin: .25em;
        padding-bottom: 1.5em;
    }
</style>
