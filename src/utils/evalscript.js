/*
 * @Author: your name
 * @Date: 2020-05-25 20:48:09
 * @LastEditTime: 2020-05-25 20:48:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/common-utils/src/utils/evalscript.js
 */
//  返回脚本内容
function evalscript(s) {
  if (s.indexOf("<script") == -1) return s;
  var p = /<script[^\>]*?>([^\x00]*?)<\/script>/gi;
  var arr = [];
  while ((arr = p.exec(s))) {
    var p1 = /<script[^\>]*?src=\"([^\>]*?)\"[^\>]*?(reload=\"1\")?(?:charset=\"([\w\-]+?)\")?><\/script>/i;
    var arr1 = [];
    arr1 = p1.exec(arr[0]);
    if (arr1) {
      appendscript(arr1[1], "", arr1[2], arr1[3]);
    } else {
      p1 = /<script(.*?)>([^\x00]+?)<\/script>/i;
      arr1 = p1.exec(arr[0]);
      appendscript("", arr1[2], arr1[1].indexOf("reload=") != -1);
    }
  }
  return s;
}