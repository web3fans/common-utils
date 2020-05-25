/*
 * @Author: your name
 * @Date: 2020-05-25 20:34:54
 * @LastEditTime: 2020-05-25 20:35:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/common-utils/src/utils/escapeHtml.js
 */
function HtmlEncode(text) {
  return text
    .replace(/&/g, "&")
    .replace(/\"/g, '"')
    .replace(/</g, "<")
    .replace(/>/g, ">");
}

// HTML 标签转义
// @param {Array.<DOMString>} templateData 字符串类型的tokens
// @param {...} ..vals 表达式占位符的运算结果tokens
//
function SaferHTML(templateData) {
  var s = templateData[0];
  for (var i = 1; i < arguments.length; i++) {
    var arg = String(arguments[i]);
    // Escape special characters in the substitution.
    s += arg
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    // Don't escape special characters in the template.
    s += templateData[i];
  }
  return s;
}
// 调用
var html = SaferHTML`<p>这是关于字符串模板的介绍</p>`;