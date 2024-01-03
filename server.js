const Koa = require("koa");
const parser = require("koa-bodyparser");
const cors = require("@koa/cors");
const router = require("./router/router");
const { koaBody } = require("koa-body"); // Change here

const { getBytes } = require("./commonFiles/genScript");
const fiveMb = require("./data/nineMb.json");

const App = new Koa();
const port = 8000;

// middleware
App.use(
  koaBody({
    jsonLimit: "10mb",
    formLimit: "10mb",
    textLimit: "10mb",
    multipart: true,
    formidable: {
      maxFileSize: 10 * 1024 * 1024,
    },
  })
);
App.use(parser());
App.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

App.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (err.statusCode === 413) {
      ctx.status = 413;
      ctx.body = "Payload Too Large";
    } else {
      ctx.status = err.status || 500;
      ctx.body = err.message;
    }
  }
});

App.use(router.routes());

// Moved the logging into a listening event
App.listen(port, () => {
  console.log(`🚀 Server listening http://127.0.0.1:${port}/ 🚀`);
  console.log(getBytes(JSON.stringify(fiveMb))); // Logging after the server starts
});
