const { sailthruClient } = require("./sailthru");

// import users into list based on jobs
function importUsersIntoList() {
  const options = {
    list: "nbc_mta_dev_test_sn_supperss_1",
    report_email: "nithishkumar.selvakumar@agilisium.com",
    emails: "jeganathan.muthuramalingam@agilisium.com,arun@agilisium.com",
  };
  sailthruClient.processJob("import", options, (err, res) => {
    if (err) {
      console.log("Import job err", err);
    }
    console.log("Import job res", res);
  });
}

module.exports = {
  importUsersIntoList,
};
