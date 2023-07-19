/* Questão: 2. Faça um programa que solicite um número inteiro de até
 *      4 dígitos ao usuário e inverta a ordem de seus algarismos.
 *      Ex.: Entrada = 5382 - Saída = 2835
 * Autor: Lucas Leal Magalhães
 * Data: 18/06/2023
 **/
const prompt = require('prompt-sync')();

function start() {
  let num = parseInt(prompt('Digite uma número: '), 10);

  if (!isNaN(num)) {
    const numString = num.toString();
    let numRev = '';
    for (let i = numString.length - 1; i >= 0; i--) {
      numRev += numString[i];
    }
    console.log(`Entrada = ${num} - Saída = ${numRev}`);
  } else {
    console.log('Você não digitou um número');
  }
}

start();
