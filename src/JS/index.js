/*
OBJETIVO 1-  quando clicarmos na seta de avançar temos que mostrat o próximo cartão da lista
    -passo 1- dar um jeito de pegar o elemento HTML da seta avançar 
    -passo 2- dar um jeito de identificar o clique do usuario na seta avançar
    -passo 3- fazer aparecer o proximo cartão da lista
    -passo 4- buscar o cartão que está selecionado e esconder
    
OBJETIVO 2- quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
    -passo 1- dar um jeito de pegar o elemento em HTML da seta voltar 
    -passo 2- dar um jeito de identificar o clique do usuario na seta voltar
    -passo 3- fazer aparecer o cartão anterior da lista
    -passo 4- buscar o cartão que está selecionado e esconder
*/

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function () {
  esconderCartaoSelecionado();

  // Se estiver no último, volta para o primeiro
  cartaoAtual = (cartaoAtual + 1) % cartoes.length;

  mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener("click", function () {
  esconderCartaoSelecionado();

  // Se estiver no primeiro, vai para o último
  cartaoAtual = (cartaoAtual - 1 + cartoes.length) % cartoes.length;

  mostrarCartao(cartaoAtual);
});
