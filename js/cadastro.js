import { host } from './host.mjs'

export function cadastro() {
    const btnCadastrar = document.querySelector("form")
    btnCadastrar.addEventListener("submit", cadastrarDB)
}

function cadastrarDB() {
    const email = document.querySelector("#cadastro-form__email").value
    const nome = document.querySelector("#cadastro-form__nome").value
    const senha = document.querySelector("#cadastro-form__senha").value

    const url = `${host}/cadastro/`

    
    let data = {
        "nome": `${nome}`,
        "email": `${email}`,
        "senha": `${senha}`,
        "telefone": "",
        "cidade": "",
        "sobre": "",
        "foto_perfil": "",
        "login_time": ""

    }

    var options = {
        method: 'POST',
        body: JSON.stringify(data),
        // mode: 'cors',
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }

    fetch(url, options)
        .then(function () {
            alert('Cadastrado com sucesso!')
            alert('Faça o Login')
            // Handle response we get from the API
        })
        .catch(function (error) {
            console.log(error);
        });
}