import axios from 'axios'
import router from '../router.js'
// import { Loading, Message } from 'element-ui'
// url
axios.defaults.baseURL = 'http://fy.cms.com/api' // 'https://prezujuan-api.kaoti100.com/api'
// Accept
// axios.defaults.headers.common['Authorization'] = 'Bearer xxxx...'

// 超时时间
axios.defaults.timeout = 5000

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    // console.log(config)
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    if (store.state.login.access_token) {
      config.headers.Authorization = store.state.login.token_type + ' ' + store.state.login.access_token
      // 判断接口是否需要传token,后台设置接口分类，如/api1/xxx, /api2/xxx 一类不需要token，一类需要token, 前台则匹配 /api1 或 /api2  需要token.
    }
    return config
  },
  function (error) {
    console.log(error)
    return Promise.reject(error)
  }
)
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // console.log('请求成功返回：', response)
  return response
},
function (error) {
  // console.log('请求失败返回：', error.response)
  let data = error.response.data
  console.log(data)
})
