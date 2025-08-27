'use strict'

import produtos from "./produtos_atualizados.json" with {type: "json"}

const botaoDireitaInformatica = document.getElementById('moverParaDireitaInformatica')
const botaoEsquerdaInformatica = document.getElementById('moverParaEsquerdaInformatica')
const botaoDireitaEletronicos = document.getElementById('moverParaDireitaEletronicos')
const botaoEsquerdaEletronicos = document.getElementById('moverParaEsquerdaEletronicos')

//Variaveis para que o aplicativo saiba em qual tamanho de tela ele está rodando
const section = document.getElementById('containerInformatica')
const larguraSection = section.offsetWidth
console.log(larguraSection)

//VARIÁVEL PARA OCULTAR EXCENDENTE DE CARDS PARA A SECTION INFORMÁTICA
var informaticaVisiveis = 0
var quantidadeCardsInformatica = 0

function gerarCardInformatica(produto) {

    if (produto.categoria == 'Informática') {
        const divContainer = document.getElementById('containerInformatica')
        const card = document.createElement('div')
        const divAvaliacao = document.createElement('div')
        const pNome = document.createElement('p')
        const divImg = document.createElement('div')
        const imgProduto = document.createElement('img')
        const span = document.createElement('span')
        const divInfo = document.createElement('div')
        const pPreco = document.createElement('p')
        const divCartFav = document.createElement('div')
        const cart = document.createElement('img')
        const fav = document.createElement('img')

        //INSERINDO ELEMENTOS EM SUAS DIVS
        divContainer.appendChild(card)
        card.append(divCartFav, pNome, divImg, span, divInfo, divAvaliacao)
        divImg.appendChild(imgProduto)
        divInfo.append(pPreco, divAvaliacao)
        divCartFav.append(cart, fav)

        //ADICIONANDO ELEMENTOS AS SUAS CLASSES
        card.classList.add('card')
        pNome.classList.add('nome')
        divImg.classList.add('cardImg')
        imgProduto.classList.add('produtoCard')
        span.classList.add('descricao')
        divInfo.classList.add('preco')
        divCartFav.classList.add('cardImgs')
        divAvaliacao.classList.add('avaliacao')

        //INSERINDO DADOS NO CARD
        pNome.innerHTML = produto.nome
        imgProduto.src = produto.imagem
        span.innerHTML = produto.descricao
        pPreco.innerHTML = `R$ ${produto.preco}`
        cart.src = "./img/cartCard.png"
        fav.src = "./img/Favorite.png"

        //Código para a classificação de estrelas dos produtos
        let totalEstrelas = 0
        while (totalEstrelas < 5) {
            let avaliacaoEstrelas = document.createElement('img')
            if (totalEstrelas < produto.classificacao) {
                avaliacaoEstrelas.src = './img/redStar.png'
            } else {
                avaliacaoEstrelas.src = './img/greyStar.png'
            }
            divAvaliacao.appendChild(avaliacaoEstrelas)
            totalEstrelas++
        }

        //If e Else para controle de visualização dos cards em tamanhos de tela diferentes
        if (larguraSection <= 650) {
            if (informaticaVisiveis >= 1) {
                card.classList.add('none')
            }
        } else if (larguraSection <= 922) {
            if (informaticaVisiveis >= 2) {
                card.classList.add('none')
            }
        } else {
            if (informaticaVisiveis >= 4) {
                card.classList.add('none')
            }
        }

        informaticaVisiveis++
        quantidadeCardsInformatica++
    }
}
produtos.forEach(gerarCardInformatica)

if (informaticaVisiveis <= 4) {
    botaoDireitaInformatica.style.display = 'none'
    botaoEsquerdaInformatica.style.display = 'none'
}

//VARIÁVEL PARA OCULTAR EXCEDENTE DE CARDS PARA A SECTION DE ELETRÔNICOS
var eletronicosVisiveis = 0
var quantidadeCardsEletronico = 0

