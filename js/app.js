import { valida } from './validacao.js'
import { showPerfil, btnsPerfil } from './perfil.js'
import { validaLink } from './links.js'
import { login } from './login.js'
import { showCards } from './home.js'
import { showPetName, btnEnviarMensagem } from './mensagem.js'
import { cadastro } from './cadastro.js'

import { host } from './host.mjs'


const inputs = document.querySelectorAll('input')
const form = document.querySelector('form')
const linksHeader = document.querySelectorAll('.cabecalho__link')
const paginaAtual = document.querySelector(".principal").dataset.page

//links cabeçalho
linksHeader.forEach(link => {
    link.addEventListener('click', (evento) => {
        validaLink(evento.target)
    })
})


//btns forms
if (paginaAtual == "login") {
    console.log('LOGIN: email@padrao.com SENHA: Password123')
    form.addEventListener('submit', evento => login(evento))
}


//pages
if (paginaAtual == "index") {
    console.log('Feito com muita dedicação por Gabriel Moscarde')
    console.log('Repositório do projeto: https://github.com/Moscarde/Adopet')
}
if (paginaAtual == "home") {
    showCards()
}

if (paginaAtual == "cadastro") {
    inputs.forEach(input => {
        input.addEventListener('blur', (evento) => {
            valida(evento.target)
        })
    })
}

if (paginaAtual !== "index" && paginaAtual !== "cadastro" && paginaAtual !== "login") {
    showPerfil()
}

if (paginaAtual == "perfil") {
    btnsPerfil()
}

if (paginaAtual == "mensagem") {
    showPetName()
    form.addEventListener('submit', evento => btnEnviarMensagem(evento))
}
if (paginaAtual == "cadastro") {
    cadastro()
}

