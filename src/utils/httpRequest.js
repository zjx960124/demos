import Vue from 'vue'
import axios from 'axios'
import router from 'vue-router'

const http = axios.create({
  timeout: 30 * 1000,
  withCredentials: true,
  headers:{
    'Content-Type':'application/json; charset=utf-8'
  }
})

/*
  请求拦截
 */
http.interceptors.request.use(config => {
  // config.headers['token'] = window.localStorage.token; //token
  return config
},error => {
  return Promise.reject(error)
})

/**
 * 响应拦截
 */
http.interceptors.response.use(response => {
  if (response.data.code == 401){ //token失效
    router.push({ name: 'login' })
  }
  return response
}, error => {
  return Promise.reject(error)
})


/**
 *请求地址
 */
http.adornUrl = (actionName) => {
  return baseUrl + actionName;
  // return (process.env.NODE_ENV !== 'production' && process.env.OPEN_PROXY ? '/proxyApi/' : window.SITE_CONFIG.baseUrl) + actionName;
}

/**
 * post请求数据处理
 * @param {*} data 数据对象
 * @param {*} openDefultdata 是否开启默认数据?
 * @param {*} contentType 数据格式
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 */
http.adornData = (data = {}, openDefultdata = true, contentType = 'json') => {
  var defaults = {
    't': new Date().getTime()
  }
  // data = openDefultdata ? merge(defaults, data) : data
  return JSON.stringify(data)
}


/**
 * 请求方法
 */
http.Api = async(type, url, data) => {
  try {
    let urls = http.adornUrl(url),
      datas = http.adornData(data);
    let response = type == 'post' ? await http.post(urls, datas) : await http.get(urls, datas);
    return new Promise((resolve, reject) => {
      if (response.data.code === 0) {
        resolve(response.data)
      } else {
        resolve(response.data);
      }
    })
  }catch (err) {
    return err;
  }
}
