alert("Bem vindo a aula de switch case")
let num1 = Number(prompt("Digite o primeiro numero"))
let num2 = Number(prompt("digite o segundo numero"))

let escolha = Number(prompt("digite 1 para soma e 2 para multiplicaçao"))

switch(escolha){
    case 1:
        let soma = num1 + num2
        console.log(`voce escolheu soma. O valor da soma é: ${soma}`)
       // console.log("voce escolheu soma. O valor da soma é:" + soma)
       break
       case 2:
       let mult = num1 * num2
       console.log(`voce escolheu multiplicaçao. O valor do produto e : ${mult}  `)
       break
       default:
        console.log("ERRO! escolha invalida")
    }
