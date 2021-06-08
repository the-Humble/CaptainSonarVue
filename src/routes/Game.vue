<!--
VFS VUE Single File Component

<pg-game user="User"></pg-home>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="game">
        <game-navbar :roles="theUser.roleNames"></game-navbar>
        <div id="cover" class="cover"></div>
        <div class="game-container">
            <div class = "flex-container">
                <div class="display">
                    <router-view></router-view>
                </div>
                
                <message-log></message-log>
            </div>
            <div class = "flex-container">
                <role-button>HELP</role-button>
                <player-notepad :user="theUser"></player-notepad>
                <ready-button :user="theUser"></ready-button>
            </div>
        </div>
    </section>

</template>
<script>

    import Controller from '@/mixins/controller'
    import gameNavbar from '@/components/GameNavbar.vue'
    import roleScreen from '@/components/RoleScreen.vue'
    import messageLog from '@/components/MessageLog.vue'
    import roleButton from '@/components/RoleButton.vue'
    import playerNotepad from '@/components/PlayerNotepad.vue'
    import readyButton from '@/components/ReadyButton.vue'


    class GameController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
            }
            this.props = {
                name: String,
            }

            this.injectGetters(['theUser', 'blueTeam', 'redTeam'])
            this.injectActions(['setUser', 'addPlayer'])
        }

        onCreated(){
            //Initialize game on first
            document.getElementById("cover").style.display = '';
        }
    }

    export default new GameController('pgGame', {gameNavbar, roleScreen, messageLog, roleButton, playerNotepad, readyButton});

</script>
<style scoped>
    /* Local styles for this template */
    .game-container {
        display: flex;
        flex-direction:row;
        justify-content:space-evenly;
        align-content: flex-start;
        align-items:flex-start;
        width: 100%;
        
        overflow-y: auto;
    }

    .display {
        border:2px solid green;
        width: 45em;
        height: 30em;
        margin: 2em 0em

    }

    .cover {
        position:absolute;
        height: 100%;
        width: 100%;
        background-color: navy;
    }

    .game {
        position: relative;
        display:flex;
        flex-direction: column;
        margin:2vw;
        border: 1px solid black;
        background-color: #6ac5fe;
        color: black;
        height: 78vh;
        width: 80vw;
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
