/*
 * @Author: your name
 * @Date: 2019-11-24 23:07:38
 * @LastEditTime : 2020-04-01 00:33:28
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/ischinese.js
 */
/**
 * @description: 
 * @param {type} 
 * @return: 
 */ 
export const isChinese = (str) => {
  return !!/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi.exec(str);
};
