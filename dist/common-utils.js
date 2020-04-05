(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["common-utils"] = factory();
	else
		root["common-utils"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'Algorithm/minDistance.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _internal_apply_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _internal_bind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _internal_bind_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_internal_bind_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _internal_call_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _internal_curry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _internal_mynew_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _internal_MyPromise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _internal_MyPromise_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_internal_MyPromise_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _internal_tirm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var _redux_applyMiddleware__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);
/* harmony import */ var _redux_compose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9);
/* harmony import */ var _request_jqueryAjax_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10);
/* harmony import */ var _request_jqueryAjax_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_request_jqueryAjax_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _sort_quicksort_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11);
/* harmony import */ var _utils_addThousandsSeparator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12);
/* harmony import */ var _utils_addThousandsSeparator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_utils_addThousandsSeparator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_addTwoLargeNumber_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(13);
/* harmony import */ var _utils_addTwoLargeNumber_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_utils_addTwoLargeNumber_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14);
/* harmony import */ var _utils_deepClone_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15);
/* harmony import */ var _utils_deepClone_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_utils_deepClone_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils_dateDiff_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(16);
/* harmony import */ var _utils_getVarType_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(17);
/* harmony import */ var _utils_getQueryString_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(18);
/* harmony import */ var _utils_myinstanceof_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(19);
/* harmony import */ var _utils_isChinese_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(20);
/* harmony import */ var _utils_isLegalEmail_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(21);
/* harmony import */ var _utils_throttle_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(22);
/* harmony import */ var _utils_getUUID_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(23);
//Algorithm
//编辑距离
//internal
//apply 
//bind 
//call
//curry
//new 「关键字冲突」
//promise A+ 实现

//redux
//applyMiddleware
//compose
//request

//sort

//utils













/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * @Author: coolsummer
 * @Date: 2020-01-05 19:24:38
 * @LastEditTime : 2020-03-31 23:35:47
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/apply.js
 */

