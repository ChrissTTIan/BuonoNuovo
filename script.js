function attivatop(num){  //attiva quello cliccato della topbar
  console.log("ci sono");
var x = document.getElementById(num);
if (x.className === "nada"){
  x.className+=" attivo";
}
else {
  x.className="nada"
}
}
