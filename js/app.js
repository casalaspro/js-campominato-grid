/*

Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno: :party_wizard:
Andate per stemp.
Sono tutti problemi che avete gia affrontato singolarmente negli esercizi precedenti:
recuperare uno o più elementi dal DOM
stampare i numeri da 1 a 100
inserire n elementi nel DOM
aggiungere un click ad un elemento
aggiungere e togliere una classe ad un elemento
Questa volta però sono combinati insieme per formare un problema più articolato e complesso. Scomponiamo quindi il problema nei suoi sotto problemi più semplici.

*/

// creare prima la parte html

// <div class="cell">1</div>

// attribuire eventListener al bottone play che:
  // crei un ciclo da 1 a 100 che:
    // crei un div
    // gli aggiunga la classe .cell
    // crei de testo
    // appenda il teso al div
    // appenda il div al contenitore
    // aggiunga un eventListener al div che:
      // aggiunga o tolga la classe .cyan
      // scriva in console il numero della cella cliccata