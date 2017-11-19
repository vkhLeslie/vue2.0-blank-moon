/**
 * @description:全局指令
 * @author：912751280@qq.com
 * @update:2017-08-16
 * @version
 */

import Vue from 'vue';
// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
      // 聚焦元素
      el.focus()
    }
  })
  Vue.directive('hello', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
     console.log("我是hello指令");
    }
  })