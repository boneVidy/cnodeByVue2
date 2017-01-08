// import {URL} from '../config.js'
let httpPlg = {
  install (Vue) {
    Vue.prototype.httpGet = (api, params) => {
      // debugger
      // console.log(this.$http)
      // return this.$http.get(`${URL}/${api}`, {params: params})
    }
    Vue.prototype.httpPost = (api, params) => {
      // return this.$http.post(`${URL}/${api}`, {params: params})
    }
  }
}
export default httpPlg
