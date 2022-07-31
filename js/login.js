import { host } from './host.mjs'

export function login() {
    const email = document.querySelector("#cadastro-form__email").value
    const senha = document.querySelector("#cadastro-form__senha").value
    tentaLogin(email, senha)
}

function tentaLogin(email, senha) {
    let credenciais = {
        "email": `${email}`,
        "senha": `${senha}`,
    }

    var options = {
        method: 'POST',
        body: JSON.stringify(credenciais),
        mode: 'cors',
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }

    const url = `${host}/login/`
    fetch(url, options)
        .then((res) => res.json())
        .then(resposta => respostaLogin(resposta))
        .catch(function (error) {
            console.log(error);
        });
}


function respostaLogin(resposta) {
    if (resposta.status == "LOGADO") {
        console.log(`Bem vindo ${resposta.usuario}`)
        alert(`Bem vindo ${resposta.usuario}`)
        window.location.href = `home.html?login=true&userID=${resposta.id}`
    }
    else {
        console.log(resposta.status)
        alert(resposta.status)
    }

}