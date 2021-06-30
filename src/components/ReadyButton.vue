<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2021. Jose Ignacio Ferrer. All Rights Reserved.
-->
<template>

    <section class="button-container" @click="ToggleReady($event)">  <!-- Just one main element per template -->
        Ready
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'

    // import other components you use here...

    class ReadyButtonController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
            }
            this.props = { // props are passed in when using this component
                
            }

            this.injectGetters(['theUser', 'blueTeam', 'redTeam'])
            this.injectActions(['updateTeamData'])

        }

        ToggleReady(event){
            event.preventDefault()
            this.theUser.isReady=!this.theUser.isReady;
            if(this.theUser.isReady){
                event.target.classList.add("active");
                return;
            }
            event.target.classList.remove("active");
        }
    }

    export default new ReadyButtonController('readyButton');

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .button-container {
        display: flex;
        border: 3px solid gray;
        color: white;
        background-color: gray;
        width: 20vw;
        font-size: 4em;
        height: 10vh;
        margin-top: 3rem;
        user-select: none;
        border-radius: .2em;
        align-items: center;
        justify-content: center;
    }

    .active{
        border: 3px solid green;
        background-color: green;
        font-weight: bold;
    }

    .component-item {
        flex-grow: inherit;
        flex-shrink: inherit;
        order: inherit;
    }

</style>