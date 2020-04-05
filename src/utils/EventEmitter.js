/*
 * @Author: your name
 * @Date: 2019-12-01 12:58:42
 * @LastEditTime : 2020-03-31 23:54:36
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/Eventemmit.js
 */
export default class EventEmitter {
    constructor () {
        this._eventpool = {};
    }
    // 为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
    on (event, callback) {
        this._eventpool[event] ? this._eventpool[event].push(callback) : this._eventpool[event] = [callback]
    }
    // 按监听器的顺序执行执行每个监听器，如果事件有注册监听返回 true，否则返回 false。
    emit (event, ...args) {
        this._eventpool[event] && this._eventpool[event].forEach(cb => cb(...args))
    }

    off (event) {
        if (this._eventpool[event]) {
            delete this._eventpool[event]
        }
    }
    //为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
    once (event, callback) {
        this.on(event, (...args) => {
            callback(...args);
            this.off(event)
        })
    }
}
//观察者
class Observer {
    constructor(id, subject) {
        this.id = id;
        this.subject = subject;
    }

    on(name, callback) {
        this.subject.addListener(name, callback);
    }
}


let observable = new EventEmitter();

let [observer1, observer2] = [
    new Observer(1, observable),
    new Observer(2, observable)
]

observer1.on('change', (data) => {
    console.log(`${observer1“.id} observered data:`, data);
})

observer2.on('haha', (data) => {
    console.log(`${observer2.id} observered data:`, data);
})

observable.emit('change', { a: 1 }); // 1 observered data: { a: 1 }
observable.emit('haha', [1, 2, 3]); // 2 observered data: [ 1, 2, 3 ]