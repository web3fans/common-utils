/*
 * @Author: your name
 * @Date: 2019-12-15 23:52:17
 * @LastEditTime: 2019-12-15 23:52:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/applymiddleware.js
 */
// 将每个中间件，按顺序compose到一起
export default function applyMiddleware(...middlewares) {
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