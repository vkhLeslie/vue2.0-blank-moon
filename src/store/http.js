/**
 * @description:http响应拦截器 全局处理loading加载效果
 * @author：xingwu.chen@partner.midea.com  jiajun.he@partner.midea.com
 * @update:2017-08-16
 * @version
 */

import axios from 'axios';
import CONFIG from '../data/config.js'
import URL from '../data/api.js'
import Promise from 'promise';

let tokenName = URL[CONFIG.serviceType].token;//token的key名称 测试 正式
console.warn("应用在"+CONFIG.serviceType+"模式下开发");
console.info("应用在"+CONFIG.serviceType+"模式下开发");
console.profile("应用在"+CONFIG.serviceType+"模式下开发");
console.error("应用在"+CONFIG.serviceType+"模式下开发");
console.dir("应用在"+CONFIG.serviceType+"模式下开发");
/**
 * 返回请求路径
 * @author ex_chennxw
 * @param urlTailStr 
 */
/******************************* TODO ********************************************* */
function getRequestUrl(params) {
  let self = this;
  let urlStr = "";//String
  if (params.userId && params.token) {
    //未登录则没有accessServerUrl
    urlStr = URL[CONFIG.serviceType].baseUrl + urlTailStr + "?userId=" + userId + "&" + URL[CONFIG.serviceType].token + "=" + params.token;
  } else {
    urlStr = URL[CONFIG.serviceType].baseUrl + params;
    console.log(urlStr);
    console.log("urlStr****************************");
  }
  return urlStr;
}
/******************************* TODO ********************************************* */
//'https://newimtest.midea.com/mas-api/restful/acWorkingHoursFill/pjts/searchByUser?token=T2344189819503616'
function request(url,params, option) {
   params = params || {};
   option = option || {};
  console.log(params);//测试
  console.log(option);//测试
  console.log("*****************************");//测试
  let config = {};
  option.method = $common.uppercase(option.method);//请求方式全部转换为大写 "POST" "GET" "JSONP"
  let logError = function (msg, status, headers, config_) {
    try {
      var err = {};
      err.key = key;
      err.params = params;
      err.msg = msg;
      err.status = status;
      err.headers = headers;
      err.config = config_;
      console.log("_error", err);
      return err;
    } catch (e) {
      console.log("_error", e);
      return e
    }
  };
  let extend = function (dst) {
    for (let i = 1, ii = arguments.length; i < ii; i++) {
      let obj = arguments[i];
      if (obj) {
        let keys = Object.keys(obj);
        for (let j = 0, jj = keys.length; j < jj; j++) {
          let key = keys[j];
          dst[key] = obj[key];
        }
      }
    }
    return dst;
  };
  let post = function (config) {
   
    return new Promise(function (resolve, reject) {
      extend(config, {
        method: 'post'
      });
      axios(config).then(rep => {
        resolve(rep);
      }, error => {
        reject(error);
      });
    });
  };
  let get = function (config) {
    return new Promise(function (resolve, reject) {
      extend(config, {
        method: 'GET'
      });
      axios(config).then(rep => {
        resolve(rep);
      }, error => {
        reject(error);
      });
    });
  };
  let jsonp = function (config) {
    return new Promise(function (resolve, reject) {
      let p = config.params;
      if (config.hasOwnProperty('customCallback')) {
        p[config.customCallback] = 'JSON_CALLBACK';
        delete config.customCallback;
      } else {
        p['jsonpcallback'] = 'JSON_CALLBACK';
      }
      extend(config, {
        method: 'JSONP'
      });
      axios(config).then(rep => {
        resolve(rep);
      }, error => {
        reject(error);
      });
    });
  }
  config = extend({
    method: 'JSONP'
  }, option);
  switch (option.method) {
    case 'POST_FORMDATA':
      let fd = new FormData();
      for (let i in params) {
        fd.append(i, params[i]);
      }
      reqData = {
        url: url,
        headers: {
          'Content-Type': undefined
        },
        data: fd
      };
      config = extend(config, reqData);
      return post(config).then(res => {
        return res.data;
      });
    case 'POST_JSON':
    case 'POST':
      if (option.method === 'POST_JSON') {
        params = JSON.stringify(params);
      }
      let reqData = {
        url: url,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data: params
      };
      config = extend(config, reqData);
      return post(config).then(res => {
        return res.data;
      });
    case 'GET':
      reqData = {
        url:  url,
        headers: {
          'Content-Type': 'application/json',
        },
        params: params
      };
      config = extend(config, reqData);
      return get(config).then(res => {
        return res.data;
      });
    case 'JSONP':
      extend(config, {
        customCallback: 'callback',
      });
      return jsonp(config).then(res => {
        return res.data;
      });
    default:
    break;
  }
}
function resolve (rep, clback) {
	var data = rep.data;
	if (rep.status == 200) {
		clback && clback(data);
	}
	return data;
}
module.exports = {
  getRequestUrl,//拼接url
  resolve,//处理返回
  request,//请求
};