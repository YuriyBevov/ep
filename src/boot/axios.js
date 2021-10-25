import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

console.log(axios.defaults.headers)

const axiosInstance = axios.create({
  paramsSerializer: params => {
    return qs.stringify(params, { arrayFormat: 'repeat' })
  },

  baseURL: 'http://5.23.54.158/'
  //baseURL: 'http://127.0.0.1:3000'
})

const setErrorInterceptor = (errorFunction) => {
  axiosInstance.interceptors.response.use((response) => {
    return response
  }, (error) => {
    if (!error.response) {
      errorFunction()
    }
    return Promise.reject(error)
  })
}

const setBaseURL = (baseURL) => {
  axiosInstance.defaults.baseURL = baseURL
}

Vue.prototype.$axios = axiosInstance

export { axiosInstance, setErrorInterceptor, setBaseURL }
