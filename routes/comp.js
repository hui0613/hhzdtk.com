const router = require("koa-router")();
const DB = require("../modules/db");

const ObjectID = require("mongodb").ObjectID;

router.post("/api/comList",async (ctx,next) => {
    // console.log(ctx.query.p);
    let page = ctx.request.body.page - 1;
    console.log(page);
    await DB.pagination("agony_demo",{},page).then(
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

router.post("/api/comCount",async (ctx,next) => {
    // console.log(ctx.query.p);
    await DB.count("agony_demo",{}).then(
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
