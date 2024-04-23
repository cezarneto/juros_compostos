function calcularJurosCompostos() {
  const valorInicial = parseFloat(document.getElementById("valorInicial").value);
  const aporteMensal = parseFloat(document.getElementById("aporteMensal").value);
  const taxaJuros = parseFloat(document.getElementById("taxaJuros").value);
  const periodo = parseFloat(document.getElementById("periodo").value);
  const tipoPeriodo = document.getElementById("tipoPeriodo").value;
  const unidadeTaxaJuros = document.getElementById("unidadeTaxaJuros").value;

  // Validação dos dados de entrada
  if (isNaN(valorInicial) || isNaN(aporteMensal) || isNaN(taxaJuros) || isNaN(periodo) || periodo <= 0) {
    alert("Preencha todos os campos com valores válidos.");
    return;
  }

  // Converter a taxa de juros para a taxa por período
  let taxaJurosPorPeriodo;
  switch (unidadeTaxaJuros) {
    case "porcento":
      taxaJurosPorPeriodo = taxaJuros / 100 / 12;
      break;
    case "mensal":
      taxaJurosPorPeriodo = taxaJuros / 100;
      break;
    case "anual":
      taxaJurosPorPeriodo = taxaJuros / 100 / 12;
      break;
    default:
      alert("Selecione uma unidade de taxa de juros válida (%, a.m. ou a.a.).");
      return;
  }

  // Cálculo do número total de períodos
  const numeroPeriodos = periodo * (tipoPeriodo === "anos" ? 12 : 1);

  // Cálculo do valor total final
  let valorTotalFinal = valorInicial;
  for (let i = 0; i < numeroPeriodos; i++) {
    valorTotalFinal = valorTotalFinal * (1 + taxaJurosPorPeriodo) + aporteMensal;
  }

  // Cálculo do valor total investido
  const valorTotalInvestido = valorInicial + aporteMensal * numeroPeriodos;

  // Cálculo do total em juros
  const totalJuros = valorTotalFinal - valorTotalInvestido;

  // Exibir os resultados na tela
  document.getElementById("valorTotalFinal").textContent = valorTotalFinal.toFixed(2);
  document.getElementById("valorTotalInvestido").textContent = valorTotalInvestido.toFixed(2);
  document.getElementById("totalJuros").textContent = totalJuros.toFixed(2);
}
