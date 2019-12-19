<template>
  <v-card color="indigo" dark>
    <v-row v-if="auth" align="center">
      <v-col cols="3">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-navigation-drawer v-model="drawer" app>
      <h3>Drawer</h3>
    </v-navigation-drawer>
      </v-col>
      <v-col cols="3">
        <p class="mb-0">{{user.username}}</p>
      </v-col>
      <v-col>
        <v-btn @click="onLogout">Logout</v-btn>
      </v-col>
    </v-row>
    <v-row v-else align="center">
      <v-col cols="3">
        <v-btn color="primary" @click="$router.push({ name: 'login'})">Login</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    drawer: null
  }),
  methods: {
    onLogout() {
      console.log('logout hendler')
    }
  },
  computed: {
    ...mapState({ user: state => state.login.user }),
    auth: function() {
      return this.user.token ? true : false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>