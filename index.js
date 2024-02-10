const Koa = require("koa");
const json = require("koa-json");
const cors = require("koa-cors");
const bodyParser = require("koa-body-parser");

const routers = require("./src/routes");
const db = require("./src/connection");

require("dotenv").config();

const PORT = process.env.PORT || 4000;
const app = new Koa();

app.use(cors());
app.use(json());
app.use(bodyParser());

Object.values(routers).map((router) => {
  app.use(router.routes()).use(router.allowedMethods());
});

db.connect((err) => {
  if (err) throw new Error(err);
  else {
    app.listen(PORT, () => {
      console.log(`Server is listening on port: ${PORT}`);
    });
  }
});
