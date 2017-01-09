import config from '../config.js'
const URL = config.URL
let VueObj = null
let httpPlg = {
  install (Vue) {
    VueObj = Vue
    VueObj._http = getHttpMethod(VueObj)
    Object.defineProperties(Vue.prototype, {
      _http: {
        get: function () {
          return getHttpMethod(this)
        }
      }
    })
  }
}
function getRequestUrl (URL, api) {
  return `${URL}/${api}`
}
function getHttpMethod (obj) {
  return {
    get: function (api, options, isShowLoading) {
      if (!api) {
        return Promise.reject('this is empty url')
      }
      if (obj) {
        return obj.$http.get(getRequestUrl(URL, api), options)
                  .then(
                    (resp) => {
                      if (!resp.data.success) {
                        return Promise.reject('err')
                      }

                      return Promise.resolve(resp.data.data)
                    },
                    (err) => {
                      return Promise.reject(err)
                    }
                  ).catch(err => {
                    console.log(err)
                  }).finally(function () {
                  })
      } else {
        return VueObj.http.get(getRequestUrl(URL, api), options)
      }
    },
    post: function (api, options, isShowLoading) {
      if (!api) {
        return Promise.reject('this is empty api')
      }
      if (obj) {
        return obj.$http.post(getRequestUrl(URL, api), options)
                  .then(
                    (resp) => {
                      if (!resp.data.success) {
                        return Promise.reject('err')
                      }

                      return Promise.resolve(resp.data.data)
                    },
                    (err) => {
                      return Promise.reject(err)
                    }
                  ).catch(err => {
                    console.log(err)
                  }).finally(function () {
                  })
      } else {
        return VueObj.http.post(getRequestUrl(URL, api), options)
      }
    }
  }
}
export default httpPlg
