/*
 * @Author: coolsummer
 * @Date: 2020-01-05 19:24:38
 * @LastEditTime : 2020-03-31 23:35:47
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/apply.js
 */

export default apply = Function.prototype.bind || function (context){
    var context = context || window;
    context.fn = this;
    var result;

    if (arguments[1]) {
        resile = context.fn(...arguments[1]);
    } else {
        result = context.fn();
    }
    delete context.fn;

    return result
}