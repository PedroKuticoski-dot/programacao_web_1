console.log("Bem vindo a nossa tabuada")

/*
estrutura do for

Se divide em 3 partes:
1° parte - variável contadora
2° parte - condição
3° parte - incremento

for(let i = 1; i <= 5; i++){
console.log(`${i}° volta do loop`) 
}

alert("Bem vindo a nossa tabuada")
let escolha = Number(prompt("Escolha o numero da sua tabuada"))
console.log("Calculadora")
for(let i = 0; i <= 10; i++){
    console.log(`${escolha} * ${i} = ${escolha * i}\n`)
}


//controles de loops


//break - interrompe o loop quando a condição for atendida
alert("Bem vindo a nossa tabuada")
let escolha = Number(prompt("Escolha o numero da sua tabuada"))
for(let i = 0; i <= 10; i++){
    if(i == 5){
        break
    }
    console.log(`${escolha} * ${i} = ${escolha * i}\n`)
}
*/
//continue - pula a iteração quando a condição for atendida
alert("Bem vindo a nossa tabuada")
let escolha = Number(prompt("Escolha o numero da sua tabuada"))
console.log("Calculadora")
for(let i = 0; i <= 10; i++){
    if(i == 5){
        continue
    }
    console.log(`${escolha} * ${i} = ${escolha * i}\n`)
}
