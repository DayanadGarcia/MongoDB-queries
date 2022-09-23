// 30 - Remova o campo curtidas do item Big Mac
db.produtos.updateOne({
  nome: "Big Mac",
}, {
  $unset: {
    curtidas: 1,
  },
});