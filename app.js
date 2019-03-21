
const router = require('./routernew');
const views = require('koa-views');
const serve = require('koa-static');
const koaBody = require('koa-body');
const Koa = require('koa');
const Webpackhook = require('./config/webpackhook.js')
const app = new Koa();

global.LIFT_TIME = Date.now();
// app.use(async ctx => {
//   ctx.body = 'Hello World';
// })
// 加载模板引擎
app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))
// 加载静态资源
app.use(serve('.tmp/dist/'));


// 用来从 POST 请求的数据体里面提取键值对 和 文件上传
app.use(koaBody({ multipart: true }));


const compileWebpack = new Webpackhook();

app.use(router.routes()).use(router.allowedMethods())


const result = app.listen(7777 , () => {
  compileWebpack.enableWebpack(require('./config/webpack.dev.js'))
  const add = result.address();
  console.log(`server running on ${add.address}:${add.port}`);
});