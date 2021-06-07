<!--
VFS VUE Single File Component

<pg-game user="User"></pg-home>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="splash-container game">
        <div id= "title-box" class = "title-container"> Captain Sonar (Vue.js) </div>
        <div id="splash-menu" class = "flex-container">
            <menu-button text="Play!" path="Gameplay"></menu-button>
            <menu-button text="Settings" path=""></menu-button>
        </div>
    </section>

</template>
<script>

    import Controller from '@/mixins/controller'
    import gameController from '@/routes/Game.vue'
    import menuButton from '@/components/MenuButton.vue'


    class SplashController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
            }
            this.props = {
            }
        }
    }

    export default new SplashController('pgSplash', {gameController, menuButton});

</script>
<style scoped>
    /* Local styles for this template */
    .splash-container {
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
