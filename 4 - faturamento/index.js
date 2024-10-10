let faturamentoPorEstados = [
  { estado: "SP", fatura: 67836.43 },
  { estado: "RJ", fatura: 36678.66 },
  { estado: "MG", fatura: 29229.88 },
  { estado: "ES", fatura: 27165.48 },
  { estado: "Outros", fatura: 19849.53 },
];

let totalFaturamento = faturamentoPorEstados.reduce(function (
  faturaTotalizada,
  faturamento
) {
  return (faturaTotalizada += faturamento.fatura);
},
0);

let frequenciaRelativa = faturamentoPorEstados.map((e) => {
  let frequenciaRelativaPercentis = (e.fatura / totalFaturamento) * 100;
  console.log(`${e.estado} =  ${frequenciaRelativaPercentis.toFixed(2)}%`);
});
