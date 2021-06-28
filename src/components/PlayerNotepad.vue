<!--
<player-notepad player="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</player-notepad>

@copyright (c) 2021. Jose Ignacio Ferrer. All Rights Reserved.
-->
<template>

    <section class="notepad-container">
        <textarea id="notepad" name="notepad" placeholder="Write your notes here" wrap="soft" v-model="notes">
        </textarea>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'

    // import other components you use here...

    class NotepadController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                notes: ""
            }
            this.props = { // props are passed in when using this component
            }
            this.injectGetters(['theUser', 'blueTeam', 'redTeam'])

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
            this.notes = this.theUser.notes;
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
    textarea {
        resize: none;
        overflow-y: auto;
        width:100%;
        height:100%
    }

</style>