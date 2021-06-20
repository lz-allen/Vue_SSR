const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const webpack = require('webpack');
const resolve = file => path.resolve(__dirname, file);
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

module.exports = (server, callback) => {
  let ready
  const onReady = new Promise(r => ready = r)
  // 监视-》 更新
  let template
  let serverBundle
  let clientManifest

  const update = () => {
    if(template && serverBundle && clientManifest) {
      ready()
      callback(serverBundle, template, clientManifest)
    }
  }
  // 监视 template
  const templatePath = path.resolve(__dirname, '../index.template.html')
  template = fs.readFileSync(templatePath, 'utf-8')
  update()
  // fs.watch、 fs.watchFile、chokidar
  chokidar.watch(templatePath).on('change', () => {
    template = fs.readFileSync(templatePath, 'utf-8')
    update()
  })
  // 监视 serverBundle
  const serverConfig = require('./webpack.server.config')
  const serverCompiler = webpack(serverConfig)
  // 把数据写入内存
  const serverDevMiddleware = devMiddleware(serverCompiler, {
    stats: 'none'  //关闭默认日志，由friendly管理
  })
  serverCompiler.hooks.done.tap('serverBuild', () => {
    serverBundle = JSON.parse(serverDevMiddleware.context.outputFileSystem.readFileSync(resolve('../dist/vue-ssr-server-bundle.json'), 'utf-8'))
    update()
  })
  // serverCompiler.watch({}, (err, status) => {
  //   if(err) throw err
  //   if(status.hasErrors()) return
  //   serverBundle = JSON.parse(fs.readFileSync(resolve('../dist/vue-ssr-server-bundle.json'), 'utf-8'))
  //   update()
  // })
  // 监视 clientManifest
  const clientConfig = require('./webpack.client.config');
  clientConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  // clientConfig.entry.app= ['webpack-hot-middleware/client', clientConfig.entry.app]
  const clientCompiler = webpack(clientConfig)
  // 把数据写入内存
  const clientDevMiddleware = devMiddleware(clientCompiler, {
    publicPath: clientConfig.output.publicPath,
    stats: 'none'  //关闭默认日志，由friendly管理
  })
  clientCompiler.hooks.done.tap('clientBuild', () => {
    clientManifest = JSON.parse(clientDevMiddleware.context.outputFileSystem.readFileSync(resolve('../dist/vue-ssr-client-manifest.json'), 'utf-8'))
    update()
  })
  server.use(hotMiddleware(clientCompiler, {
    log: false, //关闭热更新的日志输出
  }))
  // 将clientDevMiddleware 挂载到express服务中，提供对其内存数据中的访问
  server.use(clientDevMiddleware)
  return onReady
}
