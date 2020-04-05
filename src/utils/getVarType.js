/*
 * @Author: CoolSummer
 * @Date: 2019-11-24 22:50:18
 * @LastEditTime: 2019-11-24 22:59:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/getType.js
 */
/**
 * @description:
 * @param {type}
 * @return:
 */

export const getVarType = (target) => {
  var classToType = {};
  "Array Date RegExp Object Error".split(" ").forEach(function(item) {
    classToType["[object " + item + "]"] = item.toLowerCase();
  });

  function type(target) {
    if (target === null) {
      return String(target);
    }
    return typeof target === "object"
      ? classToType[object.prototype.toString.call(target)] || "object"
      : typeof target;
  }
  return type(target);
};
