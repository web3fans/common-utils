/*
 * @Author: your name
 * @Date: 2020-05-25 20:37:30
 * @LastEditTime: 2020-05-25 20:42:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/common-utils/src/utils/extractAllUrl.js
 */
//  提取页面代码中所有网址
var aa = document.documentElement.outerHTML
  .match(
    /(url\(|src=|href=)[\"\']*([^\"\'\(\)\<\>\[\] ]+)[\"\'\)]*|(http:\/\/[\w\-\.]+[^\"\'\(\)\<\>\[\] ]+)/gi
  )
  .join("\r\n")
  .replace(/^(src=|href=|url\()[\"\']*|[\"\'\>\) ]*$/gim, "");
alert(aa);