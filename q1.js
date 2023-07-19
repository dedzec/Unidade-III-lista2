/* Questão: 1. Faça um programa que leia um número inteiro e informe se
 *      ele é perfeito ou não. Um número perfeito é aquele que é igual
 *      à soma de seus divisores. Ex.: 6 = 1 + 2 + 3 = número perfeito
 * Autor: Lucas Leal Magalhães
 * Data: 18/06/2023
 **/
const prompt = require('prompt-sync')();

function start() {
  let value = 1;
  let div = 0;
  let num = parseInt(prompt('Digite uma número: '), 10);
  if (!isNaN(num)) {
    while (value < num) {
      if (num % value == 0) {
        div += value;
      }
      value++;
    }

    if (div == num) {
      console.log(`${div} é um numero perfeito!`);
    } else {
      console.log(`${div} não é um numero perfeito!`);
    }
  } else {
    console.log('Você não digitou um número');
  }
}

start();
