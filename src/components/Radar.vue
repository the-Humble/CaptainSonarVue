<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2021. Jose Ignacio Ferrer. All Rights Reserved.
-->
<template>

    <section class="container">  <!-- Just one main element per template -->
        <div class="component-style"> </div>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'

    // import other components you use here...

    class RadarController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                someData: "Hello world"
            }
            this.props = {
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
    }

    export default new RadarController('radar'/* , { subComponent, anotherComponent } */);

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .container{
        display: flex;
        height: 100%;
        width: 100%

    }

    .component-style {
        flex: 1;
        background: url('../assets/radar.jpg');
        background-size: 100% 100%;
    }

    .component-item {
        flex-grow: inherit;
        flex-shrink: inherit;
        order: inherit;
    }

</style>