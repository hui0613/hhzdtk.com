const router = require("koa-router")();
const DB = require("../modules/db");
const { resolveInclude } = require("ejs");

router.get("/api/webInfo", async (ctx, next) => {
  await DB.find("agony_setting", {}).then(
    (data) => {
      ctx.body = data;
    },
    (err) => {
      ctx.body = err;
      throw err;
    }
  );
});

router.post("/api/articleList", async (ctx, next) => {
  // console.log(ctx.request.body);
  let page = ctx.request.body.page - 1;
  console.log(page);
  await DB.pagination("agony_article", {}, page).then(
    (data) => {
      // console.log(data);
      ctx.body = data;
    },
    (err) => {
      ctx.body = err;
      throw err;
    }
  );
});

router.get("/api/hotList", async (ctx, next) => {
  await DB.hotArticle("agony_article", {}).then(
    (data) => {
      ctx.body = data;
    },
    (err) => {
      ctx.body = err;
      throw err;
    }
  );
});

router.get("/api/getCounts", async (ctx, next) => {
  await DB.count("agony_article", {}).then(
    (data) => {
      ctx.body = data;
    },
    (err) => {
      ctx.body = err;
      // console.log(err);
    }
  );
});

module.exports = router;
