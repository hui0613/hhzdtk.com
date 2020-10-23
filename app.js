const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors');
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const session = require('koa-session');

const index = require('./routes/index');
const deatil = require('./routes/Detail');
const comp = require('./routes/comp');
const authCode = require('./routes/authCode');

// error handler
onerror(app);

app.keys = ['this is my secret and fuck you all']; //我理解为一个加密的密钥

// middlewares
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  })
);
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));

app.use(
  views(__dirname + '/views', {
    extension: 'ejs',
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// session
app.use(
  session(
    {
      key: 'koa:sess' /** cookie的名称，可以不管 */,
      maxAge: 7200000 /** (number) maxAge in ms (default is 1 days)，cookie的过期时间，这里表示2个小时 */,
      overwrite: true /** (boolean) can overwrite or not (default true) */,
      httpOnly: true /** (boolean) httpOnly or not (default true) */,
      signed: true /** (boolean) signed or not (default true) */,
    },
    app
  )
);

// 跨域
app.use(
  cors({
    origin: function (ctx) {
      return '*';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  })
);
app.use(index.routes(), index.allowedMethods());
app.use(deatil.routes(), deatil.allowedMethods());
app.use(comp.routes(), comp.allowedMethods());
app.use(authCode.routes(), authCode.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

module.exports = app;
