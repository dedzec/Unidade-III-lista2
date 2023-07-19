/* Questão: 5. Pedrinho está implementando o sistema de controle de pagamentos
 *      parcelados de uma grande empresa de cartão de crédito digital. Os
 *      clientes podem parcelar as compras sem juros no cartão, em até 18 vezes.
 *      Quando o valor V da compra é divisível pelo número P de parcelas que o
 *      cliente escolhe, todas as parcelas terão o mesmo valor. Por exemplo, se
 *      o cliente comprar um livro de V=30 reais em P=6 vezes, então as parcelas
 *      terão valores: 5, 5, 5, 5, 5 e 5. Mas se o valor da compra não for divisível
 *      pelo número de parcelas será preciso fazer um ajuste, pois a empresa quer que
 *      todas as parcelas tenham sempre um valor inteiro e somem no total, claro, o
 *      valor exato da compra. O que Pedrinho decidiu foi distribuir o resto da divisão
 *      de V por P igualmente entre as parcelas iniciais. Por exemplo, se a compra
 *      for de V=45 e o número de parcelas for P=7, então as parcelas terão
 *      valores: 7, 7, 7, 6, 6, 6 e 6. Quer dizer, como o resto da divisão de
 *      45 por 7 é 3, então as 3 parcelas iniciais devem ter valor um real maior do
 *      que as 4 parcelas finais. Você precisa ajudar Pedrinho e escrever um programa que,
 *      dado o valor da compra e o número de parcelas, imprima os valores de cada parcela.
 *      O programa deve receber como entrada o valor de V, representando o valor da compra
 *      e o valor de P, indicando o número de parcelas. A saída deve ser as parcelas.
 * Autor: Lucas Leal Magalhães
 * Data: 18/06/2023
 **/
const prompt = require('prompt-sync')();

function start() {
  let compra = parseFloat(prompt('Digite o balor da compra: R$'));
  let parcela = parseInt(prompt('Digite o número de parcelas: '), 10);

  if (!isNaN(compra) && !isNaN(parcela)) {
    let resto = 45 % parcela;

    let parcelas = [];
    for (let i = 0; i < parcela; i++) {
      let p = parseInt(45 / parcela);
      if (i < resto) {
        p += 1;
      }
      parcelas.push(p);
    }

    console.log(`Parcelas: ${parcelas}`);
  } else {
    console.log('Você não digitou um número');
  }
}

start();
