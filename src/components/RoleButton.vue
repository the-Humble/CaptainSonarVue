<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="button-container">  <!-- Just one main element per template -->
        <slot></slot>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'

    // import other components you use here...

    class RoleButtonController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                someData: "Hello world"
            }
            this.props = { // props are passed in when using this component
                role: String
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

        // your local component methods;
        doIt( event ) {
            // A method that does something to the props or viewModel, or global state
        }
    }

    export default new RoleButtonController('roleButton');

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .button-container {
        border: 2px solid blue;
        width: 20vw;
        height: 10vh;
        margin: 2rem 0rem;
    }

    .component-item {
        flex-grow: inherit;
        flex-shrink: inherit;
        order: inherit;
    }

</style>