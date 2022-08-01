import { host } from './host.mjs'

export function cadastro() {
    const btnCadastrar = document.querySelector("form")
    btnCadastrar.addEventListener("submit", evento => cadastrarDB(evento))
}

function cadastrarDB(evento) {
    evento.preventDefault();
    console.log("click")
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
    .then((res) => res.json())
        .then(resposta => {
            console.log(resposta)
            alert('Cadastrado com sucesso!')
            alert('Faça o Login')
            window.location.href = `login.html`
            // Handle response we get from the API
        })
        .catch(function (error) {
            console.log(error);
        });
}