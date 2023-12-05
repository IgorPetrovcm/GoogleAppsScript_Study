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
  let end = active_sheet.getLastRow();
  Logger.log(end);
}
function myArray() {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  let start = sheet.getRange(1,1);
  let end_row = sheet.getLastRow();
  let end = sheet.getRange(end_row,1);
  
  let arr_items = [];
  for (let i = 0; i < end.getRow() - start.getRow(); i+=1) {
    arr_items.push(sheet.getRange(start.getRow() + i, start.getColumn()).getValue());
  }
  for (let i = 0; i < arr_items.length;i+=1) {
    Logger.log(arr_items[i]);
  }
}
