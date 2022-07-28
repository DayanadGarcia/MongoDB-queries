// 19 - Remova o item cebola de todos os sanduíches
db.produtos.updateMany({}, {
  $pull: {
    ingredientes: "cebola",
  },
});

db.produtos.find({}, {
  nome: true, ingredientes: true, _id: false,
});