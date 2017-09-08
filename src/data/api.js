/**
 * @description:接口地址配置
 * @author：xingwu.chen@partner.midea.com
 * @update:2017-08-16
 * @version
 */
 const URL = {
    //本地开发的路径配置
    deBug: {
        token:"test_sso_token",
        baseUrl: 'http://127.0.0.1:8080/',     
    },
      //测试服务器环境的路径配置
    serviceTest: {
        token:"test_sso_token",
        baseUrl: 'http://127.0.0.1:8080/',
    },
    //服务器环境的路径配置
    service: {
        token:"sso_token",
        baseUrl: 'http://127.0.0.1:8080/',      
    },
    //路由名称
    stateProvider: {
        login: {
            "name": "Login",
            "url": "#/login"
        },
        home: {
            "name": "Home",
            "url": "#/home"
        }
    },
    //http请求方式
    httpRequestMethod: {
        post: "post",
        get: "get",
    },
    suffix: {
        logout: "logout",
        select: "select",
        update: "update",
        save: "save",
        delete: "delete",
        detail: "detail",
    },
    requestUrl: {
        common: {//基础请求
            heartbeat: "heartbeat",//无需登录
            accessServer: "getAccessServer",
            login: "login", //登录
            logout: "login",//退出登录
            smsVerify: "verifyCode/smsVerify",    //短信验证码
            voiceVerify: "verifyCode/voiceVerify",    //语言验证码
            getOpenid: "scanQrCode/getOpenid"
        },
        user: {
            getUserInfo: "/user"
        },
        webchat: {
            access_token: "https://api.weixin.qq.com/sns/oauth2/access_token"
        },
    },
    templateUrl: {//模板路径
    },
    resourceUrl: {//资源路径
        playSuccess: "assets/images/scan-play/ico_zfcg.png",
        playError: "assets/images/scan-play/ico_zfsb.png",
        downloadUserAvatar: "appUser/downLoadHeadPicture"
    },
    op: {
        select: "select",
        count: "selectCount",       //列表总条数
        update: "update",
        save: "save",
        delete: "delete",
        login: "/login", //登录
    }
}
export default URL