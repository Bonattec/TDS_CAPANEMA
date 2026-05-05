let temDinheiro = false
let estaChovendo = false
let carroEstaNaGaragem = true

let logicaAND = "#AND Você vai ao cinema?"
logicaAND += temDinheiro && estaChovendo
// += é uma simplificação de logicaAND = logicaAND + temDinheiro && estaChovendo
console.log(logicaAND)

let logicaOR = "#OR Você vai ao cinema?"
logicaOR += estaChovendo || carroEstaNaGaragem
console.log(logicaOR)
