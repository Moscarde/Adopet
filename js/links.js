import { parametros } from './pegaParametros.mjs'

export function validaLink(evento) {
    const tipo = evento.dataset.link
    const paginaAtual = document.querySelector(".principal").dataset.page
    parametros.delete('petID')
    console.log(tipo);
    if (tiposDeLinks[tipo]) {
        tiposDeLinks[tipo](paginaAtual)
    }
}


const tiposDeLinks = {
    index: (paginaAtual) => {
        window.location.href = `../index.html?${parametros}`

    },
    home: (paginaAtual) => {
        if (parametros.get("login") == "true") {
            //login true
            window.location.href = `${paginaAtual == "index" ? "/pages/" : ""}home.html?${parametros}`
        } else {
            //login false
            window.location.href = `${paginaAtual == "index" ? "/pages/" : ""}login.html?${parametros}`
        }
    },
    mensagem: (paginaAtual) => {
        if (parametros.get("login") == "true") {
            //login true
            window.location.href = `${paginaAtual == "index" ? "/pages/" : ""}mensagem.html?${parametros}`
        } else {
            //login false
            window.location.href = `${paginaAtual == "index" ? "/pages/" : ""}login.html?${parametros}`
        }
    },
    usuario: (paginaAtual) => {
        if (parametros.get("login") == "true") {
            //login true
            window.location.href = `${paginaAtual == "index" ? "/pages/" : ""}perfil.html?${parametros}`
        } else {
            //login false
            window.location.href = `${paginaAtual == "index" ? "/pages/" : ""}login.html?${parametros}`
        }
    }

}