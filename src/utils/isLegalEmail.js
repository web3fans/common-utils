/*
 * @Author: CoolSummer
 * @Date: 2019-11-24 23:09:01
 * @LastEditTime : 2020-04-01 00:33:35
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/isLegalEmail.js
 */
/**
 * @description: 
 * @param {type} 
 * @return: 
 */ 
export const isLegalEmail = (str) => {
    let regex = /[a-zA-Z]|[0-9](\w\-)+@([0-9a-zA-Z]+\.([a-zA-Z]{2,4})$)/;
  return str.test(regex);
};