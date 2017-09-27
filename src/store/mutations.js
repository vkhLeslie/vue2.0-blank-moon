const mutations = {
      // 获取用户数据
      'SET_UID':( state,uid ) => {
        state.uid = uid;
       },
        'SET_SSO_TOKEN':( state,token ) => {
           state.token = token;
       },
}
export default mutations
