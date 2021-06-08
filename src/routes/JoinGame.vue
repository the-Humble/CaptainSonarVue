<!--
VFS VUE Single File Component

<pg-game user="User"></pg-home>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="lobby-container game">
        <form id="lobby-menu" class = "flex-container">
            <label>Player Name:</label><br>
            <input placeholder="Player's Name" v-model="playerName"><br>

            <label>Team:</label><br>
            <div>
            <input type="radio" id="blue" value="blue" v-model="playerTeam">
                <label for="blue">Blue</label>
            </div>
            <br>
            <div>
            <input type="radio" id="red" value="red" v-model="playerTeam">
                <label for="red">Red</label>
            </div>
            <br>

            <label>Player Roles:</label><br>
        
            <input type="checkbox" id="checkbox-captain" value="Captain" v-model="playerRoles">
            <label for="checkbox-captain">Captain</label>
            <input type="checkbox" id="checkbox-officer" value="Officer" v-model="playerRoles">
            <label for="checkbox-officer">Officer</label>
            <input type="checkbox" id="checkbox-engineer" value="Engineer" v-model="playerRoles">
            <label for="checkbox-engineer">Engineer</label>
            <input type="checkbox" id="checkbox-radar" value="Radar" v-model="playerRoles">
            <label for="checkbox-radar">Radar</label>
            <br>

            <input type="submit" value="Create Player" @click = "initializePlayer($event)">

            
        </form>
        <menu-button path="Gameplay">Ready</menu-button>
    </section>

</template>
<script>

    import Controller from '@/mixins/controller'
    import menuButton from '@/components/MenuButton.vue'
    import Player from '@/model/Player.js'
    import EngineerRole from '@/model/EngineerRole.js'


    class LobbyController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                playerName: String,
                playerTeam: String,
                playerRoles: [],
            }
            this.props = {

            }

            this.injectGetters(['theUser', 'blueTeam', 'redTeam'])
            this.injectActions(['setUser', 'addPlayer'])
        }

        initializePlayer(event)
        {
            let roles =[]
            this.playerRoles.forEach(element => {
                switch(element){
                    case "Engineer":
                        roles.push(new EngineerRole("Engineer"))
                        break;
                    case "Captain":
                        //TODO:Other roles
                        break;
                    case "Officer":
                        //TODO:Other roles
                        break;
                    case "Radar":
                        //TODO:Other roles
                        break;
                }

            });


            event.preventDefault();
            let player = new Player(this.playerName, roles, this.playerRoles, this.playerTeam);
            this.addPlayer(player);
            this.setUser(player);
            this.playerName = null;
            this.playerTeam = null;
            this.playerRoles = null;
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
