<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2021. Jose Ignacio Ferrer. All Rights Reserved.
-->
<template>

    <section class="container">  <!-- Just one main element per template -->
        <form autocomplete="off" class="message-log">
            <textarea id="log" readonly class="log"></textarea>
            <div id="horizontal-container" class="horizontal">
                <input id="typebox" type="text" class="typebox">
                <input type="submit" value="Send" class = "submit" @click="SendMessage($event)">
            </div>
        </form>
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
            this.injectGetters(['theUser', 'blueTeam', 'redTeam'])
            this.injectActions(['updateTeamData'])
        } 
        
        onMounted() {
            document.getElementById("log").value = this.checkTeam().messageLog;
        }

        SendMessage(event){
            event.preventDefault();

            if(document.getElementById("typebox").value==""){
                return;
            }

            let team = this.checkTeam()
            team.messageLog += this.theUser.name + " says: " + document.getElementById("typebox").value + '\n';
            this.updateTeamData(team);
            document.getElementById("log").value = team.messageLog;
            document.getElementById("typebox").value="";
            document.getElementById("log").scrollTop = document.getElementById("log").scrollHeight 

        }

        checkTeam(){
            
            if(this.theUser.team == "blue"){
                return this.blueTeam;
            }
            return this.redTeam;
        }
    }

    export default new MessageLogController('messageLog'/* , { subComponent, anotherComponent } */);

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .container
    {
        width: 45rem;
        height: 8rem;
        padding: 0px;
        margin: 0px;
    }

    .submit{
        width: 20%;
    }

    .message-log {
        height: 100%;
        margin-bottom: 1rem;
        overflow-y:none;
        padding: 0px;
        margin: 0px;
    }

    .component-item {
        flex-grow: inherit;
        flex-shrink: inherit;
        order: inherit;
        padding: 0px;
        margin: 0px;
    }

    .horizontal{
        display: flex;
        flex-direction: row;
        height: 20%;
        width: 100%;
        padding: 0px;
        margin: 0px;
    }

    .log{
        overflow-y: auto;
        word-break:normal;
        resize: none;
        width: 100%;
        height: 80%;
    }

    .typebox{
        overflow-y: auto;
        word-break:normal;
        resize: none;
        width: 80%;
        height: 100%;
    }

</style>