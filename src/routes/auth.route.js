const KoaRouter = require("koa-router");
const { AuthController } = require("../controllers");

const authRouter = new KoaRouter();
const authController = new AuthController();

authRouter.post("/register", authController.newUser);

module.exports = authRouter;
