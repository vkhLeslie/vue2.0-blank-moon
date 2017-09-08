
//重要的原则:mutation 必须是同步函数

const mutations = {

    // 获取用户数据
    'SET_UID':( state,list ) => {
     state.user.uid = state.user.uid;
    },
     'SET_SSO_TOKEN':( state,list ) => {
        state.user.token = state.user.token;
    },
      
};
export default mutations;