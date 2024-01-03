const Koa = require("koa");
const parser = require("koa-bodyparser");
const cors = require("@koa/cors");
const router = require("./router/router");
const { makePostCall } = require("./functions");
const { getBytes } = require("./commonFiles/genScript");
const twoMb = require("./data/twoMb.json");

const App = new Koa();
const port = 8000;

// middleware
App.use(parser());
App.use(cors());
// makePostCall();

console.log(getBytes(JSON.stringify(twoMb)));
App.use(router.routes());

App.listen(port, () => {
  console.log(`🚀 Server listening http://127.0.0.1:${port}/ 🚀`);
});
