<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2021. Jose Ignacio Ferrer. All Rights Reserved.
-->
<template>

    <section class="container">  <!-- Just one main element per template -->

        <!--WestBlock-->
        <button-toggle id="0" :position="{x:93, y:263}" class="west attack" :engButton="this.engineerRole.buttons[0]" :index="0"></button-toggle>
        <button-toggle id="1" :position="{x:173, y:263}" class="west scenario" :engButton="this.engineerRole.buttons[1]" :index="1"></button-toggle>
        <button-toggle id="2" :position="{x:173, y:309}" class="west radar" :engButton="this.engineerRole.buttons[2]" :index="2"></button-toggle>
        <button-toggle id="3" :position="{x:93, y:358}" class="west radar" :engButton="this.engineerRole.buttons[3]" :index="3"></button-toggle>
        <button-toggle id="4" :position="{x:133, y:358}" class="west reactor" :engButton="this.engineerRole.buttons[4]" :index="4"></button-toggle>
        <button-toggle id="5" :position="{x:173, y:358}" class="west reactor" :engButton="this.engineerRole.buttons[5]" :index="5"></button-toggle>

        <!--NorthBlock-->
        <button-toggle id="6" :position="{x:236, y:263}" class="north scenario" :engButton="this.engineerRole.buttons[6]" :index="6"></button-toggle>
        <button-toggle id="7" :position="{x:236, y:309}" class="north attack" :engButton="this.engineerRole.buttons[7]" :index="7"></button-toggle>
        <button-toggle id="8" :position="{x:316, y:309}" class="north scenario" :engButton="this.engineerRole.buttons[8]" :index="8"></button-toggle>
        <button-toggle id="9" :position="{x:236, y:358}" class="north radar" :engButton="this.engineerRole.buttons[9]" :index="9"></button-toggle>
        <button-toggle id="10" :position="{x:276, y:358}" class="north attack" :engButton="this.engineerRole.buttons[10]" :index="10"></button-toggle>
        <button-toggle id="11" :position="{x:316, y:358}" class="north reactor" :engButton="this.engineerRole.buttons[11]" :index="11"></button-toggle>

        <!--SouthBlock-->
        <button-toggle id="12" :position="{x:377, y:263}" class="south radar" :engButton="this.engineerRole.buttons[12]" :index="12"></button-toggle>
        <button-toggle id="13" :position="{x:377, y:309}" class="south scenario" :engButton="this.engineerRole.buttons[13]" :index="13"></button-toggle>
        <button-toggle id="14" :position="{x:457, y:309}" class="south attack" :engButton="this.engineerRole.buttons[14]" :index="14"></button-toggle>
        <button-toggle id="15" :position="{x:377, y:358}" class="south attack" :engButton="this.engineerRole.buttons[15]" :index="15"></button-toggle>
        <button-toggle id="16" :position="{x:417, y:358}" class="south reactor" :engButton="this.engineerRole.buttons[16]" :index="16"></button-toggle>
        <button-toggle id="17" :position="{x:457, y:358}" class="south scenario" :engButton="this.engineerRole.buttons[17]" :index="17"></button-toggle>

        <!--EastBlock-->
        <button-toggle id="18" :position="{x:519, y:263}" class="east radar" :engButton="this.engineerRole.buttons[18]" :index="18"></button-toggle>
        <button-toggle id="19" :position="{x:519, y:309}" class="east scenario" :engButton="this.engineerRole.buttons[19]" :index="19"></button-toggle>
        <button-toggle id="20" :position="{x:599, y:309}" class="east attack" :engButton="this.engineerRole.buttons[20]" :index="20"></button-toggle>
        <button-toggle id="21" :position="{x:519, y:358}" class="east reactor" :engButton="this.engineerRole.buttons[21]" :index="21"></button-toggle>
        <button-toggle id="22" :position="{x:559, y:358}" class="east radar" :engButton="this.engineerRole.buttons[22]" :index="22"></button-toggle>
        <button-toggle id="23" :position="{x:599, y:358}" class="east reactor" :engButton="this.engineerRole.buttons[23]" :index="23"></button-toggle>
        
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'
    import buttonToggle from '@/components/ButtonToggle.vue'

    // import other components you use here...

    class EngineerController extends Controller {

        constructor( name, subComponentList=[]) {
            super( name, subComponentList )
            this.vm={
                
            }
            this.props={
                engineerRole: Object
            }

            /*
            Components use the getters with ...mapState('module/sub-module', ['getter-name'])
            to access the State data

            In the component constructor

                this.computed={
                    ...mapState('module/user', ['getName', 'getTeam']),
                    ...mapState('module/game', ['getId', 'getTeam'])
                }

            */

        }

    }

    export default new EngineerController('engineer', {buttonToggle});

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