/* harmony default export */ __webpack_exports__["default"] = (apply = Function.prototype.bind || function (context){
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
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

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

Function.prototype.bind = Function.prototype.bind || function (context) {
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



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * @Author: coolsummer
 * @Date: 2020-01-05 19:24:38
 * @LastEditTime : 2020-03-31 23:36:38
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/apply.js
 */
/* harmony default export */ __webpack_exports__["default"] = (call = Function.prototype.call || function (context) {
    //获取上下文，如果上下文不存在，返回window
    var context = context || window;
    //获取当前函数
    context.fn = this;
    //拿到当前参数，从第二个参数开始截取
    var args = [...arguments].slice(1);
    //执行当前函数
    var result = context.fn(...args);
    //去除当前绑定的函数
    delete context.fn;
    return result;
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curry", function() { return curry; });
/*
 * @Author: your name
 * @Date: 2019-12-01 12:51:37
 * @LastEditTime : 2020-04-01 20:54:06
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/curry.js
 */
//ES5
// function curry(fn, arr = []) {
//   return fn.length === arr.length
//     ? fn.apply(null, arr)
//     : function(...args) {
//         return curry(fn, arr.concat(args));
//       };
// }

//ES6
const curry = (fn, arr = []) =>
  fn.length === arr.length
    ? fn(...arr)
    : (...args) => curry(fn, [...arr, ...args]);

var currying = function(fn){
  var args = [];
  return function () {
    if(arguments.length === 0){
      return fn.apply(this, args);
    }else{
      [].push.apply(args, arguments);
      return arguments.callee;
    }
  }
}

var cost = (function(){
  var Income = 0;
  return function(){
    for(var i = 0; i < arguments.length; i++){
      Income += arguments[i];
    }
    return Income;
  }
})();

cost = currying(cost);
cost(100);
cost(150);
cost(-100);
cost(130);
console.log('cost()=' + cost());


// ES56写法
// var curry = function (fn, arr=[]) {
//   return fn.length === arr.length
//     ? fn.apply(null, arr);
//     : function(...args){
//       return curry(fn, arr.concat(args))
//     }
// }

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return myNew; });
/*
 * @Author: your name
 * @Date: 2020-02-06 21:29:17
 * @LastEditTime: 2020-04-01 00:30:07
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/common-utils/src/internal/mynew.js
 */
function myNew(){
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



/***/ }),
/* 6 */
/***/ (function(module, exports) {

// // 三种状态
// const PENDING = "pending";
// const RESOLVED = "resolved";
// const REJECTED = "rejected";
// // promise 接收一个函数参数，该函数会立即执行
// export default function MyPromise(fn) {
//   let _this = this;
//   _this.currentState = PENDING;
//   _this.value = undefined;
//   // 用于保存 then 中的回调，只有当 promise
//   // 状态为 pending 时才会缓存，并且每个实例至多缓存一个 _this.resolvedCallbacks = []; _this.rejectedCallbacks = [];
//   _this.resolve = function(value) {
//     if (value instanceof MyPromise) {
//       // 如果 value 是个 Promise，递归执行
//       return value.then(_this.resolve, _this.reject);
//     }
//     setTimeout(() => {
//       // 异步执行，保证执行顺序
//       if (_this.currentState === PENDING) {
//         _this.currentState = RESOLVED;
//         _this.value = value;
//         _this.resolvedCallbacks.forEach(cb => cb());
//       }
//     });
//   };
//   _this.reject = function(reason) {
//     setTimeout(() => {
//       // 异步执行，保证执行顺序
//       if (_this.currentState === PENDING) {
//         _this.currentState = REJECTED;
//         _this.value = reason;
//         _this.rejectedCallbacks.forEach(cb => cb());
//       }
//     });
//   };
//   // 用于解决以下问题
//   // new Promise(() => throw Error('error))
//   try {
//     fn(_this.resolve, _this.reject);
//   } catch (e) {
//     _this.reject(e);
//   }
// }
// MyPromise.prototype.then = function(onResolved, onRejected) {
//   var self = this;
//   // 规范 2.2.7，then 必须返回一个新的 promise
//   var promise2;
//   // 规范 2.2.onResolved 和 onRejected 都为可选参数
//   // 如果类型不是函数需要忽略，同时也实现了透传
//   // Promise.resolve(4).then().then((value) => console.log(value))
//   onResolved = typeof onResolved === "function" ? onResolved : v => v;
//   onRejected = typeof onRejected === "function" ? onRejected : r => throw r;
//   if (self.currentState === RESOLVED) {
//     return (promise2 = new MyPromise(function(resolve, reject) {
//       // 规范 2.2.4，保证 onFulfilled，onRjected 异步执行
//       // 所以用了 setTimeout 包裹下
//       setTimeout(function() {
//         try {
//           var x = onResolved(self.value);
//           resolutionProcedure(promise2, x, resolve, reject);
//         } catch (reason) {
//           reject(reason);
//         }
//       });
//     }));
//   }
//   if (self.currentState === REJECTED) {
//     return (promise2 = new MyPromise(function(resolve, reject) {
//       setTimeout(function() {
//         // 异步执行onRejected
//         try {
//           var x = onRejected(self.value);
//           resolutionProcedure(promise2, x, resolve, reject);
//         } catch (reason) {
//           reject(reason);
//         }
//       });
//     }));
//   }
//   if (self.currentState === PENDING) {
//     return (promise2 = new MyPromise(function(resolve, reject) {
//       self.resolvedCallbacks.push(function() {
//         // 考虑到可能会有报错，所以使用 try/catch 包裹
//         try {
//           var x = onResolved(self.value);
//           resolutionProcedure(promise2, x, resolve, reject);
//         } catch (r) {
//           reject(r);
//         }
//       });
//       self.rejectedCallbacks.push(function() {
//         try {
//           var x = onRejected(self.value);
//           resolutionProcedure(promise2, x, resolve, reject);
//         } catch (r) {
//           reject(r);
//         }
//       });
//     }));
//   }
// };
// // 规范 2.3
// function resolutionProcedure(promise2, x, resolve, reject) {
//   // 规范 2.3.1，x 不能和 promise2 相同，避免循环引用
//   if (promise2 === x) {
//     return reject(new TypeError("Error"));
//   }
//   // 规范 2.3.2
//   // 如果 x 为 Promise，状态为 pending 需要继续等待否则执行
//   if (x instanceof MyPromise) {
//     if (x.currentState === PENDING) {
//       x.then(function(value) {
//         // 再次调用该函数是为了确认 x resolve 的
//         // 参数是什么类型，如果是基本类型就再次 resolve
//         // 把值传给下个 then
//         resolutionProcedure(promise2, value, resolve, reject);
//       }, reject);
//     } else {
//       x.then(resolve, reject);
//     }
//     return;
//   }
//   // 规范 2.3.3.3.3
//   // reject 或者 resolve 其中一个执行过得话，忽略其他的
//   let called = false;
//   // 规范 2.3.3，判断 x 是否为对象或者函数
//   if (x !== null && (typeof x === "object" || typeof x === "function")) {
//     // 规范 2.3.3.2，如果不能取出 then，就 reject
//     try {
//       // 规范 2.3.3.1
//       let then = x.then;
//       // 如果 then 是函数，调用 x.then
//       if (typeof then === "function") {
//         // 规范 2.3.3.3
//         then.call(
//           x,
//           y => {
//             if (called) return;
//             called = true;
//             // 规范 2.3.3.3.1
//             resolutionProcedure(promise2, y, resolve, reject);
//           },
//           e => {
//             if (called) return;
//             called = true;
//             reject(e);
//           }
//         );
//       } else {
//         // 规范 2.3.3.4
//         resolve(x);
//       }
//     } catch (e) {
//       if (called) return;
//       called = true;
//       reject(e);
//     }
//   } else {
//     // 规范 2.3.4，x 为基本类型
//     resolve(x);
//   }
// }

// //test

// MyPromise.defer = MyPromise.deferred = function () {
//     let dfd = {};
//     dfd.promise = new Promise((resolve, reject) => {
//         dfd.resolve = resolve;
//         dfd.reject = reject;
//     });
//     return dfd;
// }


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return trim; });
/*
 * @Author: your name
 * @Date: 2019-11-24 23:05:11
 * @LastEditTime : 2020-04-01 20:51:50
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/tirm.js
 */
/**
 * @description:
 * @param {type}
 * @return:
 */
// MDN参考：String.prototype.trim()
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim

//ie9以下不兼容
const trim = (str) => {
  // 用正则表达式将前后空格
  // 用空字符串替代。
  return str.replace(/(^\s*)|(\s*$)/g, "");
};
//MDN中的trim
// if (!String.prototype.trim) {
//   String.prototype.trim = function () {
//     return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
//   };
// }

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applyMiddleware; });
/*
 * @Author: your name
 * @Date: 2019-12-15 23:52:17
 * @LastEditTime: 2019-12-15 23:52:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/applymiddleware.js
 */
