/* Questão: 4. Dona Lesma é esportista e aventureira e definiu como objetivo
 *      deste verão alcançar o topo do muro do jardim em que vive. A cada dia,
 *      valente e metodicamente ela sobe exatamente uma certa distância (sempre
 *      a mesma a cada dia). Mas a cada noite enquanto dorme Dona Lesma escorrega
 *      para baixo uma outra distância (sempre a mesma a cada noite) ... Dadas a
 *      altura do muro, a distância que ela sobe a cada dia e a distância que ela
 *      desce a cada noite, ajude Dona Lesma a calcular quantos dias ela levará para
 *      chegar ao topo do muro. altura = 10000 subida = 100 descida = 50
 * Autor: Lucas Leal Magalhães
 * Data: 18/06/2023
 **/

function start() {
  const altura = 10000;
  const subida = 100;
  const descida = 50;
  let dia = 0;
  let distancia = 0;

  while (altura > distancia) {
    distancia += subida - descida;
    dia++;
  }

  console.log(`${dia} dias para subir o muro!`);
}

start();
