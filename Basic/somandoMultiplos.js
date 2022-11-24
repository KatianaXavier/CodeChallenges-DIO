//Desafio: Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.

var a = parseInt(gets());
var N = parseInt(gets());

const conta = []

for (let i = 0; i <= N; i++){
		if(i % a === 0){
    	conta.push(i);
    }
}

let soma = 0;

for (let i = 0; i < conta.length; i++){
	soma += conta[i];
}

console.log(soma)