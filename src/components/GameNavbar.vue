<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="navbar-container">  <!-- Just one main element per template -->
        <ul class="tabs">
            <li :id="role" v-for = "(role, index) in roles" :key = "index" @click="toggleActive($event)" class="tab">{{role}}</li>
        </ul>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'

    // import other components you use here...

    class GameNavbarController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                someData: "Hello world"
            }
            this.props = { // props are passed in when using this component
                roles: [String]
            }

        }
        onCreated() {
            // called when each instance is initialized
            
        }

        initializeOnRole(role){
            document.getElementById(role).classList.add("active");
        }

        toggleActive(clicked){
            document.getElementsByClassName('tab').forEach(element => {
                element.classList.remove("active");
            });
            clicked.srcElement.classList.add("active");
            this.$router.push({name:`${clicked.srcElement.id}`});
            document.getElementById("cover").style.display = 'none';
            
        }
    }

    export default new GameNavbarController('gameNavbar'/* , { subComponent, anotherComponent } */);

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .navbar-container {
        z-index: 3;
        display: flex;
        flex-direction: row;
        width:auto;
        margin-bottom: 0px;
        height:fit-content;
        background-color: lightgray;
    }
    .component-style {
        display: flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:space-evenly;
        align-content: flex-start;
        align-items:flex-start;
    }

    .component-item {
        flex-grow: inherit;
        flex-shrink: inherit;
        order: inherit;
    }

    .tabs{
        display: flex;
        flex-direction: row;
        margin-bottom: 0px;
    }

    /*Tabs styling gathered from: https://css-tricks.com/tabs-with-round-out-borders/ */
    .tabs li { 
            margin-bottom: 0px;
        /* So the psueudo elements can be
            abs. positioned inside */
        position: relative; 
    
        /* Make them block level
            and only as wide as they need */
        float: right; 
        padding: 10px 40px; 
        text-decoration: none;
        
        /* Default colors */ 
        
        background: navy; 
        color: white; 
        
        /* Only round the top corners */
        -webkit-border-top-left-radius: 15px;
        -webkit-border-top-right-radius: 15px;
        -moz-border-radius-topleft: 15px;
        -moz-border-radius-topright: 15px;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px; 
    }
    .tabs .active {
        /* Highest, active tab is on top */
        z-index: 3;
        /* Colors when tab is active */
        -webkit-text-stroke: 1px gray;
        color: black;
        background: #6ac5fe; 
        font-weight: bold;
    }
    .tabs li:before, .tabs li:after{
        /* All pseudo elements are 
            abs. positioned and on bottom */
        position: absolute;
        bottom: 0;
    }
    

</style>