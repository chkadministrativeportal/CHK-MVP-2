function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('index')
    .setTitle('CHK MVP of the Quarter')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function saveNomination(data) {
  var ss = SpreadsheetApp.openById('1zPwdnB4M-OC-7mDQKNs2ngR-FZgWGmKxYFn2I_mbYtE');
  var sheet = ss.getSheets()[0];

  if (!sheet.getRange(1,1).getValue()) {
    sheet.getRange(1, 1, 1, 11).setValues([[
      'Timestamp', 'Nominator Name', 'Email', 'Classification',
      'Nominee Name', 'Nominee Section',
      'Rating: Performance & Initiative', 'Rating: Teamwork & Professionalism',
      'Reason: Performance & Initiative', 'Reason: Teamwork & Professionalism',
      'Term'
    ]]);
  }

  sheet.appendRow([
    new Date(),
    data.nominatorName       || '',
    data.nominatorEmail      || '',
    data.classification      || '',
    data.nomineeName         || '',
    data.nomineeSection      || '',
    data.ratingPerformance   || '',
    data.ratingTeamwork      || '',
    data.reasonPerformance   || '',
    data.reasonTeamwork      || '',
    data.term                || ''
  ]);
}