/*
 * @Author: your name
 * @Date: 2020-05-25 20:32:38
 * @LastEditTime: 2020-05-25 20:32:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/common-utils/src/utils/on.js
 */
Element.prototype.on = Element.prototype.addEventListener;

NodeList.prototype.on = function (event, fn) {、
    []['forEach'].call(this, function (el) {
        el.on(event, fn);
    });
    return this;
};