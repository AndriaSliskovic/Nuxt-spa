<template>
   <v-content class="fill-height">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            
            <div class="deluxeLogo">
              <h3 class="red--text pb-12">Deluxe Brand Center</h3>
              <!--<img src="~/assets/deluxe-logo.png" alt="Deluxe Corporation">-->
            </div>
            
            <div class="welcomeText">
              <p>Welcome back, </br> Please sign in to your account.</p>
              <p><small>No account? <a href="#">Request one now</a></small></p>
            </div>

            <v-divider></v-divider>

            <v-card flat color="rgba(255, 255, 255, 0.1)" class="mt-6">
              <v-card-text>
                <v-form>
                  <v-row>
                    <v-col
                      cols="12"
                      md="6"
                    >
                      <v-text-field
                        v-model="name"
                        label="Username"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                      md="6"
                    >
                      <v-text-field
                        v-model="password"
                        label="Password"
                        type="password"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions class="mt-1">
                <v-spacer />
                <v-btn text large color="error">Recover Password</v-btn>
                <v-btn depressed large color="error" @click="login">Login to Dashboard</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
</template>

<script>
import axios from 'axios'
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