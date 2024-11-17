calcularRank(95,10)

function calcularRank(saldoVitorias, saldoDerrotas) {
    const saldoRankeadas = saldoVitorias - saldoDerrotas;
    const ranks = {
      0: 'Ferro',
      11: 'Bronze',
      21: 'Prata',
      51: 'Ouro',
      81: 'Diamante',
      91: 'Lendário',
      101: 'Imortal'
    };
    let rank = 'Ferro'; // Valor padrão caso não encontre nenhum rank
  
    for (const limite in ranks) {
      if (saldoRankeadas >= limite) {
        rank = ranks[limite];
      }
    }
  
    console.log(`O Herói tem de saldo de ${saldoRankeadas} e está no nível de ${rank}`);
}