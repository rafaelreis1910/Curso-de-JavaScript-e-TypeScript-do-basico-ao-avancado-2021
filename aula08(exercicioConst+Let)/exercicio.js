/*Rafael Rodrigues Dos Reis tem 24 anos, pesa 86 tem 1,8 de altura e seu imc é de 25.92321128 e nasceu em 1996*/

const nome = 'Rafael';
const sobrenome = 'Rodrigues Dos Reis';
const idade = '24';
const peso = '86';
const altura = '1.80';
let imc; /*peso dividido por (altura vezes altura) */
let anoNascimento;

imc = peso / (altura * altura)
console.log(imc)

anoNascimento = idade - 2021
console.log(anoNascimento)