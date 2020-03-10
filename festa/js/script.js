//ESERCIZIO 1 FESTA  :) :
// Chiedi all’utente la sua email
//controlla che sia nella lista di chi può accedere
// stampa un messaggio appropriato;

//creo mia lista email
//chiedo all'utente di inserire la sua email
//verifico inserimento email utente
//stampo messaggio se invitato alla FESTA
//oppure stampo messaggio se non è invitato alla FESTA

//creo la mia lista invitati utilizzando un array
var list =["primo@gmail.com", "secondo@gmail.com","terzo@gmail.com","quarto@gmail.com","quinto@gmail.com","sesto@gmail.com","settimo@gmail.com","nono@gmail.com","decimo@gmail.com"];
console.log(list);

//provo ad inserire funzione
function prova() {
//console.log(prova);

//chiedo all'utente di inserire il suo nome
var nome = prompt("Ciao, come ti chiami?")
//console.log(nome);

//chiedo all'utente di inserire la sua email utilizzando prompt e assegnando variabile input
var mail = prompt("ciao, "+ nome + " inserisci il tuo indirizzo mail per partecipare alla festa");
//console.log(mail);

//creo variabile 
var invito = false;

//verifico inserimento email utente
for (var i = 0; i <= list.length; i++) {
 //console.log(list[i] , i)
 if (mail === list[i]){
   invito = true;
 }
}

if (invito == true){
  //se è in lista partecipa
  document.getElementById("wide").innerHTML = ("Benvenuto alla festa " + nome + " la parola d'ordine è FIDELIO" + "<img src='../festa/img/tom.jpg'>");
  //altrimenti non partecipa
}else{ 
 document.getElementById("shut").innerHTML =("Pensavi di imbucarti alla festa " + nome + " ? Il tuo nome non è nella lista, ti affido a questi due.." + "<img src='../festa/img/fidelio.jpg'>");
}
}
