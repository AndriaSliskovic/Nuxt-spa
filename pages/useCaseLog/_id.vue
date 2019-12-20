<template>
    <div>
        <h3>login br : {{this.$route.params.id}}</h3>
        <h3>Log objekat</h3>
        <p>{{logObject}}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                logObject:{}  
            }
        },

    }
</script>

<style lang="scss" scoped>

</style>