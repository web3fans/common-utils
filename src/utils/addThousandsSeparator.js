/*
 * @Author: CoolSummer
 * @Date: 2019-11-24 21:54:41
 * @LastEditTime: 2019-11-24 22:56:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/addThousandsSeparator.js
 */

/**
 * @description:
 * @param {number}
 * @return: {string}
 */

const addThousandsSeparator = num => {
  if (!num && num !== 0) {
    return "";
  }
  return num.toString().replace(/(?<!\.\d*)\B(?=(\d{3})+(?!\d))/g, ",");
};
