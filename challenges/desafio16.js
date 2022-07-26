// 16 - Adicione o campo ultimaModificacao com a data corrente somente no sanduíche Big Mac
db.produtos.update({
  nome: "Big Mac",
}, {
  $set: { ultimaModificacao: new Date() },
});

db.produtos.find(
  { ultimaModificacao: { $exists: true },
}, {
  nome: true, _id: false,
},
);