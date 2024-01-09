const { sailthruClient } = require("./sailthru");

function blastApi() {
  var name = "my campaign";
  var list = "Copy of smart test list";
  var fromName = "Example User";
  var fromEmail = "giri.reddy@nbcuni.com";
  var subject = "suppress_list testing !!!";
  var contentHtml = "<p>This is a test</p>{beacon}";
  var contentText = "this is a test";
  var scheduleTime = "now";
  var options = {
    suppress_list: ["nbc_mta_dev_test_sn_supperss_1"],
  };

  sailthruClient.scheduleBlast(
    name,
    list,
    scheduleTime,
    fromName,
    fromEmail,
    subject,
    contentHtml,
    contentText,
    options,
    function (err, response) {
      if (err) {
        console.log(" blastApi err", err);
      }
      console.log("blastApi response", response);
    }
  );
}

function getBlastAPiStatus() {
  sailthruClient.getBlast("33936782", (err, response) => {
    if (err) {
      console.log(" blastApi err", err);
    }
    console.log("blastApi response", response);
  });
}

module.exports = {
  blastApi,
  getBlastAPiStatus,
};
