import 'zone.js/dist/zone';

let title = 'Tabata Timer';
document.getElementById('app').innerHTML = title;
let acao = '-';
let ciclo = 0;
let tempo = 5;
let intervalId = setInterval(() => {
  if (ciclo < 1) acao = 'Preparar!';
  else if (ciclo > 8) acao = 'Sessão concluída com sucesso!';
  else if (tempo > 10) acao = 'Comece o exercício!';
  else acao = 'Você pode descansar (=';
  document.getElementById('acao').innerHTML = acao;

  if (ciclo >= 1 && ciclo <= 8) {
    document.getElementById('ciclo').innerHTML = ciclo.toString();
  } else {
    document.getElementById('ciclo').innerHTML = '-';
  }
  if (ciclo <= 8) {
    document.getElementById('tempo').innerHTML = tempo.toString();
  } else {
    document.getElementById('tempo').innerHTML = '-';
  }

  tempo -= 1;
  if (tempo == 0) {
    ciclo += 1;
    tempo = 30;
  }
}, 1000);