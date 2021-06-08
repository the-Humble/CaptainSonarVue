<!--
VFS VUE Single File Component

<pg-game user="User"></pg-home>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="lobby-container game">
        <div id="lobby-menu" class = "flex-container">
            <div id="player-init" @click="initializePlayer($event)"> Click Me</div>
            <menu-button path="Gameplay">Ready</menu-button>
        </div>
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
            }
            this.props = {
            }

            this.injectGetters(['theUser', 'blueTeam', 'redTeam'])
            this.injectActions(['setUser', 'addPlayer'])
        }

        initializePlayer(event)
        {
            let player = new Player("Nacho", [new EngineerRole("Engineer")], "blue");
            //TODO: CREATE REAL PLAYER INITIALIZATION WITH ROLES
            this.addPlayer(player);
            this.setUser(player);
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
