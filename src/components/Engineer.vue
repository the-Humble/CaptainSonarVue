<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="container">  <!-- Just one main element per template -->

        <!--WestBlock-->
        <engineer-button id="west-1" :position= "{x:93, y:263}" class="west attack"></engineer-button>
        <engineer-button id="west-2" :position= "{x:173, y:263}" class="west scenario"></engineer-button>
        <engineer-button id="west-3" :position= "{x:173, y:309}" class="west radar"></engineer-button>
        <engineer-button id="west-5" :position= "{x:133, y:358}" class="west reactor"></engineer-button>
        <engineer-button id="west-6" :position= "{x:173, y:358}" class="west reactor" ></engineer-button>
        <engineer-button id="west-4" :position= "{x:93, y:358}" class="west radar"></engineer-button>

        <!--NorthBlock-->
        <engineer-button id="north-1" :position= "{x:236, y:263}" class="north scenario"></engineer-button>
        <engineer-button id="north-2" :position= "{x:236, y:309}" class="north attack"></engineer-button>
        <engineer-button id="north-3" :position= "{x:316, y:309}" class="north scenario"></engineer-button>
        <engineer-button id="north-4" :position= "{x:236, y:358}" class="north radar"></engineer-button>
        <engineer-button id="north-5" :position= "{x:276, y:358}" class="north attack"></engineer-button>
        <engineer-button id="north-6" :position= "{x:316, y:358}" class="north reactor"></engineer-button>

        <!--SouthBlock-->
        <engineer-button id="south-1" :position= "{x:377, y:263}" class="south radar"></engineer-button>
        <engineer-button id="south-2" :position= "{x:377, y:309}" class="south scenario"></engineer-button>
        <engineer-button id="south-3" :position= "{x:457, y:309}" class="south attack"></engineer-button>
        <engineer-button id="south-4" :position= "{x:377, y:358}" class="south attack"></engineer-button>
        <engineer-button id="south-5" :position= "{x:417, y:358}" class="south reactor"></engineer-button>
        <engineer-button id="south-6" :position= "{x:457, y:358}" class="south scenario"></engineer-button>

        <!--EastBlock-->
        <engineer-button id="east-1" :position= "{x:519, y:263}" class="east radar"></engineer-button>
        <engineer-button id="east-2" :position= "{x:519, y:309}" class="east scenario"></engineer-button>
        <engineer-button id="east-3" :position= "{x:599, y:309}" class="east attack"></engineer-button>
        <engineer-button id="east-4" :position= "{x:519, y:358}" class="east reactor"></engineer-button>
        <engineer-button id="east-5" :position= "{x:559, y:358}" class="east radar"></engineer-button>
        <engineer-button id="east-6" :position= "{x:599, y:358}" class="east reactor"></engineer-button>
        
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'
    import engineerButton from '@/components/EngineerButton.vue'
    import EngineerRole from '@/model/EngineerRole.js'
    import Player from '@/model/Player.js'

    // import other components you use here...

    class EngineerController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                
            }
            this.props = {
                engineer: Object
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

    export default new EngineerController('engineer', {engineerButton});

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .container{
        height: 100%;
        width: 100%;
        flex: 1;
        background: url('../assets/engineer.jpg');
        background-size: 100% 100%;

    }

    .attack{
        border: 3px solid red;
    }

    .scenario{
        border: 3px solid yellow;
    }

    .reactor{
        border: 3px solid blue;
    }


    .radar{
        border: 3px solid green;
    }

    .component-item {
        flex-grow: inherit;
        flex-shrink: inherit;
        order: inherit;
    }

</style>