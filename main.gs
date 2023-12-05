function myFunction() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var range1 = sheet.getRange(1,1);
  range.setValue("aaa");
  /*Logger.log(range.getValue());
  Logger.log(range.getRow() + " " + range.getColumn());*/

  var range2 = sheet.getRange(3,4);
  var di = sheet.getRaange(range1.Row, range1.Column, range2.Row, range2.Column);
  
}
