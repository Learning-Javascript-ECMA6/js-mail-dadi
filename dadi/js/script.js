// ESERCIZIO 2 : Gioco dei dadi, chi fa di più vince;

//assegno variabile giocatori
// eseguo calcolo random
//stampo il risultato

// assegno variabile giocatori
var player, computer;

//inserisco funzione per associare il risultato al button
function gioco() {
//console.log(gioco);

  //scrivo formula per far comparire numero random giocatore 1
  player = ("player ", Math.floor(Math.random()* 6 + 1));
  //console.log(player);

  //scrivo formula per far comparire numero random giocatore 1
  computer = ( "computer", Math.floor(Math.random()* 6 + 1));
  //console.log(computer);


  //eseguo comparazione numeri random
  if ( player > computer ){
   //console.log("hai vinto");
   document.getElementById("btn").innerHTML = "Hai vinto!!!" + "il tuo risultato è " + player ;

  }else if (player < computer)
   //console.log("hai perso");
     document.getElementById("btn").innerHTML = "Hai perso!!!" + "il tuo risultato è " + computer ;

   else{
    //console.log("parità");
      document.getElementById("btn").innerHTML ="Il tuo punteggio è pari"
   }
}
