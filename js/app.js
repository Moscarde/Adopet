import { valida } from './validacao.js'
import { checkLogin } from './dbInteractions.js'
import { validaLink } from './links.js'
import { login } from './login.js'


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
inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})

//btns forms
if (paginaAtual == "login") {
    form.addEventListener('submit', login)
    
}



checkLogin()
