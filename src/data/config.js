/**
 * @description:前端开发配置文件 可配置化项目*
 * @author：xingwu.chen@partner.midea.com
 * @update:2017-08-16
 * @version
 */
 const CONFIG = {
    serviceType: "serviceTest",//"deBug"：本地开发，"service"：在线服务，"serviceTest"：测试服务
    "transferProtocol": "https://",
    "projectName": "angular.ionic",
    "loginTime": 15 * 24 * 3600 * 1000,    //登录信息保存时长
    "playTime": 5 * 60 * 1000,    //待支付时长
    "durationDuration": 60,    //验证码时长
    "version": "1.0.1",
    "channel": 1,    //1.易打车app，前海行，3西湖中南行（微信）
    "platform": 1,    //平台号   1安卓 ，2 ios，3 微信
    "ok": 1,
    defaultServiceCity: "深圳",//默认服务城市(深圳)
    defaultServiceCityCode: "0755",//默认服务城市Code（深圳）
    defaultServiceCityId: 1,//默认服务城市id（深圳）
    defaultCityObj: {//默认城市对象(高德数据格式)
        "formatted_address": "广东省深圳市罗湖区桂园街道西湖大厦",
        "addressComponent": {
            "country": "中国",
            "province": "广东省",
            "city": "深圳市",
            "cityCode": "0755",
            "district": "罗湖区",
            "adcode": "440303",
            "township": "桂园街道",
            "towncode": "440303001000",
            "neighborhood": {},
            "building": {},
            "streetNumber": {}
        }
    },
    /************************应用主题颜色--start****************************/
    theme: [
        { name: 'green', color: '#46be8a' },
        { name: 'deepblue', color: '#115d8e' },
        { name: 'blue', color: '#4e97d9' },
        { name: 'lightblue', color: '#169e9f' },
        { name: 'yellow', color: '#f9cd48' },
        { name: 'red', color: '#f96868' },
        { name: 'purple', color: '#926dde' },
        { name: 'orange', color: '#f2a654' },
        { name: 'brown', color: '#8d6658' },
        { name: 'cyan', color: '#57c7d4' },
        { name: 'pink', color: '#f96197' },
        { name: 'teal', color: '#3aa99e' },
        { name: 'dark', color: '#393D49' },
        { name: 'grey', color: '#757575' },
        { name: 'indigo', color: '#677ae4' },
    ],
    /*************************应用主题颜色--end***************************/
    // 支持的所有多语言, 用逗号分隔, 如zh,en
    LANGUAGES: 'zh,en',
    // 默认使用的语言
    DEFAULT_LANGUAGE: 'zh',
    MODULES_PATH: '',
    PROJECT_NAME: 'angular.ionic'// 应用模块标识
}
export default CONFIG