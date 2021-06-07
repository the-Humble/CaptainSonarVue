<!--
<player-notepad player="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</player-notepad>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="notepad-container">
        <div></div>  <!-- Just one main element per template -->
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'

    // import other components you use here...

    class NotepadController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                someData: "Hello world"
            }
            this.props = { // props are passed in when using this component
                user: String
            }

            /*
            Components use the getters with ...mapState('module/sub-module', ['getter-name'])
            to access the State data

            In the component constructor

                this.computed = {
                    ...mapState('module/user', ['getName', 'getTeam']),
                    ...mapState('module/game', ['getId', 'getTeam'])
                }

            */

        }

        onBeforeCreate() {
            // after the Vue instance initializes, before instances are created
        }

        onCreated() {
            // called when each instance is initialized
        }

        onBeforeMount() {
            // called before the component is injected into the DOM
        }

        onMounted() {
            // called
        }

        onBeforeUpdate() {

        }

        onUpdated() {

        }

        onBeforeDestroy() {

        }

        onDestroyed() {

        }

        // your local component methods
        doIt( event ) {
            // A method that does something to the props or viewModel, or global state
        }
    }

    export default new NotepadController('playerNotepad'/* , { subComponent, anotherComponent } */);

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .notepad-container {
        border: 2px solid purple;
        width: 15vw;
        height: 15vw;
        margin: 1rem 0rem
    }

    .component-item {
        flex-grow: inherit;
        flex-shrink: inherit;
        order: inherit;
    }

</style>