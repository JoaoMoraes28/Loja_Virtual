'use strict'

import produtos from "./produtos_atualizados.json" with {type: "json"}

const botaoDireitaInformatica = document.getElementById('moverParaDireitaInformatica')
const botaoEsquerdaInformatica = document.getElementById('moverParaEsquerdaInformatica')
const botaoDireitaEletronicos = document.getElementById('moverParaDireitaEletronicos')
const botaoEsquerdaEletronicos = document.getElementById('moverParaEsquerdaEletronicos')
const section = document.getElementById('containerInformatica')
const largura = section.offsetWidth
console.log(largura)

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

        if (largura <= 650) {
            if (informaticaVisiveis >= 1) {
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

        if (largura <= 650) {
            if (eletronicosVisiveis >= 1) {
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

if (eletronicosVisiveis <= 3) {
    botaoDireitaEletronicos.style.display = 'none'
    botaoEsquerdaEletronicos.style.display = 'none'
}

//VARIÁVEIS PARA CONTROLE DE OCULTAÇÃO E VISIBILIDADE DOS CARDS PARA O CARROSSEL MANUAL
var contagemCardsDireita
var contagemCardsEsquerda

if (largura <= 650) {
    contagemCardsDireita = 2
    contagemCardsEsquerda = 1

} else {
    contagemCardsDireita = 5
    contagemCardsEsquerda = 1

}


function rodarDireitaInformatica() {

    //O VALOR DENTRO DO CHILD É ALTERADO DE ACORDO COM OS CLIQUES DO USUÁRIO, CADA CARD SELECIONADO POR ELE É MARCADO OU DESMARCADO DA CLASSE DISPLAY:NONE
    //SE NÃO POSSUIR MAIS CARDS PARA SEREM SELECIONADOS PELO CHILD O BLOCO ELSE SERÁ EXECUTADO
    if (contagemCardsDireita <= quantidadeCardsInformatica && contagemCardsEsquerda >= 1) {
        botaoEsquerdaInformatica.style.backgroundColor = 'white'
        const cardDireita = document.querySelector(`#containerInformatica .card:nth-child(${contagemCardsDireita})`)
        cardDireita.classList.toggle('none')
        contagemCardsDireita++

        const cardEsquerda = document.querySelector(`#containerInformatica .card:nth-child(${contagemCardsEsquerda})`)
        cardEsquerda.classList.toggle('none')
        contagemCardsEsquerda++
    } else {
        botaoEsquerdaInformatica.style.backgroundColor = 'white'
        botaoDireitaInformatica.style.backgroundColor = 'var(--cinza_claro)'
    }
}

function rodarEsquerdaInformatica() {

    //O VALOR DENTRO DO CHILD É ALTERADO DE ACORDO COM OS CLIQUES DO USUÁRIO, CADA CARD SELECIONADO POR ELE É MARCADO OU DESMARCADO DA CLASSE DISPLAY:NONE
    //SE NÃO POSSUIR MAIS CARDS PARA SEREM SELECIONADOS PELO CHILD O BLOCO ELSE SERÁ EXECUTADO
    if (contagemCardsDireita <= (quantidadeCardsInformatica + 1) && contagemCardsEsquerda > 1) {
        contagemCardsDireita--
        botaoDireitaInformatica.style.backgroundColor = 'white'
        const cardDireita = document.querySelector(`.card:nth-child(${contagemCardsDireita})`)
        cardDireita.classList.toggle('none')

        contagemCardsEsquerda--
        const cardEsquerda = document.querySelector(`.card:nth-child(${contagemCardsEsquerda})`)
        cardEsquerda.classList.toggle('none')
    } else {
        botaoDireitaInformatica.style.backgroundColor = 'white'
        botaoEsquerdaInformatica.style.backgroundColor = 'var(--cinza_claro)'
    }
}

function rodarDireitaEletronicos() {

    //O VALOR DENTRO DO CHILD É ALTERADO DE ACORDO COM OS CLIQUES DO USUÁRIO, CADA CARD SELECIONADO POR ELE É MARCADO OU DESMARCADO DA CLASSE DISPLAY:NONE
    //SE NÃO POSSUIR MAIS CARDS PARA SEREM SELECIONADOS PELO CHILD O BLOCO ELSE SERÁ EXECUTADO
    if (contagemCardsDireita <= quantidadeCardsEletronico && contagemCardsEsquerda >= 1) {
        botaoEsquerdaEletronicos.style.backgroundColor = 'white'
        const cardDireita = document.querySelector(`#containerEletronicos .card:nth-child(${contagemCardsDireita})`)
        cardDireita.classList.toggle('none')
        contagemCardsDireita++

        const cardEsquerda = document.querySelector(`#containerEletronicos .card:nth-child(${contagemCardsEsquerda})`)
        cardEsquerda.classList.toggle('none')
        contagemCardsEsquerda++
    } else {
        botaoEsquerdaEletronicos.style.backgroundColor = 'white'
        botaoDireitaEletronicos.style.backgroundColor = 'var(--cinza_claro)'
    }
}

function rodarEsquerdaEletronicos() {

    //O VALOR DENTRO DO CHILD É ALTERADO DE ACORDO COM OS CLIQUES DO USUÁRIO, CADA CARD SELECIONADO POR ELE É MARCADO OU DESMARCADO DA CLASSE DISPLAY:NONE
    //SE NÃO POSSUIR MAIS CARDS PARA SEREM SELECIONADOS PELO CHILD O BLOCO ELSE SERÁ EXECUTADO
    if (contagemCardsDireita <= (quantidadeCardsEletronico + 1) && contagemCardsEsquerda > 1) {
        contagemCardsDireita--
        botaoDireitaEletronicos.style.backgroundColor = 'white'
        const cardDireita = document.querySelector(`#containerEletronicos .card:nth-child(${contagemCardsDireita})`)
        cardDireita.classList.toggle('none')

        contagemCardsEsquerda--
        const cardEsquerda = document.querySelector(`#containerEletronicos .card:nth-child(${contagemCardsEsquerda})`)
        cardEsquerda.classList.toggle('none')
    } else {
        botaoDireitaEletronicos.style.backgroundColor = 'white'
        botaoEsquerdaEletronicos.style.backgroundColor = 'var(--cinza_claro)'
    }
}

function animarIconeFavorito(imgFav) {

    imgFav.addEventListener('click', () => {
        if (imgFav.src == 'http://127.0.0.1:5501/img/favRed.png') {
            imgFav.src = './img/Favorite.png'

        } else if (imgFav.src == 'http://127.0.0.1:5501/img/Favorite.png') {
            imgFav.src = './img/favRed.png'

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
    })
}

botaoDireitaEletronicos.addEventListener('click', rodarDireitaEletronicos)
botaoEsquerdaEletronicos.addEventListener('click', rodarEsquerdaEletronicos)
botaoEsquerdaInformatica.addEventListener('click', rodarEsquerdaInformatica)
botaoDireitaInformatica.addEventListener('click', rodarDireitaInformatica)
const imgFavorito = document.querySelectorAll('.cardImgs img:nth-child(2)')
imgFavorito.forEach(animarIconeFavorito)