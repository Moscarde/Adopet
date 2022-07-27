export function validaLink(evento) {
    const tipo = evento.dataset.link
    const paginaAtual = document.querySelector(".principal").dataset.page
    console.log(tipo);
    if (tiposDeLinks[tipo]) {
        tiposDeLinks[tipo](paginaAtual)
    }
}

const queryString = window.location.search
const parametros = new URLSearchParams(queryString);


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