// 将每个中间件，按顺序compose到一起
function applyMiddleware(...middlewares) {
    return createStore => (...args) => {
        const store = createStore(...args)
        let dispatch = () => {
            throw new Error(
                'Dispatching while constructing your middleware is not allowed. ' +
                'Other middleware would not be applied to this dispatch.'
            )
        }

        const middlewareAPI = {
            getState: store.getState,
            dispatch: (...args) => dispatch(...args)
        }
        // 让每个中间件函数携带 middlewareAPI 执行一遍，让每个中间件都可以getState和dispatch
        const chain = middlewares.map(middleware => middleware(middlewareAPI))
        dispatch = compose(...chain)(store.dispatch)

        return {
            ...store,
            dispatch
        }
    }
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compose; });
/*
 * @Author: your name
 * @Date: 2019-12-15 23:51:29
 * @LastEditTime: 2019-12-15 23:51:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/compose.js
 */
// 执行compose(f, g, h) 相当于 (...args) => f(g(h(...args)))
// 将args按顺序注入到每个函数中，达到一级级传递参数的目的
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
 * @Author: CoolSummer
 * @Date: 2019-11-24 22:34:14
 * @LastEditTime : 2020-04-01 20:55:15
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/jqueryAjax.js
 */
/**
 * @description: 
 * @param {type} 
 * @return: 
 */ 
 
