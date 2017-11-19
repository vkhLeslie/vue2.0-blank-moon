/**
 * @description:接口地址配置
 * @author：912751280@qq.com
 * @update:2017-08-16
 * @version
 */
 const URL = {
    // 本地开发的路径配置
   deBug: {
     baseUrl: 'http://127.0.0.1:8080'
   },
      // 测试服务器环境的路径配置
   serviceTest: {
     baseUrl: 'http://127.0.0.1:8080'
   },
    // 服务器环境的路径配置
   service: {
     baseUrl: 'http://127.0.0.1:8080'
   },
   resourceUrl: {// 资源路径
     playSuccess: 'assets/images/scan-play/ico_zfcg.png',
     playError: 'assets/images/scan-play/ico_zfsb.png',
     downloadUserAvatar: 'appUser/downLoadHeadPicture'
   }
 }
 export default URL
