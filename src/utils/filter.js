/**
 * createTime:2019.10.20
 * author:jx.zhang
 * description:过滤函数
 */

import Vue from 'vue'

//手机掩码
Vue.filter('phoneMask', function (value) {
    if(value){
      return value.substring(0, 3) + '****' + value.substring(7, 11)
    }
    return value
})

//空值置为0
Vue.filter('nulToZero', function (val) {
    if(!val){
      return 0
    }
    return val
})
