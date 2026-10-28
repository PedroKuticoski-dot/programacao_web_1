

let paragrafo = document.getElementById("Paragrafo1");
let paragrafo2 = document.getElementById("Paragrafo2");

//paragrafo.textContent = "Paragrafo atualizado";


//Mudando a cor do parágrafo com botões
function mudarParag(){
    paragrafo.textContent = "Paragrafo atualizado";
    
}

function mudarParagrafo1(){ 
    paragrafo.style.color = "blue"
    paragrafo.textContent = "Paragrafo 1 (Azul)";
}
function mudarParagrafo2(){ 
    paragrafo.style.color = "red"
    paragrafo.textContent = "Paragrafo 1 (Vermelho)";
}
function voltarParagrafo(){
    paragrafo.style.color = "black"
    paragrafo.textContent = "Paragrafo 1 (Padrão)";
}



//mudar a cor da div com mouseover e mouseout
function mudarCorDiv(){
    div1.style.backgroundColor = "pink";
    paragrafo2.style.color = "pink";
}
function voltarCorDiv(){
    div1.style.backgroundColor = "black";
    paragrafo2.style.color = "black";
}