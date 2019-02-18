function getXML() {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
    myFunction(this);
   }
  };
  xhttp.open("GET", "asthma.xml", true);
  xhttp.send();
 
  function myFunction(xml) {
   var x, i, txt, xmlDoc;
   xmlDoc = xml.responseXML;
   txt = "";
   x = xmlDoc.getElementsByTagName("title");
 
   for (i = 0; i < x.length; i++) {
    txt += x[i].childNodes[0].nodeValue + ",";
    
   }
var mainNodes;
  mainNodes = txt.split(",");
  var num = 0;
  for(i=1;i<=10;i++){
    
      document.getElementById('no'+i).innerHTML=mainNodes[num];
      num++;
     
  }
 console.log(mainNodes);

 
  }} 
 