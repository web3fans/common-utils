/*
 * @Author: CoolSummer
 * @Date: 2019-11-24 22:52:53
 * @LastEditTime : 2020-04-01 00:33:16
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/uuid.js
 */
/**
 * @description: 
 * @param {type} 
 * @return: 
 */ 
 export const getUUID = (len, radix) => {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
    ""
  );
  var uuid = [],
    i;
  radix = radix || chars.length;

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
  } else {
    // rfc4122, version 4 form
    var r;

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
    uuid[14] = "4";

    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16);
        uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uuid.join("");
};
