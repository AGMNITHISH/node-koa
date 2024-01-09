const Koa = require("koa");
const parser = require("koa-bodyparser");
const cors = require("@koa/cors");
const router = require("./router/router");
const { koaBody } = require("koa-body");

const { getBytes } = require("./commonFiles/genScript");
const fiveMb = require("./data/90Mb.json");
const {
  listCreation,
  getAllList,
  getlistById,
} = require("./sailthru/sailthru");
const { importUsersIntoList } = require("./sailthru/job.Functions");
const {
  blastApi,
  getBlastAPiStatus,
} = require("./sailthru/blastFlow.Functiuons");

const App = new Koa();
const port = 8000;

// middleware
App.use(
  koaBody({
    jsonLimit: "100mb",
    formLimit: "100mb",
    textLimit: "100mb",
    multipart: true,
    formidable: {
      maxFileSize: 100 * 1024 * 1024,
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

//sailthru api calls:
console.log("list result", getBlastAPiStatus());

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

App.listen(port, () => {
  console.log(`🚀 Server listening http://127.0.0.1:${port}/ 🚀`);
  console.log(getBytes(JSON.stringify(fiveMb)));
});
