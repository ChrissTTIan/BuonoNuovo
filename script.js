function attivatop(num){  //attiva quello cliccato della topbar
  console.log("ci sono");
var x = document.getElementById(num);
if (x.className === "nada"){
  x.className+=" attivo";
}
else {
  x.className="nada";
}
}

function attivalat(num){
console.log("ci sono anche qui");
var x = document.getElementById(num);
if(num=="link1"){
  if(x.className==="nada"){
  x.className+=" attivo";
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
