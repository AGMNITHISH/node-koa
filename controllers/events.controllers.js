const {
  generateNumericStrings,
  getBytes,
} = require("../commonFiles/genScript");

const getCall = async (ctx) => {
  try {
    const scriptData = await generateNumericStrings(16);
    console.log(getBytes(scriptData));
    console.log(scriptData);
    ctx.status = 200;
    ctx.body = { data: scriptData };
  } catch (error) {
    ctx.body = { error: error.message };
    ctx.status = 500;
  }
};
const postCall = (ctx) => {
  try {
    const requestBody = ctx.request.body;

    const processedData = { receivedData: requestBody };
    console.log("post method received", getBytes(requestBody));

    ctx.body = processedData;
    ctx.status = 200;
  } catch (error) {
    ctx.body = { error: error.message };
    ctx.status = 500;
  }
};

const postCallTwo = async (ctx) => {
  try {
    const requestBody = await generateNumericStrings(16);
    ctx.body = requestBody;
    ctx.status = 200;
  } catch (error) {
    ctx.body = { error: error.message };
    ctx.status = 500;
  }
};

module.exports = {
  getCall,
  postCall,
  postCallTwo,
};