function gerarCardEletronicos(produto) {

    if (produto.categoria == 'Eletrônicos') {
        const divContainer = document.getElementById('containerEletronicos')
        const card = document.createElement('div')
        const divAvaliacao = document.createElement('div')
        const pNome = document.createElement('p')
        const divImg = document.createElement('div')
        const imgProduto = document.createElement('img')
        const span = document.createElement('span')
        const divInfo = document.createElement('div')
        const pPreco = document.createElement('p')
        const divCartFav = document.createElement('div')
        const cart = document.createElement('img')
        const fav = document.createElement('img')

        //INSERINDO ELEMENTOS EM SUAS DIVS
        divContainer.appendChild(card)
        card.append(divCartFav, pNome, divImg, span, divInfo, divAvaliacao)
        divImg.appendChild(imgProduto)
        divInfo.append(pPreco, divAvaliacao)
        divCartFav.append(cart, fav)

        //ADICIONANDO ELEMENTOS AS SUAS CLASSES
        card.classList.add('card')
        pNome.classList.add('nome')
        divImg.classList.add('cardImg')
        imgProduto.classList.add('produtoCard')
        span.classList.add('descricao')
        divInfo.classList.add('preco')
        divCartFav.classList.add('cardImgs')
        divAvaliacao.classList.add('avaliacao')

        //INSERINDO DADOS NO CARD
        pNome.innerHTML = produto.nome
        imgProduto.src = produto.imagem
        span.innerHTML = produto.descricao
        pPreco.innerHTML = `R$ ${produto.preco}`
        cart.src = "./img/cartCard.png"
        fav.src = "./img/Favorite.png"

        //Código para a classificação de estrelas dos produtos
        let totalEstrelas = 0
        while (totalEstrelas < 5) {
            let avaliacaoEstrelas = document.createElement('img')
            if (totalEstrelas < produto.classificacao) {
                avaliacaoEstrelas.src = './img/redStar.png'
            } else {
                avaliacaoEstrelas.src = './img/greyStar.png'
            }
            divAvaliacao.appendChild(avaliacaoEstrelas)
            totalEstrelas++
        }

        //If e Else para controle de visualização dos cards em tamanhos de tela diferentes
        if (larguraSection <= 650) {
            if (eletronicosVisiveis >= 1) {
                card.classList.add('none')
            }
        } else if (larguraSection <= 922) {
            if (eletronicosVisiveis >= 2) {
                card.classList.add('none')
            }
        } else {
            if (eletronicosVisiveis >= 4) {
                card.classList.add('none')
            }
        }
        eletronicosVisiveis++
        quantidadeCardsEletronico++
    }
}
produtos.forEach(gerarCardEletronicos)

if (larguraSection <= 650) {
    if (eletronicosVisiveis <= 1) {
        botaoDireitaEletronicos.style.display = 'none'
        botaoEsquerdaEletronicos.style.display = 'none'

    }
} else if (larguraSection <= 922) {
    if (eletronicosVisiveis <= 2) {
        botaoDireitaEletronicos.style.display = 'none'
        botaoEsquerdaEletronicos.style.display = 'none'

    }
} else {
    if (eletronicosVisiveis <= 4) {
        botaoDireitaEletronicos.style.display = 'none'
        botaoEsquerdaEletronicos.style.display = 'none'

    }
}



//VARIÁVEIS PARA CONTROLE DE OCULTAÇÃO E VISIBILIDADE DOS CARDS PARA O CARROSSEL MANUAL e seus diferentes valores para cada tamanho de tela
var contagemCardsDireitaInformatica
var contagemCardsEsquerdaInformartica

if (larguraSection <= 650) {
    contagemCardsDireitaInformatica = 2
    contagemCardsEsquerdaInformartica = 1

} else if (larguraSection <= 922) {
    contagemCardsDireitaInformatica = 3
    contagemCardsEsquerdaInformartica = 1

} else {
    contagemCardsDireitaInformatica = 5
    contagemCardsEsquerdaInformartica = 1

}

