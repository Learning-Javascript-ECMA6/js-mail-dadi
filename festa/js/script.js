//ESERCIZIO 1 FESTA ( dopo aver portato fuori il cane) :) :
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

//chiedo all'utente di inserire la sua email utilizzando prompt e assegnando variabile input
var mail = prompt("ciao, inserisci il tuo indirizzo mail per partecipare alla festa");

//verifico inserimento email utente
for (var i = 0; i <= list.length; i++) {
 if (mail === list[i]){
  trovato = true ;
  //se è in lista partecipa
  console.log("benvenuto alla festa" );
  var invito = true;
 }
}

//se l email non è in lista non partecipa
if (invito !== true){
 console.log("non sei nella lista");
}
