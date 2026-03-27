function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) {
    var email = data[i][0];
    var name = data[i][1];
    var status = data[i][2];

    if (status != "Sent") {
      var subject = "Test Email";
      var body = "Hello " + name + ",\n\nThis is your first automated email 🚀";

      MailApp.sendEmail(email, subject, body);

      sheet.getRange(i + 1, 3).setValue("Sent");
    }
  }
}
