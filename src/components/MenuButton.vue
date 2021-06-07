<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section @click="doClick(path)" class="button-container" v-on:click="onClick(event)">  <!-- Just one main element per template -->
        <div class="button-text">{{ text }}</div>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'

    // import other components you use here...

    class MenuButtonController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                someData: "Hello world"
            }
            this.props = { // props are passed in when using this component
                text: String,
                path: String
            }

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
        doClick(path) {
            
            this.$router.push({path:`${path}`});
        }
        
    }

    export default new MenuButtonController('menuButton'/* , { subComponent, anotherComponent } */);

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .button-container {
        display:inline-block;
        padding: .7em 5rem;
        margin: 2em;
        border:0.16em solid rgba(255,255,255,0);
        background: gray;
        border-radius:.5em;
        box-sizing: border-box;
        text-decoration:none;
        font-family:'Roboto',sans-serif;
        font-weight:300;
        color:#FFFFFF;
        text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
        text-align:center;
        transition: all 0.2s;
        user-select: none;
        text-decoration:none;

    }

    .button-container:hover{
        color: white;
        background: green;
    }

    .button-text{
        font-size: 3rem;
        text-decoration:none;
        color: inherit
    }

    .component-item {
        flex-grow: inherit;
        flex-shrink: inherit;
        order: inherit;
    }

</style>