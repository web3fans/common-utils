/*
 * @Author: your name
 * @Date: 2020-05-25 20:39:27
 * @LastEditTime: 2020-05-25 20:42:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/common-utils/src/utils/backTop.js
 */

//  返回顶部的通用方法
function backTop(btnId) {
  var btn = document.getElementById(btnId);
  var d = document.documentElement;
  var b = document.body;
  window.onscroll = set;
  btn.style.display = "none";
  btn.onclick = function() {
    btn.style.display = "none";
    window.onscroll = null;
    this.timer = setInterval(function() {
      d.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
      b.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
      if (d.scrollTop + b.scrollTop == 0)
        clearInterval(btn.timer, (window.onscroll = set));
    }, 10);
  };
  function set() {
    btn.style.display = d.scrollTop + b.scrollTop > 100 ? "block" : "none";
  }
}
backTop("goTop");