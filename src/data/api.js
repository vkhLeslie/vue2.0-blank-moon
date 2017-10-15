/**
 * @description:接口地址配置
 * @author：xingwu.chen@partner.midea.com
 * @update:2017-08-16
 * @version
 */
 const URL = {
    //本地开发的路径配置
    deBug: {
        tokenName:"mideatest_sso_token",
        baseUrl: 'http://10.16.74.212:8080/midea-annual-meeting-api/fi/',     
    },
      //测试服务器环境的路径配置
    serviceTest: {
        tokenName:"mideatest_sso_token",
        baseUrl: 'http://10.16.74.212:8080/midea-annual-meeting-api/fi/',
    },
    //服务器环境的路径配置
    service: {
        tokenName:"midea_sso_token",
        baseUrl: 'http://mm.midea.com/midea-annual-meeting-api/fi/',      
    },
    resourceUrl: {//资源路径
        playSuccess: "assets/images/scan-play/ico_zfcg.png",
        playError: "assets/images/scan-play/ico_zfsb.png",
        downloadUserAvatar: "appUser/downLoadHeadPicture"
    },
}
export default URL