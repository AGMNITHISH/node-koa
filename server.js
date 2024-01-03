const Koa = require("koa");
const parser = require("koa-bodyparser");
const cors = require("@koa/cors");
const router = require("./router/router");
const { makePostCall } = require("./functions");

const App = new Koa();
const port = 8000;

// middleware
App.use(parser());
App.use(cors());
makePostCall();

App.use(router.routes());

App.listen(port, () => {
  console.log(`🚀 Server listening http://127.0.0.1:${port}/ 🚀`);
});
