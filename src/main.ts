import 'zone.js/dist/zone';

let title = "Tabata Timer";
document.getElementById('app').innerHTML = title;

let acao = '-';
let ciclo = 0;
let tempo = 5;
let intervalId = setInterval(() => {
  if (ciclo < 1) acao = 'Preparar!'
});