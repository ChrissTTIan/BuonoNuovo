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
} else {
  x.className ="nada"
  a.className ="nada";
  b.className ="nada";
  c.className ="nada";
  d.className ="nada";
}
}

function corsiva(num){
  console.log("bella");
  var x = document.getElementById(num);
    console.log(x.className);
    if(x.className==="nada attivotop"){
    x.className+=" corsivo";
  }else{
    x.className="nada";
  }
}
