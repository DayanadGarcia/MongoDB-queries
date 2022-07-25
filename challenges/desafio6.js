// 6 - Retorne o nome e as curtidas dos lanches que tiveram curtidas maiores que 10 e menores que 100
db.produtos.find({
  curtidas: { $gt: 10, $lt: 100 },
}, {
  nome: true, curtidas: true, _id: false,
});