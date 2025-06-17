const dia = document.getElementById("dia");
const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");
const segundo = document.getElementById("segundo");

const lancamento = "2025-10-12T00:00:00"; // Meu aniversário kkkkk

function countDown() {
  const dataLancamento = new Date(lancamento);
  const diaHoje = new Date();

  const segTotal = (dataLancamento - diaHoje) / 1000;

  if (segTotal < 0) {
    dia.innerHTML = "00"
    hora.innerHTML = "00"
    minuto.innerHTML = "00"
    segundo.innerHTML = "00"
    return;
  }

  const finalDias = Math.floor(segTotal / 60 / 60 / 24);
  const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
  const finalMinutos = Math.floor(segTotal / 60) % 60;
  const finalSegundos = Math.floor(segTotal) % 60;

  dia.innerHTML = formatacaoTempo(finalDias);
  hora.innerHTML = formatacaoTempo(finalHoras);
  minuto.innerHTML = formatacaoTempo(finalMinutos);
  segundo.innerHTML = formatacaoTempo(finalSegundos);
}

function formatacaoTempo(tempo) {
    return tempo <= 10 ? `0${tempo}` : tempo
}

countDown();
setInterval(countDown, 1000)