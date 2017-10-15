const mutations = {
      // 获取用户数据
      'SET_UID':( state,data ) => {
        state.uid = data.uid;
       },
        'SET_SSO_TOKEN':( state,data ) => {
           state.token = data.token;
       },
}
export default mutations
