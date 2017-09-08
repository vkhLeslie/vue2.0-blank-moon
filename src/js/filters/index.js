/**
 * @description:全局过滤器 
 * @author：xingwu.chen@partner.midea.com
 * @update:2017-08-16
 * @version
 */
 import dateService from '../service/date.js';
 import _dict from '../../data/dictGlobal.js'

let dateStr = dateService.addDate("", 2);//测试
console.log(dateStr);
console.log("**********************************");


/**
 * @desc 时间格式：例如多少分钟前
 * @param {*} time, option
 */
export function formatTime(time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) { // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  }
}

/**
 * @desc 数字 格式化
 * @param {*} num, digits
 */
export function nFormatter(num, digits) {
  const si = [
    { value: 1E18, symbol: 'E' },
    { value: 1E15, symbol: 'P' },
    { value: 1E12, symbol: 'T' },
    { value: 1E9, symbol: 'G' },
    { value: 1E6, symbol: 'M' },
    { value: 1E3, symbol: 'k' }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}
/**
 * @desc 创建一个标签div,并显示内容
 * @param {*} val 
 */
export function html2Text(val) {
  const div = document.createElement('div')
  div.innerHTML = val
  return div.textContent || div.innerText
}
/**
 * @desc 数字千分位显示
 * @param {*} num 
 */
export function toThousandslsFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

/**
 * @desc 过滤字典内容
 * @param {*} num 
 */
export function dictFilter(input, type1) {
  try {
    console.log("我是过滤器");
    if (!input && input !== 0) {
      return '';
    }
    if (!type1) {
      return '';
    }
    var resultStr = "";
    var prefix = "";
    var arr = [];
    if (isNaN(input)) {
      arr = input.split(",");
    } else {
      arr.push(input + "");
    }
    for (var k = 0; k < arr.length; k++) {
      if (arr[k] || arr[k] === 0) {
        for (var temp in _dict) {
          if (temp == type1) {//todo
            var _array = _dict[temp];// 到此，是一个数组
            for (var j = 0; j < _array.length; j++) {
              var label_value = _array[j]; // 此对象必须是{"label":"_label","value":"_value"}
              var tmpArr = arr[k].split("-");
              if (!tmpArr[0] && tmpArr[0] !== 0) {
                tmpArr[0] = arr[k];
              }
              if (tmpArr[0] == label_value.value &&
                label_value.label) {
                resultStr += prefix + label_value.label;
                if (prefix == "")
                  prefix = ",";
              }
            }
          }
        }
      }
    }
    return resultStr;
  }
  catch (e) {
    console.warn("获取 label:" + type1 + " 失败...");
    console.error(e);
  }
  return '';
}



