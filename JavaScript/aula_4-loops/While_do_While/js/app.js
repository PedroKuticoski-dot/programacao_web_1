/*
A diferença do While e Do Whie 
1 - While verifica a condiçao antes de entra em loop
  1.1 - While verifica a condiçao antes de entra no loop
  1.2 - Tem um contador e variavel de escape do loop
2 - Do While 
  1.1 - Primeiro executa o loop, depois testa 
  1.2 - Usado quando se precisa  executar o loop pelo menos 1 vez 
  1.3 - Escapa do loop apenas se a variavel atender a condçao 

*/

//While 
let num1 = 0
while(num1 <= 5){
console.log(`${(1 + num1 )}° rodada`)
 num1++
}

//EXEMPLO 2 tabuada

let num3 = 0
let num2 = 2
while(num3 <= 10){
console.log(`${num2} x ${(num2 * num3)}`)
 num1++
}


