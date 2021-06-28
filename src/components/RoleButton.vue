<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2021. Jose Ignacio Ferrer. All Rights Reserved.
-->
<template>

    <section v-if="this.theUser.team == 'blue'" class="button-container blue">  <!-- Just one main element per template -->
        <slot></slot>
    </section>
    <section v-else class="button-container red">  <!-- Just one main element per template -->
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
            }
            this.props = { // props are passed in when using this component
                
            }

            this.injectGetters(['theUser', 'blueTeam', 'redTeam'])

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
        display: flex;
        color: white;
        font-size: 3em;
        width: 20vw;
        height: 10vh;
        margin: 2rem 0rem;
        justify-content: center;
        text-align: center;
        align-items: center;
    }

    .blue {
        border: 2px solid blue;
        background-color: blue;
    }

    .red{
        border: 2px solid red;
        background-color: red;
    }

    .component-item {
        flex-grow: inherit;
        flex-shrink: inherit;
        order: inherit;
    }

</style>