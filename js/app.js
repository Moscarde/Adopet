import { valida } from './validacao.js'
import { showPerfil, salvaMudancasPerfil } from './perfil.js'
import { validaLink } from './links.js'
import { login } from './login.js'
import { showCards } from './home.js'
import { showPetName } from './mensagem.js'


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

//inputs cadastro
if (paginaAtual == "cadastro") {
    inputs.forEach(input => {
        input.addEventListener('blur', (evento) => {
            valida(evento.target)
        })
    })
}

//btns forms
if (paginaAtual == "login") {
    form.addEventListener('submit', login)
}

if (paginaAtual == "home") {
    showCards()
}


if (paginaAtual !== "index") {
    showPerfil()
}

// if (paginaAtual == "perfil") {
//     salvaMudancasPerfil()
// }

if (paginaAtual == "mensagem") {
    showPetName()
}
if (paginaAtual == "cadastro") {
    cadastro()
}