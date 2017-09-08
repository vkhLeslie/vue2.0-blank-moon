import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = {
  user:{//用户信息
    uid:"",
    token:""
  }
};
export default {
  state,
  getters,
  actions,
  mutations
}
