<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2021. Jose Ignacio Ferrer. All Rights Reserved.
-->
<template>

    <section class="container">  <!-- Just one main element per template -->
        <div v-for="(nodeY, yIndex) in mapLayout" :key = "yIndex">
            <div v-for="(nodeX, xIndex) in mapLayout[yIndex]" :key = "xIndex">
                <div v-if="mapLayout[yIndex][xIndex]">
                    <map-toggle :id="xIndex+'-'+yIndex" :xIndex="xIndex" :yIndex="yIndex" :position="{x:58+xIndex*(427/15), y:75+yIndex*(370/15)}"></map-toggle>
                </div>
            </div>
        </div>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'
    import mapToggle from '@/components/MapToggle.vue'

    // import other components you use here...

    class CaptainController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                captain:Object,
                mapState:Array,
                mapLayout:Array
            }
            this.props = { 
            }

            this.injectGetters(['theUser', 'blueTeam', 'redTeam'])
            this.injectActions(['updateTeamData'])
        }

        // your local component methods
        doIt( event ) {
            // A method that does something to the props or viewModel, or global state
        }

        onMounted()
        {
            let team = this.redTeam;
            if(this.theUser.team=="blue"){
                team = this.blueTeam;
            }
            this.mapState = team.captain.map.mapState;
            this.mapLayout = team.captain.map.mapLayout;
        }
    }

    export default new CaptainController('captain' , { mapToggle} );

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
        background: url('../assets/radar.jpg');
        background-size: 100% 100%;

    }

    .component-style {
        flex: 1;
        background-size: 100% 100%;
    }


</style>