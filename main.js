
//DEFINIZIONE VARIABILI IN INPUT
let kmPercorso = prompt("Quanti km vuoi percorrere?");
let etaPasseggero = prompt("Quanti anni hai?");
let prezzoBase = (kmPercorso*0.21);

//Definizione variabili utili
let prezzoOver = 0;
let prezzoUnder = 0;

//Applicazione sconti
if (etaPasseggero <= 18){
    prezzoUnder = (prezzoBase * (80/100));
    prezzoUnder = prezzoUnder.toFixed(2)
    document.writeln('Il prezzo del tuo biglietto è ' + prezzoUnder + '€');
    console.log('Prezzo biglietto under 18 ' + prezzoUnder + '€');
} else if (etaPasseggero >= 65){
    prezzoOver = (prezzoBase * (60/100));
    prezzoOver = prezzoOver.toFixed(2)
    document.writeln('Il prezzo del tuo biglietto è ' + prezzoOver + '€');
    console.log('Prezzo biglietto over 65 ' + prezzoOver + '€');
} else{
    prezzoBase=prezzoBase.toFixed(2)
    document.writeln('Il prezzo del tuo biglietto è ' + prezzoBase + '€');
}

console.log('Prezzo del biglietto se non soggetto a sconti ' + prezzoBase.toFixed(2) + '€');