function rodarDireitaInformatica() {

    //O VALOR DENTRO DO CHILD É ALTERADO DE ACORDO COM OS CLIQUES DO USUÁRIO, CADA CARD SELECIONADO POR ELE É MARCADO OU DESMARCADO DA CLASSE DISPLAY:NONE
    //SE NÃO POSSUIR MAIS CARDS PARA SEREM SELECIONADOS PELO CHILD O BLOCO ELSE SERÁ EXECUTADO
    if (contagemCardsDireitaInformatica <= quantidadeCardsInformatica && contagemCardsEsquerdaInformartica >= 1) {
        botaoEsquerdaInformatica.style.backgroundColor = 'white'
        const cardDireita = document.querySelector(`#containerInformatica .card:nth-child(${contagemCardsDireitaInformatica})`)
        cardDireita.classList.toggle('none')
        contagemCardsDireitaInformatica++

        const cardEsquerda = document.querySelector(`#containerInformatica .card:nth-child(${contagemCardsEsquerdaInformartica})`)
        cardEsquerda.classList.toggle('none')
        contagemCardsEsquerdaInformartica++
    } else {
        botaoEsquerdaInformatica.style.backgroundColor = 'white'
        botaoDireitaInformatica.style.backgroundColor = 'var(--cinza_claro)'
    }
}

function rodarEsquerdaInformatica() {

    //O VALOR DENTRO DO CHILD É ALTERADO DE ACORDO COM OS CLIQUES DO USUÁRIO, CADA CARD SELECIONADO POR ELE É MARCADO OU DESMARCADO DA CLASSE DISPLAY:NONE
    //SE NÃO POSSUIR MAIS CARDS PARA SEREM SELECIONADOS PELO CHILD O BLOCO ELSE SERÁ EXECUTADO
    if (contagemCardsDireitaInformatica <= (quantidadeCardsInformatica + 1) && contagemCardsEsquerdaInformartica > 1) {
        contagemCardsDireitaInformatica--
        botaoDireitaInformatica.style.backgroundColor = 'white'
        const cardDireita = document.querySelector(`.card:nth-child(${contagemCardsDireitaInformatica})`)
        cardDireita.classList.toggle('none')

        contagemCardsEsquerdaInformartica--
        const cardEsquerda = document.querySelector(`.card:nth-child(${contagemCardsEsquerdaInformartica})`)
        cardEsquerda.classList.toggle('none')
    } else {
        botaoDireitaInformatica.style.backgroundColor = 'white'
        botaoEsquerdaInformatica.style.backgroundColor = 'var(--cinza_claro)'
    }
}


//VARIÁVEIS PARA CONTROLE DE OCULTAÇÃO E VISIBILIDADE DOS CARDS PARA O CARROSSEL MANUAL e seus diferentes valores para cada tamanho de tela
var contagemCardsDireitaEletronicos
var contagemCardsEsquerdaEletronicos

if (larguraSection <= 650) {
    contagemCardsDireitaEletronicos = 2
    contagemCardsEsquerdaEletronicos = 1

} else if (larguraSection <= 922) {
    contagemCardsDireitaEletronicos = 3
    contagemCardsEsquerdaEletronicos = 1

} else {
    contagemCardsDireitaEletronicos = 5
    contagemCardsEsquerdaEletronicos = 1

}

function rodarDireitaEletronicos() {

    //O VALOR DENTRO DO CHILD É ALTERADO DE ACORDO COM OS CLIQUES DO USUÁRIO, CADA CARD SELECIONADO POR ELE É MARCADO OU DESMARCADO DA CLASSE DISPLAY:NONE
    //SE NÃO POSSUIR MAIS CARDS PARA SEREM SELECIONADOS PELO CHILD O BLOCO ELSE SERÁ EXECUTADO
    if (contagemCardsDireitaEletronicos <= quantidadeCardsEletronico && contagemCardsEsquerdaEletronicos >= 1) {
        botaoEsquerdaEletronicos.style.backgroundColor = 'white'
        const cardDireita = document.querySelector(`#containerEletronicos .card:nth-child(${contagemCardsDireitaEletronicos})`)
        cardDireita.classList.toggle('none')
        contagemCardsDireitaEletronicos++

        const cardEsquerda = document.querySelector(`#containerEletronicos .card:nth-child(${contagemCardsEsquerdaEletronicos})`)
        cardEsquerda.classList.toggle('none')
        contagemCardsEsquerdaEletronicos++
    } else {
        botaoEsquerdaEletronicos.style.backgroundColor = 'white'
        botaoDireitaEletronicos.style.backgroundColor = 'var(--cinza_claro)'
    }
}

