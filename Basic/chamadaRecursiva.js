/*  Desafio: Receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0. 
    Saída: Será impresso o somatório de N até 0. */

let n = parseInt(gets());

const conta = []
let soma = 0;
   
function somatorio(n){
      
    for (let i = 0; i <= n; i++){
        conta.push(i);
    }
      
    for (let i = 0; i < conta.length; i++){
        soma += conta[i];
    }
}
    
somatorio(n);
console.log(soma)