import Axios from 'axios';

export default {
  get (url, params = {}) {
    return new Promise ((resolve, reject) => {
      Axios.get(url, {params: params}).then(res => {
        resolve(res.data);
      }, err => {
        reject(err);
      }).catch(err => {
        reject(err);
      })
    })
  },
  post (url, params = {}) {
    return new Promise((resolve, reject) => {
      Axios.post(url, params).then(res => {
         resolve(res.data);
      }, err => {
        reject(err);
      }).catch(err => {
        reject(err);
      })
    })
  },
  // 获取查询字符
  getQueryStringArgs (searchStr) {
    let qs = (searchStr.length > 0 ? searchStr.substring(1) : "");
    let args = {};
    let items = qs.length ? qs.split('&') : [];
    let item = null;
    let name = null, value = null;
    for (let i = 0; i < items.length; i++) {
      item = items[i].split('=');
      name = decodeURIComponent(item[0]);
      value = decodeURIComponent(item[1]);
      if (name.length) {
        args[name] = value;
      }
    }
    return args;
  },
  /**
   * 获取sessionStorage储存的值
   * @param {String} name 储存的键名
   * @param {Boolean} needParseJson 是否需要转成JSON对象(default: false)
   */
  getSessionStorage (name, needParseJson = false) {
    let sessionResult = sessionStorage.getItem(name);
    if (needParseJson) {
      return JSON.parse(sessionResult);
    } else {
      return sessionResult;
    }
  },
  setSessionStorage (name, data) {
    if (name && data !== null) {
      if (Object.prototype.toString.call(data) === '[object String]') {
        sessionStorage.setItem(name, data);
      } else {
        sessionStorage.setItem(name, JSON.stringify(data));
      }
    } else {
      sessionStorage.setItem(name, null);
    }
  },
  addEventHandler (elem, eventType, handler, useCapture = false) {
    if (!elem) return;
    if (elem.addEventListener) {
      elem.addEventListener(eventType, handler, useCapture);
    } else if (elem.attachEvent) {
      elem.attachEvent(`on${eventType}`, handler);
    } else {
      elem[`on${eventType}`] = handler;
    }
  },
  removeEventHandler (elem, eventType, handler, useCapture = false) {
    if (!elem) return;
    if (elem.addEventListener) {
      elem.removeEventListener(eventType, handler, useCapture);
    } else if (elem.attachEvent) {
      elem.detachEvent(`on${eventType}`, handler);
    } else {
      elem[`on${eventType}`] = null;
    }
  }
}
