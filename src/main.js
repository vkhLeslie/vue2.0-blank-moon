// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import App from './App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router.conf.js'
import store from './store'
import httpInterceptor from './store/httpInterceptor.js'//http拦截器
import FastClick from 'fastclick'//解决300ms点击延迟
import VueI18n from 'vue-i18n' //国际化语言
import * as filters from './js/filters' // 全局filter
import './js/directive' // 全局指令
import language_EN from './data/language_EN.js' //国际化语言 （英文）
import language_CN from './data/language_CN.js' //国际化语言 （中文）
import language_TW from './data/language_TW.js' //国际化语言 （繁体）
//提示组件，消息框
import 'vue2-toast/lib/toast.css';//参考使用 https://github.com/vkhLeslie/vue-toast
import Toast from 'vue2-toast';


Vue.use(VueRouter);
Vue.use(VueI18n);//国际化语言
Vue.use(Toast, {//提示组件，消息框
  defaultType: 'center',//Toast 的位置. | String | 默认: 'bottom' | 可选值 'top, center,bottom'
  duration: 3000,//timeout时间 
  wordWrap: true, //是否自动换行. | Boolean | 默认: false
  width: '150px'//提示框大小 Toast 的宽度. | String | 默认: 'auto'
});

const messages = {
  en: {
    _language: language_EN//国际化语言 （英文）
  },
  zh: {
    _language:  language_CN//国际化语言 （中文）
  },
  tw: {
    _language:  language_TW//国际化语言 （繁体）
  }
}

//国际化语言
const i18n = new VueI18n({
  locale: "zh" ,//CONFIG.lang,  // 语言标识 默认中文
  messages
})


// 注册全局的过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

//loading效果组件--start
Vue.prototype.showLoading = function (str) {
      loading.show(str)
};
Vue.prototype.hideLoading = function (str) {
      loading.complete();
};
Vue.prototype.successLoading = function (str) {
      loading.success(str);
};
Vue.prototype.failLoading = function (str) {
      loading.fail(str);
};
//loading效果组件--end

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
};
const router = window.router = new VueRouter({
  scrollBehavior,
  routes
});


/* eslint-disable no-new */
new Vue({
  router,
  store,
  i18n,//国际化语言
  render: h => h(App),
  data: {
    eventHub: new Vue()
  }
}).$mount('#app');