// export const jqueryAjax = (api, dataparam, successFunc, errorFunc) => {
//     $.ajax({
//         url: api,
//         type: 'GET',
//         data: dataParam
//         dataType: 'json',
//         contentType: 'application/json',
//         success: function (response) {
//             successFunc.call(this, response);
//         },
//         error: function () {
//             errorFunc.call(this);
//         }
//     });
// }

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**快速排序**/
/* harmony default export */ __webpack_exports__["default"] = (quickSort = (arr) => {
    if(!arr.length) {
        return []
    }

    const [ pivot, ...rest ]  = arr;

    return [
        ...quickSort(rest.filter( x => x < pivot)),
        pivot,
        ...quickSort(rest.filter( x => x >= pivot))
    ]
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

/*
 * @Author: CoolSummer
 * @Date: 2019-11-24 21:54:41
 * @LastEditTime: 2019-11-24 22:56:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/addThousandsSeparator.js
 */

/**
 * @description:
 * @param {number}
 * @return: {string}
 */

const addThousandsSeparator = num => {
  if (!num && num !== 0) {
    return "";
  }
  return num.toString().replace(/(?<!\.\d*)\B(?=(\d{3})+(?!\d))/g, ",");
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

function addLargeNumber (a, b){
    let i = a.length - 1, 
        j = b.length - 1; 
    let x = 0, y = 0;
    let carry = 0;
    let sum = 0;
    let result = '';

    while(i >= 0 || j >= 0){
        x = 0;
        y = 0;
        if(i >= 0){
            x = a[i] - '0';
            i--;
        }
        if(j >= 0){
            y = b[j] - '0';
            j--;
        }

        sum = x + y + carry;

        if(sum >= 10){
            carry = 1;
            sum -= 10;
        }else{
            carry = 0;
        }

        result = sum + result;
    }

    if(carry > 0){
        result = carry + result;
    }
    return result;
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/*
 * @Author: CoolSummer
 * @Date: 2019-11-24 22:22:23
 * @LastEditTime : 2020-04-01 00:32:52
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/debounce.js
 */
/**
 * @description:
 * @param {function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return: {function}
 */
//underscore中源码

_.debounce = function (func, wait, immediate) {
  var timeout, timestamp, result, context, args;

  var later = function () {
    var last = _.now() - timestamp;//_.now()   获取当前时间Date.parse(new Date());

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;

      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  }

  return function () {
    context = this;
    args = arguments;
    timestamp = _.now();

    var callNow = immediate && !timeout;

    if (!timeout) {
      timeout = setTimeout(later, wait);
    }

    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
};


const debounce = (fn, wait, immediate) => {
  let timer = null;

  return function(){
    let args = arguments;
    let context = this;

    if(immediate && !timer){
      fn.apply(context, args);
    }
    if(timer) clearTimeout(timer);
    timer = setTimeout(function(){
      fn.apply(context, args);
    },wait)

  }
}



/***/ }),
/* 15 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (19:11)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| //缺点：不能序列化函数\n| export const cloneDeep = (obj) => {\n>     retrun Promise(resolve => {\n|         const { port1, port2 } = new MessageChannel();\n|         port2.onmessage = ev => resolve(ev.data);");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateDiff", function() { return dateDiff; });
/*
 * @Author: CoolSummer
 * @Date: 2019-11-24 22:31:19
 * @LastEditTime : 2020-04-01 20:52:07
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/diffTime.js
 */
/**
 * @description:
 * @param {type}
 * @return:
 */

/* 计算两日期相差的日期年月日等 */
const dateDiff = (objDate2, interval) => {
  var d = undefined,
    i = {},
    t = d.getTime(),
    t2 = objDate2.getTime();
  i["y"] = objDate2.getFullYear() - d.getFullYear();
  i["q"] =
    i["y"] * 4 +
    Math.floor(objDate2.getMonth() / 4) -
    Math.floor(d.getMonth() / 4);
  i["m"] = i["y"] * 12 + objDate2.getMonth() - d.getMonth();
  i["ms"] = objDate2.getTime() - d.getTime();
  i["w"] =
    Math.floor((t2 + 345600000) / 604800000) -
    Math.floor((t + 345600000) / 604800000);
  i["d"] = Math.floor(t2 / 86400000) - Math.floor(t / 86400000);
  i["h"] = Math.floor(t2 / 3600000) - Math.floor(t / 3600000);
  i["n"] = Math.floor(t2 / 60000) - Math.floor(t / 60000);
  i["s"] = Math.floor(t2 / 1000) - Math.floor(t / 1000);
  return i[interval];
};


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVarType", function() { return getVarType; });
/*
 * @Author: CoolSummer
 * @Date: 2019-11-24 22:50:18
 * @LastEditTime: 2019-11-24 22:59:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/getType.js
 */
/**
 * @description:
 * @param {type}
 * @return:
 */

const getVarType = (target) => {
  var classToType = {};
  "Array Date RegExp Object Error".split(" ").forEach(function(item) {
    classToType["[object " + item + "]"] = item.toLowerCase();
  });

  function type(target) {
    if (target === null) {
      return String(target);
    }
    return typeof target === "object"
      ? classToType[object.prototype.toString.call(target)] || "object"
      : typeof target;
  }
  return type(target);
};


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryString", function() { return getQueryString; });
/*
 * @Author: CoolSummer
 * @Date: 2019-11-24 22:33:14
 * @LastEditTime : 2020-04-01 00:33:08
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/getUrlParam.js
 */
/**
 * @description:
 * @param {type}
 * @return:
 */

/* 获取URL查询参数 */
const getQueryString = param => {
  var sQuery = window.location.search;
  if (sQuery && sQuery.length > 0) {
    var arr = sQuery.substr(1).split("&");
    for (var i in arr) {
      var pair = arr[i].split("=");
      if (param && param.toLowerCase() === pair[0].toLowerCase() && pair[1]) {
        return pair[1];
      }
    }
  }
  return "";
};


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return myinstanceof; });
/*
 * @Author: your name
 * @Date: 2019-12-01 14:20:13
 * @LastEditTime : 2020-04-01 00:27:36
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/common-utils/src/utils/instance.js
 */
function myinstanceof (left, right){
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

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChinese", function() { return isChinese; });
/*
 * @Author: your name
 * @Date: 2019-11-24 23:07:38
 * @LastEditTime : 2020-04-01 00:33:28
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/ischinese.js
 */
/**
 * @description: 
 * @param {type} 
 * @return: 
 */ 
const isChinese = (str) => {
  return !!/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi.exec(str);
};


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLegalEmail", function() { return isLegalEmail; });
/*
 * @Author: CoolSummer
 * @Date: 2019-11-24 23:09:01
 * @LastEditTime : 2020-04-01 00:33:35
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/isLegalEmail.js
 */
/**
 * @description: 
 * @param {type} 
 * @return: 
 */ 
const isLegalEmail = (str) => {
    let regex = /[a-zA-Z]|[0-9](\w\-)+@([0-9a-zA-Z]+\.([a-zA-Z]{2,4})$)/;
  return str.test(regex);
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/*
 * @Author: CoolSummer
 * @Date: 2019-11-24 22:28:04
 * @LastEditTime : 2020-04-01 20:51:23
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/throttle.js
 */
/**
 * @description:
 * @param {function} func
 * @param {number} wait
 * @param {object} options 如果想忽略开始函数的的调用，传入{leading: false}
 *                         如果想忽略结尾函数的的调用，传入{trailing: false}
 *
 * @return: {function}
 */
//underscore中源码
// _.throttle = function (func, wait, options) {
//   var context, args, result;
//   var timeout = null;
//   var previous = 0;
//   if (!options) {
//     options = {};
//   }
//   var later = function () {
//     previous = options.leading === false ? 0 : _.now();

//     timeout = null;
//     result = func.apply(context, args);
//     if (!timeout) {
//       context = args = null;
//     }
//   }

//   return function () {
//     var now = _.now();

//     if (!previous && options.leading === false) {
//       previous = now;
//     }
//     var remaining = wait - (now - previous);
//     context = this;
//     args = arguments;

//     if (remaining <= 0 || remaining > wait) {
//       if (timeout) {
//         clearTimeout(timeout);
//         timeout = null;
//       }
//       previous = now;
//       result = func.apply(context, args);
//       if (!timeout) {
//         context = args = null;
//       }
//     } else if (!timeout && options.trailing !== false) {
//       timeout = setTimeout(later, remaining);
//     }
//     return result;
//   }
// };

const throttle = (fn, wait, immediate) => {
  let timer = null;
  let callNow = immediate;

  return function(){
    let args = arguments;
    let context = this;
    if(callNowß){
      fn.apply(context, args);
      callNow = false;
    }
    if(!timer){
      timer = setTimeout(function(){
        fn.apply(context, args);
        timer = null;
      }, wait)
    }
  }
}



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUUID", function() { return getUUID; });
/*
 * @Author: CoolSummer
 * @Date: 2019-11-24 22:52:53
 * @LastEditTime : 2020-04-01 00:33:16
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/uuid.js
 */
/**
 * @description: 
 * @param {type} 
 * @return: 
 */ 
 const getUUID = (len, radix) => {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
    ""
  );
  var uuid = [],
    i;
  radix = radix || chars.length;

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
  } else {
    // rfc4122, version 4 form
    var r;

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
    uuid[14] = "4";

    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16);
        uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uuid.join("");
};


/***/ })
/******/ ])["default"];
});