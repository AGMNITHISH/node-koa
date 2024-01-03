const Router = require("koa-router");
const router = new Router();
const {
  getCall,
  postCall,
  postCallTwo,
} = require("../controllers/events.controllers");

router.get("/get", getCall);

router.post("/post", postCall);

router.post("/checkpost", postCallTwo);

module.exports = router;
