// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
//Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. 
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

//creo un arrayvuoto in cui inserire i numeri generati randomicamente
var numeri = [];

var numRand;

//creo un ciclo while per dire all'arrat di riempisi con 5 numeri (per i fini dell'esercizio ho settato da 1 a 20)
while (numeri.length < 5){

    numRand = numRandom(1,20);

    if (numeri.includes(numRand) == false){ //condizione che fa sì che un numero doppio non venga ripetutamente inserito

        numeri.push(numRand);
    }

}

console.log(numeri);


//con un alert avvisiamo l'utente di che numeri sono usciti
var numbers = alert("I numeri sono: " + numeri + ". Tienili a mente!");

//creo un array vuoto in cui inserire i numeri scelti dall'utente
userNum = [];

//creo una variabile per il punteggio che imposto a 0
punti = 0;


//creo una variabile per verificare quanti numeri dell'array originale ho beccato
numeriPresi = 0;


//creo una funzione che dopo 30 secondi chieda all'utente 5 numeri
var memory = setTimeout(after30, 30000);

function after30(){

    while(userNum.length < 5){ //ciclo while per far fermare il ciclo a 5

    var userChoice = userNumber(); //funzione che chiede un numero

    if(userChoice > 0 && userChoice < 20 && !isNaN(userChoice)){ //condizione che verifica che il numero sia <20, >0 ed effettivamente un numero

        if(userNum.includes(userChoice)){

            alert("Non barare! Usa un numero che non hai ancora usato!")

        } else { //se le condizioni vengono rispettate, insersci il numero nell'array

            userNum.push(userChoice);

            if(numeri.includes(userChoice)){ //verifico se il numero inserito non sia presente nell'array di numeri randomici e in caso aggiungo +1 al punteggio

                numeriPresi++;
            
            } else{

                punti++;

            }

        }

    } else { //questo compare se si cerca di inserire un numero superiore a 20, inferiore o uguale a 0 o lasciare il campo vuoto

        alert("Inserisci un valore valido!")

    }
}
    console.log(userNum);

    //stampa in pagina i numeri randomici ai fini di verifica per l'user
    document.getElementById("randomNum").innerHTML = "I numeri estratti dal pc erano: " + numeri;    

    //stampa in pagina dei numeri scelti dall'user   
    document.getElementById("num").innerHTML = "I numeri che hai inserito sono: " + userNum;    

    //e i numeri che ha "preso" col suo punteggio
    document.getElementById("risultato").innerHTML = "Hai inserito " + numeriPresi + " numeri che c'erano già! Hai totalizzato " + punti + " punti!"
}





//blocco funzioni

//funzione che calcola un numero random in un determinato range
function numRandom(min,max){

    min = Math.ceil(min);
  
    max = Math.floor(max);
  
    return Math.floor(Math.random()* (max-min)) + min;
  
  }


//funzione che chiede all'utente di inserire un numero tramite prompt
function userNumber(sceltaNum){

    sceltaNum = parseInt(prompt("Dimmi un numero da 1 a 20!"));

    return sceltaNum

}