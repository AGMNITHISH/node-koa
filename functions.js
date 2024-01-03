const axios = require("axios");
const oneMb = require("./data/oneMb.json");
const halfMb = require("./data/halfMb.json");

const url = "http://127.0.0.1:8000/";
const makePostCall = async () => {
  try {
    await axios
      .post(
        url,
        { data: "JSON.stringify(halfMb)" },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((resp) => {
        return {
          from: "axios api call",
          status: resp.response.status,
          statusText: response.statusText,
        };
      });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
module.exports = {
  makePostCall,
};
