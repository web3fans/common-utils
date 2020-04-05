/*
 * @Author: your name
 * @Date: 2019-12-01 14:20:13
 * @LastEditTime : 2020-04-01 00:27:36
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/common-utils/src/utils/instance.js
 */
export default function myinstanceof (left, right){
    let prototype = right.prototype;
    left = left._proto_;

    while(true){
        if(left === null){
            return false;
        }

        if(left === portotype){
            return true;
        }

        left = left.prototype;
    }
}