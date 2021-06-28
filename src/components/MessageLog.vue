<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2021. Jose Ignacio Ferrer. All Rights Reserved.
-->
<template>

    <section class="message-log">  <!-- Just one main element per template -->
        <div></div>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'

    // import other components you use here...

    class MessageLogController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
            }
            this.props = { // props are passed in when using this component
                user: Object,
                team: Object
            }

        }

        
    }

    export default new MessageLogController('messageLog'/* , { subComponent, anotherComponent } */);

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .message-log {
        border: 1px solid red;
        width: 45rem;
        height: 5rem;
        margin-bottom: 1rem;
        overflow-y:auto;
    }

    .component-item {
        flex-grow: inherit;
        flex-shrink: inherit;
        order: inherit;
    }

</style>