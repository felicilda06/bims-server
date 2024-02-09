const KoaRouter = require("koa-router");

const authRouter = new KoaRouter();

authRouter.get("/", (ctx) => {
  ctx.body = "Hello World";
});

module.exports = authRouter;
