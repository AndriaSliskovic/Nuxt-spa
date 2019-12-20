<template>
  <div>
    <use-case-table></use-case-table>
  </div>
</template>

<script>
import UseCaseTable from '~/components/tables/UseCaseTable'
import JsonService from '~/services/jsonService'
import { mapState } from 'vuex'

export default {
//   data() {
//     return {
//       items: []
//     }
//   },
  created() {
    // JsonService.getAlllogs()
    // .then((res)=>this.items=res.data)
    // this.fetch()
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('logs/loadLogs')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch logs at this time'
      })
    }
  },
  components: {
    UseCaseTable
  },
//     computed: {
//     ...mapState({
//       items: state => state.logs.logs
//     })
//   }
}
</script>

<style lang="scss" scoped>
</style>