const router = require("koa-router")();
const DB = require("../modules/db");

const ObjectID = require("mongodb").ObjectID;

router.get("/api/detail", async (ctx, next) => {
  console.log(ctx.query.p);
  await DB.find("agony_article", { _id: ObjectID(ctx.query.p) }).then(
    (data) => {
      ctx.body = data;
    },
    (err) => {
      ctx.body = err;
      throw err;
    }
  );
});

module.exports = router;
