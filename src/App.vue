<style lang="less">
  @import "~assets/css/base.less";
</style>
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  /* global $common */
  import { mapState, mapGetters } from 'vuex'
import platform from './platform'
  import jsonp from 'jsonp'
  export default {
    components: {},
    computed: mapState({
      uid: state => state.user.uid,
      token: state => state.user.token
    }),
    mounted () {
      let reqData = {
        uid: 'ex_chenxw',
        password: '1111111'
      }
      // jsonp实例
      // jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=dsg', null, function (err, data) {
      //   if (err) {
      //     console.error(err.message);
      //   } else {
      //     console.log(data);
      //     return data;
      //   }
      // });
      // this.$store.dispatch('GetUser',reqData).then((res)=> {
      //               if(res){
      //               console.log(res);//测试
      //               console.log("**********************************************");
      //               }
      //     });
      document.addEventListener('deviceready', function () {
        platform.changeColor([255, 255, 255, 1])
		platform.setBounces(0);
        platform.getUser().then(function (data) {
              // 获取用户信息
              // this.$store.commit('SET_UID',data.uid);
              // this.$store.commit('SET_SSO_TOKEN',data.ssoToken);
              // $common.setStore('SET_UID',response.data.uid);
              // $common.setStore('SET_SSO_TOKEN',response.data.token);
        }, function (data) {
        })
      }, false)
  },
    methods: {
    }
  }
</script>


