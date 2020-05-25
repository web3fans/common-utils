/*
 * @Author: your name
 * @Date: 2020-05-25 20:45:02
 * @LastEditTime: 2020-05-25 20:45:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/common-utils/src/utils/compressCss.js
 */
// 压缩CSS样式代码
function compressCss(s) {
  //压缩代码
  s = s.replace(/\/\*(.|\n)*?\*\//g, ""); //删除注释
  s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
  s = s.replace(/\,[\s\.\#\d]*\{/g, "{"); //容错处理
  s = s.replace(/;\s*;/g, ";"); //清除连续分号
  s = s.match(/^\s*(\S+(\s+\S+)*)\s*$/); //去掉首尾空白
  return s == null ? "" : s[1];
}