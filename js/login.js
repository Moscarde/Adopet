export function login() {
    const email = document.querySelector("#cadastro-form__email").value
    const senha = document.querySelector("#cadastro-form__senha").value
    console.log(email);
    procuraEmail(email, senha)
    
}

function procuraEmail(email, senha) {
    const url = `http://localhost:3000/usuarios/?email=${email}`
    console.log(url);
    fetch(url)
        .then((resp) => resp.json())
        .then(dados => confere(dados[0], senha))
        .catch(function (error) {
            console.log(error);
        });
}

function confere(dados, senha) {
    console.log(dados)
    if (dados == undefined) {
        alert("Email e senha invalidos");
    }
    else {
        if (dados.senha == senha) {
            alert(`Bem vindo ${dados.nome}`)
            window.location.href = `home.html?login=true&userID=${dados.id}`
        }
        else {
            alert('senha invalida')
        }
    }
}