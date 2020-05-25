/*
 * @Author: your name
 * @Date: 2020-05-25 20:47:27
 * @LastEditTime: 2020-05-25 20:47:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/common-utils/src/utils/deleteEvent.js
 */
//  跨浏览器删除事件
function delEvt(obj, evt, fn) {
  if (!obj) {
    return;
  }
  if (obj.addEventListener) {
    obj.addEventListener(evt, fn, false);
  } else if (oTarget.attachEvent) {
    obj.attachEvent("on" + evt, fn);
  } else {
    obj["on" + evt] = fn;
  }
}