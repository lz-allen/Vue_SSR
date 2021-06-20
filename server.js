const fs = require('fs');
const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer')
const setupDevServer = require('./build/setup-dev-server')
const isProd = process.env.NODE_ENV === 'production'
const server = express()
server.use('/dist', express.static('./dist'))
let renderer
let onReady

if (isProd) {
  const clientManifest = require('./dist/vue-ssr-client-manifest.json')
  const serverBundle = require('./dist/vue-ssr-server-bundle.json')
  const template = fs.readFileSync('./index.template.html', 'utf-8')
  renderer = createBundleRenderer(serverBundle, {
    template,
    clientManifest
  });
} else {
  // 开发模式-监视打包构建-重新生成renderer
  onReady = setupDevServer(server, (serverBundle, template, clientManifest) => {
    renderer = createBundleRenderer(serverBundle, {
      template,
      clientManifest
    });
  })
}

const render = (req, res) => {
  renderer.renderToString({
    title: '傻老婆',
    meta: `<meta name="description" content="傻女人" />`,
    url: req.url
  }, (err, html) => {
    if (err) {
      return res.status(500).end('服务端错误')
    }
    res.end(html)
  })
}
// 所有路由处理逻辑
server.get('*', isProd ? render : async (req, res) => {
  // awit renderer
  await onReady
  render(req, res)
})
server.listen(3000, () => {
  console.log('服务启动成功')
})
