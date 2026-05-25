const carro = {
    modelo: "Celta 2008",
    ano: 2026,
    valor: "R$ 19.000,00",
    cor: "Cinza",
    ligar: function () {
        console.log("Carro ligado!");
    }
}
console.log(carro.modelo);
carro.ligar()