function rodarEsquerdaEletronicos() {

    //O VALOR DENTRO DO CHILD É ALTERADO DE ACORDO COM OS CLIQUES DO USUÁRIO, CADA CARD SELECIONADO POR ELE É MARCADO OU DESMARCADO DA CLASSE DISPLAY:NONE
    //SE NÃO POSSUIR MAIS CARDS PARA SEREM SELECIONADOS PELO CHILD O BLOCO ELSE SERÁ EXECUTADO
    if (contagemCardsDireitaEletronicos <= (quantidadeCardsEletronico + 1) && contagemCardsEsquerdaEletronicos > 1) {
        contagemCardsDireitaEletronicos--
        botaoDireitaEletronicos.style.backgroundColor = 'white'
        const cardDireita = document.querySelector(`#containerEletronicos .card:nth-child(${contagemCardsDireitaEletronicos})`)
        cardDireita.classList.toggle('none')

        contagemCardsEsquerdaEletronicos--
        const cardEsquerda = document.querySelector(`#containerEletronicos .card:nth-child(${contagemCardsEsquerdaEletronicos})`)
        cardEsquerda.classList.toggle('none')
    } else {
        botaoDireitaEletronicos.style.backgroundColor = 'white'
        botaoEsquerdaEletronicos.style.backgroundColor = 'var(--cinza_claro)'
    }
}


//Variaveis para saber quantos favoritos estão marcados
var numeroFavoritos = 0
const contagemFavoritos = document.getElementById('allFavoritos')

//Função para animação de favoritar e contabilizar
function animarIconeFavorito(imgFav) {

    imgFav.addEventListener('click', () => {
        if (imgFav.src.includes('favRed.png')) {
            imgFav.src = './img/Favorite.png'
            numeroFavoritos--

        } else if (imgFav.src.includes('Favorite.png')) {
            imgFav.src = './img/favRed.png'
            numeroFavoritos++

            imgFav.animate(
                [
                    { transform: 'scale(1.25)' },
                    { transform: 'scale(1.00)' }

                ],
                {
                    duration: 1500
                }
            )
        }

        if (numeroFavoritos <= 0) {
            contagemFavoritos.style.display = 'none'
        } else {
            contagemFavoritos.style.display = 'flex'
            contagemFavoritos.innerHTML = numeroFavoritos
        }
    })
}

//Variaveis para saber quantos carrinhos estão marcados
var numeroCarrinhos = 0
const contagemCarrinhos = document.getElementById('allCarrinhos')

//Função para animação de adicionar ao carrinho e contabilizar
function animarIconeCart(imgCart) {

    imgCart.addEventListener('click', () => {
        if (imgCart.src.includes('purpleCart.png')) {
            imgCart.src = './img/cartCard.png'
            numeroCarrinhos--

        } else if (imgCart.src.includes('cartCard.png')) {
            imgCart.src = './img/purpleCart.png'
            numeroCarrinhos++

            imgCart.animate(
                [
                    { transform: 'scale(1.25)' },
                    { transform: 'scale(1.00)' }

                ],
                {
                    duration: 1500
                }
            )
        }

        if (numeroCarrinhos == 0) {
            contagemCarrinhos.style.display = 'none'

        } else {
            contagemCarrinhos.style.display = 'flex'
            contagemCarrinhos.innerHTML = numeroCarrinhos
        }
    })

}

botaoDireitaEletronicos.addEventListener('click', rodarDireitaEletronicos)
botaoEsquerdaEletronicos.addEventListener('click', rodarEsquerdaEletronicos)
botaoEsquerdaInformatica.addEventListener('click', rodarEsquerdaInformatica)
botaoDireitaInformatica.addEventListener('click', rodarDireitaInformatica)
const imgFavorito = document.querySelectorAll('.cardImgs img:nth-child(2)')
imgFavorito.forEach(animarIconeFavorito)
const imgCarrinho = document.querySelectorAll('.cardImgs img:nth-child(1)')
imgCarrinho.forEach(animarIconeCart)