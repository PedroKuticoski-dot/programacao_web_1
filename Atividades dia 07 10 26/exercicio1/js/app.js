

Nome = prompt("Digite seu nome: ")
nota1 = parseFloat(prompt("Digite a primeira nota: "))
nota2 = parseFloat(prompt("Digite a segunda nota: "))
media = (nota1 + nota2) / 2
if (media >= 6.0) {
    console.log("Nome:"+ Nome + "|Média:" + media + "|Aluno Aprovado");
} else {
    console.log("Nome:" + Nome + "|Média:" + media + "|Aluno Reprovado");
}