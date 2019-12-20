<template>
  <v-card>
    <v-card-title>
      <v-col>Use Cases logs</v-col>

      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-briefcase-search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="items" :search="search" :item-key="items.id">
      <template v-slot:item.select="{item}">
        <v-icon large color="primary" @click="onselectItem(item.guid)">mdi-flag</v-icon>
      </template>
      <!-- Dialog data with activator -->
      <template v-slot:item.data="{item}">
        <v-dialog v-model="dialog.data" persistent max-width="400px" :retain-focus="false">
          <template v-slot:activator="{ on }">
            <v-icon large color="primary" v-on="on">mdi-database-search</v-icon>
          </template>
          <BaseDialogConfirmation 
          @close="()=>dialog.data=false" 
          @submit="onSubmitDataHandler">
            <template v-slot:header></template>
            <template v-slot:body></template>
          </BaseDialogConfirmation>
        </v-dialog>
      </template>

      <!-- Dialog actor with activator -->
      <template v-slot:item.actor="{item}">
        <v-dialog v-model="dialog.actor" persistent max-width="400px" :retain-focus="false">
          <template v-slot:activator="{ on }">
            <v-icon large color="primary" v-on="on">mdi-account-search</v-icon>
          </template>
          <BaseDialogConfirmation 
          @close="()=>dialog.actor=false" 
          @submit="onSubmitActorHandler">
            <template v-slot:header></template>
            <template v-slot:body></template>
          </BaseDialogConfirmation>
        </v-dialog>
      </template>

      <!-- Dialog subscribers with activator -->
      <template v-slot:item.subscribers="{item}">
        <v-dialog v-model="dialog.subscribers" persistent max-width="400px" :retain-focus="false">
          <template v-slot:activator="{ on }">
            <v-icon large color="primary" v-on="on">mdi-account-multiple</v-icon>
          </template>
          <BaseDialogConfirmation
            @close="()=>dialog.subscribers=false"
            @submit="onSubmitSubscribersHandler">
            <template v-slot:header></template>
            <template v-slot:body></template>
          </BaseDialogConfirmation>
        </v-dialog>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      search: '',
      headers: [
        { text: 'Select', value: 'select', align: 'start' },        
        { text: 'Name', value: 'name', align: 'start' },
        { text: 'Data', value: 'data' },
        { text: 'Actor', value: 'actor' },
        { text: 'ExecutionTime', value: 'executionTime' },
        { text: 'Subscribers', value: 'subscribers' },
        { text: 'Status', value: 'status' },
        { text: 'FailedReason', value: 'failedReason' },
        { text: 'Guid', value: 'guid' },
        { text: 'ExercutionDate', value: 'exercutionDate' }
      ],
      dialog: {
        data: false,
        actor: false,
        subscribers: false
      }
    }
  },
  // props: {
  //   items: {
  //     type: Array,
  //     default: []
  //   }
  // },
  methods: {
    onSubmitDataHandler() {
      console.log('submit data table')
    },
    onSubmitActorHandler() {
      console.log('submit actor handler')
    },
    onSubmitSubscribersHandler() {
      console.log('submit subscribers')
    },
    onselectItem(key){
      console.log("selected item",key)
      this.$store.dispatch('logs/setSelectedLog')
      //this.$router.push({ name: 'useCaseLog-id', params: { id: key } })

    }
  },
      computed: {
    ...mapState({
      items: state => state.logs.logs
    })
  }
}
</script>

<style lang="scss" scoped>
</style>