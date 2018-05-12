var fs = require('fs');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var Parser = require('../parser.js');

describe("XMLParser",()=>{
  var myp = new Parser();
  var xml = "";

  var myp = new Parser();
  fs.readFile('test.xml','utf-8',(err,data)=>{
    if(err){
      return console.error("No se ha podido leer el archivo");
    }
    xml = data;
  });

  describe("#unescapeString",()=>{
    it("Must return an escaped xml string",()=>{
      assert.equal(myp.unescapeString(xml),"<payment><amount><currency>MXN</currency><quantity>10</quantity></amount><from>Evan</from><to>PayStand</to></payment>");
    });
    it("Must be a String",()=>{
      expect(myp.unescapeString(xml)).to.be.a('string');
    });
  });
  describe("#parseXML",()=>{
    it("Must return a JSON Object",()=>{
      expect(myp.parseXML(xml)).to.be.a('object');
    });
    it("It must represent the XML Nodes as JSON Object",()=>{
      assert.equal(JSON.stringify(myp.parseXML("<element><child>23</child><otherchild>Hello</otherchild></element>")),'{"element":{"child":"23","otherchild":"Hello"}}');
    });
  });
});
