function myFunction() {
  var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1lfepgzQuT7uQvw29Qff6iItJdPNG2WcHdckKNQl2iWI/edit#gid=0');
  Logger.log(ss.getName());
}
