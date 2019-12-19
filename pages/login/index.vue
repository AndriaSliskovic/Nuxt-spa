<template>
    <v-layout row>
    <v-flex xs12 sm4 md4 class="full-height">
      <Carousel></Carousel>
    </v-flex>
    <v-flex xs12 sm8 md8 class="full-height" >
            <Login />
      <!-- <Login /> -->
    </v-flex>
  </v-layout>
</template>

<script>
import LoginUser from './LoginUser'
import Carousel from './components/Carousel'
import Login from './components/Login'

export default {

  components:{
    LoginUser,
    Carousel,
    Login
  }
}
</script>

<style lang="scss" scoped>

</style>