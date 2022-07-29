// 22 - Adicione a quantidade de vendas dos sanduíches por dia da semana
db.produtos.updateMany({}, {
  $set: {
    vendasPorDia: [0, 0, 0, 0, 0, 0, 0] },
});

db.produtos.updateOne({
  nome: "Big Mac",
}, {
  $set: {
    "vendasPorDia.3": 60 },
});

db.produtos.updateMany({
  tags: "bovino",
}, {
  $set: {
    "vendasPorDia.6": 120 },
});

db.produtos.find({}, {
  nome: true, vendasPorDia: true, _id: false,
});