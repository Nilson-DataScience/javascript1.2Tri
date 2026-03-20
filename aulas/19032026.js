// Revisão 

//Tipos primitivos

//Números
let numero = 30
let decimal = 20.30

// String
let nome = "não sei, você não sabe?"
let nome1 = "NÃO SEI, VOCÊ NÃO SABE?"

console.log(nome === nome1); // false

const inputMinusculo = nome1.toLowerCase();

console.log(nome === inputMinusculo); // true

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres


// Booleanos

let nv = true;
let nz = false;

if(nv!==nz){
    console.log(`nv é diferente, pois ele é ${nv}`)
}