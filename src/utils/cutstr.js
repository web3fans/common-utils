/*
 * @Author: your name
 * @Date: 2020-05-25 20:45:49
 * @LastEditTime: 2020-05-25 20:46:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/common-utils/src/utils/cutstr.js
 */
// 字符串长度截取
function cutstr(str, len) {
    var temp,
        icount = 0,
        patrn = /[^\x00-\xff]/，
        strre = "";
    for (var i = 0; i < str.length; i++) {
        if (icount < len - 1) {
            temp = str.substr(i, 1);
                if (patrn.exec(temp) == null) {
                   icount = icount + 1
            } else {
                icount = icount + 2
            }
            strre += temp
            } else {
            break;
        }
    }
    return strre + "..."
}