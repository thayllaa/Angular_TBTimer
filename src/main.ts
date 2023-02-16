import 'zone.js/dist/zone';

let title = "Tabata Timer";
document.getElementById('app').innerHTML = title;

let acao = '-';
let ciclo = 0;
let tempo = 5;
let restartTimer = setInterval(() => {
  if (ciclo < 1) acao = 'Preparar!';
  else if (ciclo > 8 ) acao = "Sessão concluída com sucesso!";
  else if (tempo > 10) acao = "Comece o exercício!";
});;