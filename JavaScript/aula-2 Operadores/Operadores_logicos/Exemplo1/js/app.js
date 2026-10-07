/* 
operadores logicos

&& -> (and/E)  logico
|| -> (or/OU) logico
! -> (NOT/NÂO) logico
*/

//Exemplos 

let num1 = 10
let num2 = 15
let num3 = 2

if(num1 >= num2){
    console.log("Entrou no if")
}else{
console.log("(falso!)NÂO ENTROU NO IF")
}

//EXEMPLO COMPOSTO 

console.log("condçoes compostas")

if((num1 >= num2) && (num1 != num3)){
    console.log("Entrou no if")
}else{
console.log("(falso!)NÂO ENTROU NO IF")
}


//EXEMPLO com 3 condiçoes 

console.log("condçoes compostas")


if(((num1 >= num2) && (num1 != num3)) || (num1 == num3)){
    console.log("Entrou no if")
}else{
console.log("(falso!)NÂO ENTROU NO IF")
}

//condiçao simples negada

console.log("Condiçao Simples negada")
i(!(num1 >= num2)){
    console.log("Entrou no if")
}else{
console.log("(falso!)NÂO ENTROU NO IF")
}