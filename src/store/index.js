import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations';
// import actions from './actions'
import getters from './getters'
//引入模块
import user from './user';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,//用户信息
  },
  state: {
    token: true,
    ssoToken: '',
    /*tenantId: '', // 租户ID
    mipId : '',
    deviceId  : '', // 设备id  手机的唯一标示*/
    mipId : '',
    deviceId  : '', // 设备id  手机的唯一标示
    deviceInfo: {},
    user:{//用户信息
      uid:"",
      token:""
    }
    // toast: {//提示消息
    //   isShow: false,
    //   config: {
    //     msg: '',
    //     width: '7.6em',
    //     time: 2000
    //   }
    // }
  },
  // actions,
  getters,
  mutations
});
