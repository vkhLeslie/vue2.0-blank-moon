import { api } from './api';
import { request,getRequestUrl,resolve} from '../http';
import axios from 'axios';

//Action 通常是异步的
const actions = {
    //获取用户信息 (action实例)
    GetUser ({ commit, state, rootState}, param) {
      let  url = getRequestUrl(api.getUser);
      let params = {
        uid: "ex_chenxw",
        token: "T2344189819503616",
        data: {
            uid:param.uid,
            password:param.password
        },
      };
      return request(url,params,{method: 'post'})
            .then((rep) => {
                return resolve(rep);
            }).catch((err) =>{//处理错误回调
                console.log(err);
            });
    },
};
export default actions;
