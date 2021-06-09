<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="container">  <!-- Just one main element per template -->

        <!--WestBlock-->
        <engineer-button id="west-1" :position= "{x:93, y:263}" class="west attack" :engButton="this.engineerRole.buttons[0]" :index="0"></engineer-button>
        <engineer-button id="west-2" :position= "{x:173, y:263}" class="west scenario" :engButton="this.engineerRole.buttons[1]" :index="1"></engineer-button>
        <engineer-button id="west-3" :position= "{x:173, y:309}" class="west radar" :engButton="this.engineerRole.buttons[2]" :index="2"></engineer-button>
        <engineer-button id="west-4" :position= "{x:93, y:358}" class="west radar" :engButton="this.engineerRole.buttons[3]" :index="3"></engineer-button>
        <engineer-button id="west-5" :position= "{x:133, y:358}" class="west reactor" :engButton="this.engineerRole.buttons[4]" :index="4"></engineer-button>
        <engineer-button id="west-6" :position= "{x:173, y:358}" class="west reactor" :engButton="this.engineerRole.buttons[5]" :index="5"></engineer-button>

        <!--NorthBlock-->
        <engineer-button id="north-1" :position= "{x:236, y:263}" class="north scenario" :engButton="this.engineerRole.buttons[6]" :index="6"></engineer-button>
        <engineer-button id="north-2" :position= "{x:236, y:309}" class="north attack" :engButton="this.engineerRole.buttons[7]" :index="7"></engineer-button>
        <engineer-button id="north-3" :position= "{x:316, y:309}" class="north scenario" :engButton="this.engineerRole.buttons[8]" :index="8"></engineer-button>
        <engineer-button id="north-4" :position= "{x:236, y:358}" class="north radar" :engButton="this.engineerRole.buttons[9]" :index="9"></engineer-button>
        <engineer-button id="north-5" :position= "{x:276, y:358}" class="north attack" :engButton="this.engineerRole.buttons[10]" :index="10"></engineer-button>
        <engineer-button id="north-6" :position= "{x:316, y:358}" class="north reactor" :engButton="this.engineerRole.buttons[11]" :index="11"></engineer-button>

        <!--SouthBlock-->
        <engineer-button id="south-1" :position= "{x:377, y:263}" class="south radar" :engButton="this.engineerRole.buttons[12]" :index="12"></engineer-button>
        <engineer-button id="south-2" :position= "{x:377, y:309}" class="south scenario" :engButton="this.engineerRole.buttons[13]" :index="13"></engineer-button>
        <engineer-button id="south-3" :position= "{x:457, y:309}" class="south attack" :engButton="this.engineerRole.buttons[14]" :index="14"></engineer-button>
        <engineer-button id="south-4" :position= "{x:377, y:358}" class="south attack" :engButton="this.engineerRole.buttons[15]" :index="15"></engineer-button>
        <engineer-button id="south-5" :position= "{x:417, y:358}" class="south reactor" :engButton="this.engineerRole.buttons[16]" :index="16"></engineer-button>
        <engineer-button id="south-6" :position= "{x:457, y:358}" class="south scenario" :engButton="this.engineerRole.buttons[17]" :index="17"></engineer-button>

        <!--EastBlock-->
        <engineer-button id="east-1" :position= "{x:519, y:263}" class="east radar" :engButton="this.engineerRole.buttons[18]" :index="18"></engineer-button>
        <engineer-button id="east-2" :position= "{x:519, y:309}" class="east scenario" :engButton="this.engineerRole.buttons[19]" :index="19"></engineer-button>
        <engineer-button id="east-3" :position= "{x:599, y:309}" class="east attack" :engButton="this.engineerRole.buttons[20]" :index="20"></engineer-button>
        <engineer-button id="east-4" :position= "{x:519, y:358}" class="east reactor" :engButton="this.engineerRole.buttons[21]" :index="21"></engineer-button>
        <engineer-button id="east-5" :position= "{x:559, y:358}" class="east radar" :engButton="this.engineerRole.buttons[22]" :index="22"></engineer-button>
        <engineer-button id="east-6" :position= "{x:599, y:358}" class="east reactor" :engButton="this.engineerRole.buttons[23]" :index="23"></engineer-button>
        
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'
    import engineerButton from '@/components/EngineerButton.vue'

    // import other components you use here...

    class EngineerController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                
            }
            this.props = {
                engineerRole: Object
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