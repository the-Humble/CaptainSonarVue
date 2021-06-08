<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="component-style" :style="{transform: 'translate('+position.x +'px, '+position.y +'px)'}" @click="toggleActive($event)">  <!-- Just one main element per template -->
        <div>
            
        </div>
    </section> 

</template>
<script>
    import Controller from '@/mixins/controller'

    // import other components you use here...

    class EngineerButtonController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                active: false
                
            }
            this.props = { // props are passed in when using this component
                type: String,
                position:
                {
                    type: Object
                }
            }

            this.computed = {

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
        toggleActive( element ) {
            
            if(!this.active){
                element.srcElement.classList.add('active');
                this.active = true;
                return;
            }
            this.active = false;
            element.srcElement.classList.remove('active');

        }
    }

    export default new EngineerButtonController('engineerButton'/* , { subComponent, anotherComponent } */);

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .component-style {
        z-index: 1;
        position:absolute;
        margin: 0px;
        padding: 0px;
        border-radius: 3em;
        height: 2em;
        width: 2em;
        
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