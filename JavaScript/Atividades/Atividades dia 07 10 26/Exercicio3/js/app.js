Idade = Number(prompt("Digite sua idade:"));
if (Idade >= 18) {
    plano = Number(prompt("Digite o plano desejado:\n 1 - Plano Básico \n 2 - Plano Pro \n 3 - Plano VIP"));

    switch (plano) {
        case 1:
            alert("Você escolheu o Plano Básico \n benefícios: acesso a recursos exclusivos.");
            break;
        case 2:
            alert("Você escolheu o Plano Pro \n benefícios: acesso a recursos exclusivos, suporte prioritário.");
            break;
        case 3:
            alert("Você escolheu o Plano VIP \n benefícios: acesso a recursos exclusivos, suporte prioritário e consultoria personalizada.");
            break;
        default:
            alert("Opção inválida.");
            break;
    }
}
else {
    alert("Acesso bloqueado.");
}