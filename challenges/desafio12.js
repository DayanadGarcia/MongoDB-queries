// 12 - Adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken, garantindo que não haja duplicidade nos ingredientes
db.produtos.updateMany({
  $nor: [{ ingredientes: "ketchup" }, { nome: "McChicken" }],
}, {
  $push: { ingredientes: "ketchup" },
});
db.produtos.find({}, {
  nome: true, _id: false, ingredientes: true,
});
