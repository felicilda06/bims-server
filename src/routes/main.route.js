const KoaRouter = require("koa-router");

const router = new KoaRouter();

router.get("/", (ctx) => {
  ctx.body = "";
});

module.exports = router;
