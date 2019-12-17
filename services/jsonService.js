import axios from 'axios'
import NProgress from 'nprogress'

const BASE_URL=`http://localhost:3000`

//Povezivanje preko json-servera
const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout:10000
})

apiClient.interceptors.request.use(config => { // Called on request
  NProgress.start()
  return config
})

apiClient.interceptors.response.use(response => { // Called on response
  NProgress.done()
  return response
})

export default {
  getAlllogs(){
    console.log("servis json")
      const routeUrl="logs"
      return apiClient.get(routeUrl)
  },
}