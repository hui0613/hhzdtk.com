const router = require('koa-router')();
const DB = require('../modules/db');

router.get('/api/webInfo', async (ctx, next) => {
  await DB.find('agony_article', {}).then(
    (data) => {
      ctx.body = data;
    },
    (err) => {
      ctx.body = err;
      throw err;
    }
  );
});
