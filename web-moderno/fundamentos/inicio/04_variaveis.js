var produto = "Caneta";
var quantidade = 10;
var preco = 6.4;
var imposto = 1.5;
var precoFinal = preco + imposto;
let desconto = 0.1;

console.log(produto);
console.log(quantidade);
console.log(preco);
console.log(imposto);
console.log(precoFinal);

console.log("Desconto: " +  (preco * (1 - desconto)).toFixed(2));