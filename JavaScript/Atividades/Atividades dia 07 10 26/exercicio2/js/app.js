codigos = Number(prompt("Digite o numero do combo:\n 1 - Combo Bug (Hambúrguer + Refri) \n 2 - Combo Deploy (Pizza + Suco) \n 3 - Combo Sênior (Salada + Água)"))

switch (codigos) {
    case 1:
        alert("R$20.00 - Combo Bug: Hambúrguer + Refri");
        break;
    case 2:
        alert("R$25.00 - Combo Deploy: Pizza + Suco");
        break;
    case 3:
        alert("R$10.00 - Combo Sênior: Salada + Água");
        break;
    default:
        alert("Opção inválida");
        break;
}