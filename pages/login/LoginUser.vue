<template>
  <v-card>
    <v-col>
      <v-card>
        <v-form @submit.prevent="login">
          <v-text-field v-model="name" label="Name:" dense></v-text-field>
          <v-text-field v-model="password" label="Password:" dense></v-text-field>
          <v-btn type="submit" name="button" color="primary">Login</v-btn>
        </v-form>
      </v-card>
    </v-col>
    <v-col cols="6">


    </v-col>
  </v-card>
</template>

<script>

import { mapState } from 'vuex'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      token:''
    }
  },
  methods: {
    makeUserObject() {
      return {
        username: this.name,
        password: this.password
      }
    },
   login() {
      const dataObject = this.makeUserObject()
      console.log(dataObject)
     this.$store
        .dispatch('login/loginUser',dataObject)
        .then(() => {
          this.$router.push({ name: 'home'})
        })
    }
  },
    computed: {
      ...mapState({user: state => state.login.user})
      },
      watch:{
        token:function(){
          return this.user.token
        }
      }
      
}
</script>

<style scoped>
</style>
