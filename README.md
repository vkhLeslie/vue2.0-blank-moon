## 技术栈：

vue2.0 + vue-router + axio + less + ES6/7 + webpack + eslint + fastclick + vue-i18n

# Vue2.0-Template-MOON
> Vue2.0-Template-MOON
## Build Setup
``` bash
# install dependencies
npm install
# serve with hot reload at localhost:8080
npm run dev
# build for production with minification
npm run build
# build for production and view the bundle analyzer report
npm run build --report
# js代码检查
npm install -g eslint
npm run eslint

```
每次提交代码版本时，检查代码(了解，已添加)

npm install pre-commit --save-dev
package.json 添加 "pre-commit": [  "eslint"],

  ```

# 文件结构
├── build
│   ├── build-test.js              ────── 
│   ├── build.js              ────── 
│   ├── check-vervision.js              ────── 
│   ├── dev-client.js       ────── 
│   ├── dev-server.js             ────── 
│   ├── utils.js      ────── 
│   ├── vue-loader.conf.js             ────── 
│   ├── webpack.base.conf.js       ────── 
│   ├── webpack.dev.conf.js              ────── 
│   ├── webpack.prod.conf.js        ────── 
│   ├── webpack.test.conf.js        ────── 
├── config
│   ├── dev.env.js              ────── 开发配置
│   ├── index.js       ────── 配置
│   ├── prod.env.js              ────── 生产环境配置
│   ├── test.env.js       ────── 测试环境配置
├── src
│   ├── assets    
│   │   │── css
├── |—— components ———————— 组件
├── |—— js ———————— 公共用件
│   │   ├── service     ──────  服务
│   │   ├── directive  ———————— 全局指令
│   │   ├── filters     ──────  全局过滤器
│   │   │   
|   ├── data     ──────  数据，全局变量，常量
│   │   ├── api  ———————— 服务器地址，配置
│   │   ├── codeGlobal     ──────  前端自定义提示码
│   │   ├── config     ──────  全局配置文件
│   │   ├──  language    ──────  语言翻译
│   │   │  
├── |—— platform ———————— cordova方法
├── |—— router ———————— 路由配置
├── |—— store ———————— 状态管理
│   ├── App.vue      ────── 应用入口
├── package.json        ────── 项目所有相关依赖信
├── CubeModule.json       ────── 配置了项目的信息，版本等
├── README.md   
|—— .babelrc  ———————— 
├── .eslintignore       ────── 配置了代码检查配置
├── .eslintrc.js      ────── 配置了代码检查配置
├── .postcssrc.js      ────── 
└── index.html   ────── 
 ```  