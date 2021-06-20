import { createApp } from './app'
// cross-env 跨平台环境变量
export default context => {
  // 路由处理
  // 数据预取
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()
    const meta = app.$meta()

    // 设置服务器端 router 的位置
    router.push(context.url)
    // context.meta = meta

    // 等到 router 将可能的异步组件和钩子函数解析完
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      // 匹配不到的路由，执行 reject 函数，并返回 404
      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }
      context.rendered= () => {
        context.state = store.state
      }

      // Promise 应该 resolve 应用程序实例，以便它可以渲染
      resolve(app)
    }, reject)
  })
}
