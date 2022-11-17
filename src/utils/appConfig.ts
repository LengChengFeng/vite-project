/*
 * @Author: DongMenghua
 * @Date: 2022-08-11 09:13:52
 * @LastEditTime: 2022-08-30 14:31:01
 * @LastEditors: DongMenghua
 * @Description: 
 * @FilePath: /web-admin/src/util/appConfig.ts
 */

// https://cn.vuejs.org/api/application.html
export const globalConfig = (app: any) => {

    // 全局捕获错误信息
    app.config.errorHandler = (err: any, vm: any, info: any) => {
        console.log('------------- 全局错误提示 start ----------------')
        console.log('err:', err)
        console.log('vm:', vm)
        console.log('特定的错误信息:', info)
        console.log('------------- 全局错误提示 end ----------------')
    }

    // 全局vue3捕获提示信息 -- 仅限开发模式
    app.config.warnHandler = function (msg: any, vm: any, trace: any) {
        console.log('------------- 全局错误提示 start ----------------')
        console.log('错误信息:', msg)
        console.log('vm:', vm)
        console.log('组件的继承关系追踪:', trace)
        console.log('------------- 全局错误提示 end ----------------')
    }

}