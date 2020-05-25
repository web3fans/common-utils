/*
 * @Author: your name
 * @Date: 2020-05-25 20:33:03
 * @LastEditTime: 2020-05-25 20:33:29
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /work/common-utils/src/utils/trigger.js
 */
Element.prototype.trigger = function(type, data) {
  var event = document.createEvent("HTMLEvents");
  event.initEvent(type, true, true);
  event.data = data || {};
  event.eventName = type;
  event.target = this;
  this.dispatchEvent(event);
  return this;
};

NodeList.prototype.trigger = function(event) {
  []["forEach"].call(this, function(el) {
    el["trigger"](event);
  });
  return this;
};