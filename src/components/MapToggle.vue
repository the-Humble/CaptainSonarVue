<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2021. Jose Ignacio Ferrer. All Rights Reserved.
-->
<template>

    <section class="component eng-button" :style="{transform: 'translate('+position.x +'px, '+position.y +'px)' }" @click="toggleActive($event)">  <!-- Just one main element per template -->
    </section> 

</template>
<script>
    import Controller from '@/mixins/controller'

    // import other components you use here...

    class MapToggleController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                active:Boolean
            }
            this.props = { // props are passed in when using this component
                
                xIndex:Number,
                yIndex:Number,
                position:
                {
                    type: Object
                }
            }

            this.computed = {

            }

            this.injectGetters(['theUser', 'blueTeam', 'redTeam'])
            this.injectActions(['setUser', 'addPlayer', 'updateTeamData'])
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

        onMounted(){
            let team = this.redTeam;
            if(this.theUser.team=="blue"){
                team = this.blueTeam;
            }
            this.active = team.captain.map.mapState[this.xIndex][this.yIndex]

            if(this.active){
                document.getElementById(this.xIndex+"-"+this.yIndex).classList.add('active');
                return;
            }
            document.getElementById(this.xIndex+"-"+this.yIndex).classList.remove('active');
        }

        setButton(){
            let team = this.redTeam;
            if(this.theUser.team=="blue"){
                team = this.blueTeam;
            }
            team.captain.map.mapState[this.xIndex][this.yIndex]=this.active;
            this.updateTeamData(team);
        }

        // your local component methods
        toggleActive( event ) {
            if(!this.active){
                event.target.classList.add('active');
                this.active = true;
                this.setButton();
                return;
            }
            this.active = false;
            event.target.classList.remove('active');
            this.setButton();
        }
    }

    export default new MapToggleController('mapToggle'/* , { subComponent, anotherComponent } */);

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .component {
        z-index: 1;
        position:absolute;
        margin: 0px;
        padding: 0px;
        height: 25px;
        width: 29px;
        
    }

    .active{
        background-color: red;
    }

    .component-item {
        flex-grow: inherit;
        flex-shrink: inherit;
        order: inherit;
    }

</style>