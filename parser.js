class  Parser{
  constructor(jsonRes){
    this.jsonRes = {};
  }
  parseXML(xmlSource){
    var tag,tmp,closeTagPositon,openTag, value;
    this.jsonRes = {};
    xmlSource = this.unescapeString(xmlSource);
    while(xmlSource.match(/<[^\/][^>]*>/)){
      openTag = xmlSource.match(/<[^\/][^>]*>/)[0];
      tag = openTag.substring(1, openTag.length - 1);
      closeTagPositon = xmlSource.indexOf(openTag.replace('<', '</'));
      if(closeTagPositon == -1){
        tag = openTag.match(/[^<][\w+$]*/)[0];
         closeTagPositon = xmlSource.indexOf('</' + tag);
         if (closeTagPositon == -1) {
             closeTagPositon = xmlSource.indexOf('<\\/' + tag);
         }
      }
      value = xmlSource.substring(openTag.length, closeTagPositon);

       if (value.match(/<[^\/][^>]*>/)) {
           tmp = this.parseXML(value);
       }
       else {
           tmp = value;
       }
       if (this.jsonRes[tag] === undefined) {
           this.jsonRes[tag] = tmp;
       }
       else if (Array.isArray(this.jsonRes[tag])) {
           this.jsonRes[tag].push(tmp);
       }
       else {
           this.jsonRes[tag] = [this.jsonRes[tag], tmp];
       }

       xmlSource = xmlSource.substring(openTag.length * 2 + 1 + value.length);
    }
    return this.jsonRes;
  }

  unescapeString(string){
    var aux = string.replace(/\n|\t|\r/g,'');
    var chars = aux.split('');
    aux = "";
    chars.forEach((v,i)=>{
      if(!(v == ' ')){
        aux +=v;
      }
    });
    return aux
  }

}
module.exports = Parser;
