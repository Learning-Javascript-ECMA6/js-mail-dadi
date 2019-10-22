// ESERCIZIO 2 : Gioco dei dadi, chi fa di più vince;

//assegno variabile giocatori
// eseguo calcolo random
//eseguo comparazione per far comparire le immagini durante il gioco e stampo
//eseguo altra comparazione per risultato scritto e stampo



// assegno variabile giocatori
var player, computer;

//inserisco funzione per associare il risultato al button

//console.log(gioco);

  //scrivo formula per far comparire numero random giocatore 1
  player = ("player ", Math.floor(Math.random()* 6 + 1));
  //console.log(player);

  //scrivo formula per far comparire numero random giocatore 1
  computer = ( "computer", Math.floor(Math.random()* 6 + 1));
  //console.log(computer);

 // inserisco immagini da far comparire durante il gioco - vittoria player
  if (player == 1) {
    document.getElementById("result1").innerHTML = "<img src='../dadi/img/uno.jpg'>";
  } else if (player == 2) {
    document.getElementById("result1").innerHTML = "<img src='../dadi/img/due.png'>";
  } else if (player == 3) {
    document.getElementById("result1").innerHTML = "<img src='../dadi/img/tre.jpg'>";
  } else if (player == 4) {
    document.getElementById("result1").innerHTML = "<img src='../dadi/img/quattro.jpg'>";
  } else if (player == 5) {
    document.getElementById("result1").innerHTML = "<img src='../dadi/img/cinque.png'>";
  } else if (player == 6) {
    document.getElementById("result1").innerHTML = "<img src='../dadi/img/sei.jpg'>";
  }

  // inserisco immagini da far comparire durante il gioco - vittoria computer
  if (computer == 1) {
    document.getElementById("result2").innerHTML = "<img src='../dadi/img/uno.jpg'>";
  } else if (computer == 2) {
    document.getElementById("result2").innerHTML = "<img src='../dadi/img/due.png'>";
  } else if (computer == 3) {
    document.getElementById("result2").innerHTML = "<img src='../dadi/img/tre.jpg'>";
  } else if (computer == 4) {
    document.getElementById("result2").innerHTML = "<img src='../dadi/img/quattro.jpg'>";
  } else if (computer == 5) {
    document.getElementById("result2").innerHTML = "<img src='../dadi/img/cinque.png'>";
  } else if (computer == 6) {
    document.getElementById("result2").innerHTML = "<img src='../dadi/img/sei.jpg'>";
  }


  //eseguo comparazione numeri random
  if ( player > computer ){
   //console.log("hai vinto");
   document.getElementById("winfinal").innerHTML = "Hai vinto!!! " + " il tuo risultato è " + player ;

  }else if (player < computer)
   //console.log("hai perso");
     document.getElementById("winfinal").innerHTML = "Hai perso!!! " + " il tuo risultato è " + computer ;

   else{
    //console.log("parità");
      document.getElementById("winfinal").innerHTML ="Il tuo punteggio è di parità"
   }
