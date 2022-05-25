let a = 7;
let b = 94;


console.log("Valores: ");
console.log("A: " + a);
console.log("B: " + b);

let temp = a;

a = b;
b = temp;

console.log("Valores: ");
console.log("A: " + a);
console.log("B: " + b);


[a, b] = [b, a]
console.log("Valores [outra forma]: ");
console.log("A: " + a);
console.log("B: " + b);