const apiKey = "726f39f6d6b57bc91ff3afa274ed9a19";
const apiSecret = "90f7734ed1e5d19109e6298706d1ae95";
const sailthruClient = require("sailthru-client").createSailthruClient(
  apiKey,
  apiSecret
);

// general sailthru API's

// list creation (smart and natural list)
function listCreation() {
  const options = {
    list: "nbc_mta_dev_test_sn_supperss_1",
    primary: 1, // set 0 for non primary
    vars: { color: "blue" },
    public_name: "smart test list public name",
    type: "normal", // set type as "normal" for normal list creation
    // query: {
    //   // query field is only for smart list. For normal list don't need query field
    //   source_list: "main",
    //   criteria: ["match"],
    //   field: ["color"],
    //   value: ["blue"],
    // },
  };
  sailthruClient.apiPost("list", options, (err, res) => {
    if (err) {
      console.error("err", err);
    }
    console.log("res", res);
  });
}
// get all lists
function getAllList() {
  sailthruClient.getLists((err, res) => {
    if (err) {
      console.log(err);
    }
    const createdList = res.lists.find(
      (list) => list.list === "standalone node koa test smart list"
    );
    if (createdList) {
      console.log("List ID:", createdList.list_id);
    } else {
      console.log("List not found");
    }
  });
}
// get list By id
function getlistById() {
  sailthruClient.apiGet(
    "list",
    { list_id: "659d09f8d025615e370d7e51" },
    (err, res) => {
      if (err) {
        console.log(err);
      }
      console.log("list res", res);
    }
  );
}

module.exports = {
  sailthruClient,
  //general api's
  listCreation,
  getAllList,
  getlistById,
};
