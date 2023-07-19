/* Questão: 3. Escreva um programa para verificar se um número é
 *      palíndromo (Número que é igual ao seu reverso Ex.: 14541)
 * Autor: Lucas Leal Magalhães
 * Data: 18/06/2023
 **/
const prompt = require('prompt-sync')();

function start() {
  let entrada = parseInt(prompt('Digite um número: '), 10);

  if (!isNaN(entrada)) {
    let num = entrada.toString();
    let palindrome = true;
    for (let i = 0; i < num.length; i++) {
      if (num[i] !== num[num.length - 1 - i]) {
        palindrome = false;
      }
    }

    if (palindrome) {
      console.log(`O número ${entrada} é um palindrome!`);
    } else {
      console.log(`${entrada} não é um palindrome`);
    }
  } else {
    console.log('Você não digitou um número');
  }
}

start();
