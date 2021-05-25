<!--

usage: <demo-thing title = "My Game" name = "Nacho"></demo-thing>

-->
<template>
    <div class="wrapper">
        <h3>{{title}} - {{name}}</h3>
        <span class = "box-area">{{ score }}</span>
        <span class="label">{{ someMethod() }}</span>
    </div>
</template>

<script>
export default {
    name: "demothing",
    props:{
        title: string,
        name: string
    },
    data: ()=>{
        return {
            score: 0,
        }
    },
    methods: {
        someMethod(){
            return 5;
        }
    },
    computed: {
        //Optional methods
        iGetCalculated(value){
            //Do math to add the score
            return value;
        }
    },
    components: {
    }
}
</script>

<style scoped>
.wrapper{
    display:flex;
}
</style>