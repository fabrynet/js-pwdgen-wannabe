// Chiedi all’utente il suo nome,
var nome = prompt("Inserisci il tuo nome");

// poi chiedi il suo cognome,
var cognome = prompt("Inserisci il tuo cognome");

// poi chiedi il suo colore preferito.
var colore = prompt("Inserisci il tuo colore preferito");

// Infine scrivi sulla pagina nomecognomecolorepreferito19
var numeroRandom = 19;
var password = nome + cognome + colore + numeroRandom;
console.log("valore restituito: " + password);
document.getElementById('hello').innerHTML = "Ciao: " + nome;
document.getElementById('password').innerHTML = "La tua password è: " + password;
document.getElementById('welcome').innerHTML = "Benvenuto nel fantastico mondo di Javascript.";
