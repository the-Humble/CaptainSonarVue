<!--
VFS VUE Single File Component

<pg-game user="User"></pg-home>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="game-container game">
        <div>
            <role-screen role="Captain"></role-screen>
            <message-log></message-log>
        </div>
        <div>
            <role-button role="Captain"></role-button>
        </div>
    </section>

</template>
<script>

    import Controller from '@/mixins/controller'
    import roleScreen from '@/components/RoleScreen.vue'
    import messageLog from '@/components/MessageLog.vue'
    import roleButton from '@/components/RoleButton.vue'

    class GameController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
            }
            this.props = {
                name: String,
            }
        }
    }

    export default new GameController('pgGame', {roleScreen, messageLog, roleButton});

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
    }

    .game {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
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
