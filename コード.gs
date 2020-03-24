function doGet() {
  
  var toppage=HtmlService.createTemplateFromFile("index");
  
  return toppage.evaluate();
  
}

function doPost(postdata){

//今回は特に何の処理も行いません

  var resultpage=HtmlService.createTemplateFromFile("result");
  return resultpage.evaluate();
}