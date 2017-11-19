/**
 * @description:前端开发配置文件 可配置化项目*
 * @author：912751280@qq.com
 * @update:2017-08-16
 * @version
 */
 const CONFIG = {
   serviceType: 'deBug', // "deBug"：本地开发，"service"：在线服务，"serviceTest"：测试服务
   'transferProtocol': 'https://',
   'version': '1.0.1',
   'ok': 1,
    // 支持的所有多语言, 用逗号分隔, 如zh,en
   LANGUAGES: 'zh,en',
    // 默认使用的语言
   DEFAULT_LANGUAGE: 'zh',
   MODULES_PATH: '',
   PROJECT_NAME: 'angular.ionic'// 应用模块标识
 }
 export default CONFIG
