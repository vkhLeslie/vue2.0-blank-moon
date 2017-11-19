import { api } from './api'
import { request, getRequestUrl} from '../../http/http.js'
import axios from 'axios'

// Action 通常是异步的
const actions = {
    // 获取用户信息 (action实例)
  GetUser ({ commit, state, rootState}, param) {
    let url = getRequestUrl(api.getUser)// "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";//
    let params = {
      wd: 'vue jsonp实例'
        // uid: "ex_chenxw",
        // token: "T2344189819503616",
        // data: {
        //     uid:param.uid,
        //     password:param.password
        // },
    }
    return request(url, params, {method: 'jsonp'})
            .then((rep) => {
              return rep
            }).catch((err) => { // 处理错误回调
              console.log(err)
            })
  }
}
export default actions
