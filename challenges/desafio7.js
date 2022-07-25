// 7 - Retorne o nome e vendidos dos lanches que tenham sido vendidos com uma quantidade diferente de 50 e em que o campo tags não exista

db.produtos.find({
  $nor: [
    { vendidos: 50 },
    { tags: { $exists: true } }],
}, {
  nome: true, vendidos: true, _id: false,
});
