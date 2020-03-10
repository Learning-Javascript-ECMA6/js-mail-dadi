// ESERCIZIO 2 : Gioco dei dadi, chi fa di più vince;

//assegno variabile giocatori
// eseguo calcolo random
//eseguo comparazione per far comparire le immagini durante il gioco e stampo
//eseguo altra comparazione per risultato scritto e stampo



// assegno variabile giocatori
var player, computer;
var foto = ["<img src='../dadi/img/uno.jpg'>","<img src='../dadi/img/due.png'>","<img src='../dadi/img/tre.jpg'>","<img src='../dadi/img/quattro.jpg'>","<img src='../dadi/img/cinque.png'>","<img src='../dadi/img/sei.jpg'>"];

  //scrivo formula per far comparire numero random giocatore 1
  player = ("player ", Math.floor(Math.random()* 6 + 1));
  //console.log(player);

  //scrivo formula per far comparire numero random giocatore 1
  computer = ( "computer", Math.floor(Math.random()* 6 + 1));
  //console.log(computer);


  // Stampo foto player
  for (var i=0; i<=6; i++) {
   if(player == i) {
    //console.log("Foto dado utente" + foto[i-1]);
    document.getElementById("result1").innerHTML = foto[i-1];
   }
  }

  // Stampo foto computer
  for (var i=0; i<=6; i++) {
   if (computer == i) {
    //console.log("foto dado pc " + foto[i - 1]);
    document.getElementById("result2").innerHTML = foto[i-1];
  }
 }

  //eseguo comparazione numeri random per stampare il risultato del vincitore
  if ( player > computer ){
   //console.log("hai vinto");
   document.getElementById("winfinal").innerHTML = "Hai vinto!!! " + " il tuo risultato è " + player ;

  }else if (player < computer)
   //console.log("hai perso");
     document.getElementById("winfinal").innerHTML = "Hai perso!!! " + " il tuo risultato è " + player ;

   else{
    //console.log("parità");
      document.getElementById("winfinal").innerHTML ="Il tuo punteggio è di parità"
   }
