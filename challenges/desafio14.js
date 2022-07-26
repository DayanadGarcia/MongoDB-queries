// 14 - Crie uma query que retorne todos os lanches que possuem picles em seus ingredientes e mostre apenas os 3 primeiros itens contidos no array valoresNutricionais
db.produtos.find({
  ingredientes: "picles",
}, {
  nome: true, ingredientes: true, valoresNutricionais: { $slice: 3 }, _id: false,
});