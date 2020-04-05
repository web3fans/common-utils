/*
 * @Author: CoolSummer
 * @Date: 2019-11-24 22:33:14
 * @LastEditTime : 2020-04-01 00:33:08
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/getUrlParam.js
 */
/**
 * @description:
 * @param {type}
 * @return:
 */

/* 获取URL查询参数 */
export const getQueryString = param => {
  var sQuery = window.location.search;
  if (sQuery && sQuery.length > 0) {
    var arr = sQuery.substr(1).split("&");
    for (var i in arr) {
      var pair = arr[i].split("=");
      if (param && param.toLowerCase() === pair[0].toLowerCase() && pair[1]) {
        return pair[1];
      }
    }
  }
  return "";
};
