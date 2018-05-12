var Parser = require("./Parser.js");
var fs = require('fs');

var myp = new Parser();
fs.readFile('test.xml','utf-8',(err,data)=>{
  if(err){
    return console.error("No se ha podido leer el archivo");
  }
  console.log(myp.parseXML(data));
});
