function attivalat(num){
// console.log("ci sono anche qui");
var x = document.getElementById(num);
if(num=="link1"){
  if(x.className==="nada"){
  x.className+=" attivotop";
  document.getElementById('link2').className="nada";
  document.getElementById('link3').className="nada";
  document.getElementById('link4').className="nada";
  document.getElementById('link5').className="nada";
  document.getElementById('link6').className="nada";
  document.getElementById('link7').className="nada";
  document.getElementById('link8').className="nada";

}else{
  x.className ="nada";
}
} else if (num=="link2"||num=="link3"||num=="link4"||num=="link5") {
  var a = document.getElementById('link2');
  var b = document.getElementById('link3');
  var c = document.getElementById('link4');
  var d = document.getElementById('link5');
   a.className += " attivotop";
   b.className += " attivotop";
   c.className += " attivotop";
   d.className += " attivotop";
   document.getElementById('link1').className="nada";
   document.getElementById('link6').className="nada";
   document.getElementById('link7').className="nada";
   document.getElementById('link8').className="nada";
}else if (num=="link6"||num=="link7"||num=="link8") {
  var f = document.getElementById("link6");
  var g = document.getElementById("link7");
  var h = document.getElementById("link8");
  f.className += " attivotop";
  g.className += " attivotop";
  h.className += " attivotop";
  document.getElementById('link1').className="nada";
  document.getElementById('link2').className="nada";
  document.getElementById('link3').className="nada";
  document.getElementById('link4').className="nada";
  document.getElementById('link5').className="nada";
} else {
  x.className ="nada";
  a.className ="nada";
  b.className ="nada";
  c.className ="nada";
  d.className ="nada";
  f.className ="nada";
  g.className ="nada";
  h.className ="nada";
}
}

function corsiva(daattivare){
  var x = document.getElementById(daattivare);
    x.className+=" attivo";
  pulisci(daattivare);
}

function pulisci(danonpulire){
  var no=0;
  // console.log("esghere "+danonpulire);
  var links=["link3","link4","link5","link7","link8"];
  // console.log("links= "+links);
  for(var i=0;i<5;i++){
      if(links[i]==danonpulire){
        no=i;
      }
}
  links.splice(no, 1);
    // console.log("no="+no+" links2= "+links);
  for(i=0;i<4;i++){
    var f=document.getElementById(links[i]);
    f.classList.remove("attivo");
  }
}
