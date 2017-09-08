
# Vue2.0-Blank-Template
> A vue.js project
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
│   ├── data  ———————— 数据，全局变量，常量
├── |—— platform ———————— 底座方法
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
 