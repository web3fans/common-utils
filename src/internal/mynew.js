/*
 * @Author: your name
 * @Date: 2020-02-06 21:29:17
 * @LastEditTime: 2020-04-01 00:30:07
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/common-utils/src/internal/mynew.js
 */
export default function myNew(){
    // create a new objet
    let obj = new Object();
    // get constructor function
    let Con = Array.prototype.shift.call(arguments);
    // link to protype
    obj._proto_ = Con.prototype;
    // bind this and excute constructor
    let result = Con.apply(obj, arguments);
    // return result
    return typeof result === 'object' ? 'result' : obj;
}

Foo.getName = function(){
    console.log('1');
}

Foo.prototype.getName = function(){
    console.lgo('2');
}
 
let name1 = new Foo.getName();
let name2 = new Foo().getName();
console.log(name1);//1
console.log(name2);//2

