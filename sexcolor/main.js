//chiedere il nome e il sesso a due utenti
//stampare in pagina il nome a seconda del sesso, rosa se è una donna, blu se è un uomo


//chiedo all'user1 nome e sesso
var nomeUser1 = nomeUser();

var sessoUser1 = sessoUser();

//chiedo all'user 2 nome e sesso
var nomeUser2 = nomeUser();

var sessoUser2 = sessoUser();


//dichiaro variabili per stampa in pagina
var element1 = document.getElementById("user1");

var element2 = document.getElementById("user2");

//condizioni che verificano se uomo o donna e colorano il testo per l'user 1
if(sessoUser1 === "uomo"){

    element1.classList = "uomo";
    element1.style.color = "blue"

} else if (sessoUser1 === "donna"){
    
    element1.classList = "donna"
    element1.style.color = "pink"
}

//condizioni che verificano se uomo o donna e colorano il testo per l'user 2
if(sessoUser2 === "uomo"){

    element1.classList = "uomo";
    element1.style.color = "blue"

} else if (sessoUser2 === "donna"){
    
    element2.classList = "donna"
    element2.style.color = "pink"
}


//stampa in pagina del risultato finale
document.getElementById("user1").innerHTML = "Ciao, " + nomeUser1 + "!";

document.getElementById("user2").innerHTML = "Ciao, " + nomeUser2 + "!";




//blocco funzioni

//funzione che chiede nome utente
function nomeUser(nome){

    nome = prompt("Qual è il tuo nome?")
   
    return nome
}


//funzione che chiede sesso utente
function sessoUser(genere){

    genere = prompt("Sei uomo o donna?")

        if(genere != "uomo" && genere != "donna"){

            alert("Non fare lo scemo!");

        }

    return genere
}
