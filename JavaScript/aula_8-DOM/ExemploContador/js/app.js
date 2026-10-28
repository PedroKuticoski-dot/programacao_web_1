let valorDoElemento = document.getElementById("Valor")
let btnMais = document.getElementById("btnMais")
let btnMenos = document.getElementById("btnMenos")

let contador = 0

btnMais.addEventListener('click',() =>
    {
    contador++
    valorDoElemento.textContent = contador
    }
)

btnMenos.addEventListener('click',() =>
    {
    contador--
    valorDoElemento.textContent = contador
    }
)

if(contador < 0){
    valorDoElemento.style.color = "Red"
}
