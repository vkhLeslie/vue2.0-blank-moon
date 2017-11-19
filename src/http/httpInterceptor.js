/**
 * @description:http响应拦截器 全局处理loading加载效果
 * @author：912751280@qq.com
 * @update:2017-08-16
 * @version
 */
import axios from 'axios'
import Vue from 'vue'
import Promise from 'promise'
import store from '../store'
// 超时时间
axios.defaults.timeout = 5000
// http请求拦截器
axios.interceptors.request.use(config => { // 请求前的处理
    //  Loading方法
  console.log('请求前...', config)
    // 全局配置 让每个请求携带token--key 请根据实际项目、实际情况自行修改
  if (store.getters.token) {
    config.headers['X-AUTH-Token'] = $common.getStore('SET_SSO_TOKEN')
        // 全局配置 请求填上防止跨域请求伪造的http头X-XSRF-TOKEN
        // config.headers['X-XSRF-TOKEN'] = $common.getStore("SET_SSO_TOKEN")
  }
    // 全局配置 请求填上防止跨域请求伪造的http头X-XSRF-TOKEN
    // if(config.url.indexOf('SAME_DOMAIN_API_URL') > -1) {
    //     config.headers['X-XSRF-TOKEN'] = $common.getStore("SET_SSO_TOKEN")或$cookies.get('XSRF-TOKEN');
    //   }
  return config
}, error => {
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => { // 请求后的处理
    /**
* 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
* 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
*/
    //  const res = response.data;
    //     if (res.code !== 20000) {
    //       Message({
    //         message: res.message,
    //         type: 'error',
    //         duration: 5 * 1000
    //       });
    //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
    //           confirmButtonText: '重新登录',
    //           cancelButtonText: '取消',
    //           type: 'warning'
    //         }).then(() => {
    //           store.dispatch('FedLogOut').then(() => {
    //             location.reload();// 为了重新实例化vue-router对象 避免bug
    //           });
    //         })
    //       }
    //       return Promise.reject('error');
    //     } else {
    //       return response.data;
    //     }
  console.log('请求成功后...', data)
  return data
}, error => {
  return Promise.reject(error)
})

export default axios
