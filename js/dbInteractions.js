const queryString = window.location.search; //?product=shirt&color=blue&newuser&size=m&user=1
const urlParams = new URLSearchParams(queryString);
const pagina = document.querySelector(".principal").dataset.page


// export function logado() {
//     console.log(user);
// }


export function checkLogin() {
    if (urlParams.get('login') == "true" && urlParams.has('userID')) {
        const userID = urlParams.get('userID')
        logado(userID)
    }
}

function logado(id) {
    const url = `http://localhost:3000/usuarios/${id}`
    fetch(url)
        .then((resp) => resp.json())
        .then(dados => exibeDadosPerfil(dados))
        .catch(function (error) {
            console.log(error);
        });
}

function exibeDadosPerfil(dadosPerfil) {
    console.log(dadosPerfil)
    const imgHeader = document.querySelector(".cabecalho__imagem-perfil")
    imgHeader.src = dadosPerfil.foto_perfil

    if (pagina == "perfil") {
        const perfilImagem = document.querySelector(".foto-perfil__imagem")
        const nome = document.querySelector("#perfil-form__nome")
        const telefone = document.querySelector("#perfil-form__telefone")
        const cidade = document.querySelector("#perfil-form__cidade")
        const sobre = document.querySelector("#perfil-form__mensagem")
    
        perfilImagem.src = dadosPerfil.foto_perfil
        nome.value = dadosPerfil.nome
        telefone.value = dadosPerfil.telefone
        cidade.value = dadosPerfil.cidade
        sobre.value = dadosPerfil.sobre
    }
}