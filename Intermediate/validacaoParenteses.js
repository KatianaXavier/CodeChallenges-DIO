/*Desafio:
Dada uma string com apenas os seguintes caracteres '(', ')', '{', '}', '[', ']' determine se uma determinada string é válida. 

Entrada:
Uma string é considerada válida se:

Caracteres de abertura devem ser fechadas pelo mesmo tipo. Abertura devem ser fechados com uma chave correspondente. Uma string vazia é considerada válida. 

Saída:
A saída corresponde a um valor Booleano*/

let valor = gets()

print(isValid(valor))

function isValid(s) {    
    
  let letras = s.split('')
  const stack = ["(",")","{","}","[","]"]; 
  let b = false
  
  for(let i = 0; i < stack.length; i++){
    if ((letras[0] === stack[i]) && (letras[1] === stack [i + 1])){
     b = true;
    } 
  }
  return b;
}