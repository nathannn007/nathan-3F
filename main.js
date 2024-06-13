const botoes = document.querySelectorAll(".botao")
const conteudo = document.querySelectorAll(".aba-conteudo")
const contador = document.querySelectorAll(".contador")
for (let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){
      for (let j = 0; j < botoes.length; j++){
           botoes[j].classList.remove("ativo")
           conteudo[j].classList.remove("ativo")
      }
      botoes[i].classList.add("ativo")
      conteudo[i].classList.add("ativo")
  }
}
