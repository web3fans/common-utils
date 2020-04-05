/*
 * @Author: your name
 * @Date: 2020-03-15 23:38:34
 * @LastEditTime : 2020-04-01 21:06:07
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/common-utils/src/utils/deepClone.js
 */
///JSON.parse(JSON.stringify(obj))缺点：
// 1.忽略undefined
// 2.不能序列化函数
// 3.不能解决循环引用的对象
// JSON.parse(JSON.stringify(obj))
///loadsh cloneDeep,在webpack中需要按需引入，否则打包过大
// _.cloneDeep()
///MessageChannel 
//缺点：不能序列化函数
export const cloneDeep = (obj) => {
    retrun Promise(resolve => {
        const { port1, port2 } = new MessageChannel();
        port2.onmessage = ev => resolve(ev.data);
        prot1.postMessage(obj);
    })
}
//test code
// var obj = {
//     a: 1,
//     b: {
//         c: b
//     }
// }

///注意该函数异步函数
///可以处理undefined和循环引用对象

// const cloneObject = await cloneDeep(obj)
