/*
 * @Author: coolsummer
 * @Date: 2019-11-30 23:08:59
 * @LastEditTime: 2020-01-05 19:44:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/bind.js
 */
//bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，
//而其余参数将作为新函数的参数，供调用时使用。

export default bind = Function.prototype.bind || function (context) {
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable")
    }

    var self = this;
    var args = [...arguments].slice(1);

    return function F() {
        if (self instanceof F) {
            return new self(...args, ...arguments);
        }
        return new self.apply(context, args.concat(...arguments));
    }
};

