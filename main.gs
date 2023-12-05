function myFunction() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var range1 = sheet.getRange(1,1);
  range.setValue("aaa");
  /*Logger.log(range.getValue());
  Logger.log(range.getRow() + " " + range.getColumn());*/

  var range2 = sheet.getRange(3,4);
  var di = sheet.getRaange(range1.Row, range1.Column, range2.Row, range2.Column);


}
function myFunction2() {
  let active_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  let start = active_sheet.getRange(1,1);
  Logger.log(start.getRow())
  let end = active_sheet.getLastRow();
  Logger.log(end);
}
