

let frutas = [];

function adicionarFruta() {
  const inputFruta = document.getElementById('fruta');
  const fruta = inputFruta.value.trim();
  if (fruta !== '') {
    frutas.push(fruta);
    inputFruta.value = '';
    atualizarTabelaFrutas();
  }
}

function atualizarTabelaFrutas() {
  const tabelaFrutas = document.getElementById('tabelaFrutas');
  const tbody = tabelaFrutas.getElementsByTagName('tbody')[0];
  tbody.innerHTML = ''; 
  frutas.forEach((fruta, index) => {
    const row = tbody.insertRow(index);
    const cell = row.insertCell(0);
    cell.textContent = fruta;
  });
} 

function mostrarCinco() {
  const tabelaCinco = document.getElementById('TabelaCinco');
  const tbody = tabelaCinco.getElementsByTagName('tbody')[0];
  tbody.innerHTML = '';
  frutas.filter(fruta => fruta.length > 5).forEach((fruta, index) => {
    const row = tabelaCinco.insertRow(index);
    const cell = row.insertCell(0);
    cell.textContent = fruta;
  });
}

/*Não entendi direito o exercício, eu fiz da forma que entendi mas acho que entendi errado.*/