function generateNumericStrings(length) {
  const numberOfStrings = 500000;
  const dataStrings = {
    from: "giri.reddy@nbcuni.com",
    toAddresses: [],
    ccAddresses: ["4652298267444358281"],
    bccAddresses: ["3699587641358784981"],
    messageID: "12352",
    subject: "Welcome all testing 52",
    html: "<html>Custom Emial Platform Test.</html>",
    plainText: "Custom Emial Platform Test.",
    custom_fields: { emailType: "blast" },
    projectId: 109006,
    campaignId: 29501997,
  };

  for (let i = 0; i < numberOfStrings; i++) {
    let randomString = "";

    for (let j = 0; j < length; j++) {
      const randomNumber = Math.floor(Math.random() * 10);
      randomString += randomNumber.toString();
    }
    dataStrings.toAddresses.push(randomString);
  }

  return dataStrings;
}
function bytesToSize(bytes) {
  const kb = bytes / 1024;
  const mb = kb / 1024;

  if (mb >= 1) {
    return mb.toFixed(2) + " MB";
  } else {
    return kb.toFixed(2) + " KB";
  }
}
function getBytes(json) {
  const jsonString = JSON.stringify(json);

  const sizeInBytes = Buffer.byteLength(jsonString, "utf8");

  return `Size of JSON object: ${sizeInBytes} bytes is equal to ${bytesToSize(
    sizeInBytes
  )}`;
}

module.exports = {
  generateNumericStrings,
  getBytes,
  bytesToSize,
};
