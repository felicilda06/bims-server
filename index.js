const Koa = require("koa");
const json = require("koa-json");
const routers = require("./src/routes");

require("dotenv").config();

const PORT = process.env.PORT || 4000;
const app = new Koa();

Object.values(routers).map((router) => {
  app.use(router.routes()).use(router.allowedMethods());
});

app.use(json());
// app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
