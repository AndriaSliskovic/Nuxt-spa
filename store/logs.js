import JsonService from '~/services/jsonService'

export const state = () => ({
    logs: [],
    log:{}
})

export const getters = {}

export const mutations = {
    'ALL_LOGS'(state, payload) {
        console.log("mutator user svih logova", payload)
        state.logs = payload
    },
    'SELECTED_LOG'(state,payload){
        console.log("mutator selektovanog loga")
        state.log=payload
    }
}

export const actions = {
    loadLogs({ commit }) {
        JsonService.getAlllogs()
            .then((response) => commit('ALL_LOGS', response.data))
            .catch(error => {
                return console.log("error message", error)
            })
    },
    setSelectedLog({commit},key){
        const logs=this.state.logs.logs
        console.log(logs,key)
        const item=logs.filter((e)=>e.guid=key)
        console.log("action filter item",item)

        // commit('SELECTED_LOG',key)
    }

}