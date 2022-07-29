const queryString = window.location.search; //?product=shirt&color=blue&newuser&size=m&user=1
const urlParams = new URLSearchParams(queryString);
const pagina = document.querySelector(".principal").dataset.page


export function showPerfil() {
    if (urlParams.get('login') == "true" && urlParams.has('userID')) {
        const userID = urlParams.get('userID')
        logado(userID)
    }
}

function logado(id) {
    const url = `http://localhost:3000/usuarios/${id}`
    fetch(url)
        .then((resp) => resp.json())
        .then(dados => {
            exibeDadosPerfil(dados)
            if (document.querySelector(".principal").dataset.page == "perfil") {
                salvaMudancasPerfil()
                
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

function exibeDadosPerfil(dadosPerfil) {
    if (dadosPerfil.foto_perfil !== "") {
        const imgHeader = document.querySelector(".cabecalho__imagem-perfil")
        imgHeader.src = dadosPerfil.foto_perfil
    }

    if (pagina == "perfil") {
        const perfilImagem = document.querySelector(".foto-perfil__imagem")
        const nome = document.querySelector("#perfil-form__nome")
        const telefone = document.querySelector("#perfil-form__telefone")
        const cidade = document.querySelector("#perfil-form__cidade")
        const sobre = document.querySelector("#perfil-form__mensagem")

        if (dadosPerfil.foto_perfil !== "") {
            perfilImagem.src = dadosPerfil.foto_perfil
        }
        nome.value = dadosPerfil.nome
        telefone.value = dadosPerfil.telefone
        cidade.value = dadosPerfil.cidade
        sobre.value = dadosPerfil.sobre
    }
}

export function salvaMudancasPerfil() {
    const btnSalvar = document.querySelector("#perfil-form__submit")

    btnSalvar.addEventListener('click', () => {
        const perfilImagem = getImgPerfil()
        const nome = document.querySelector("#perfil-form__nome").value
        const telefone = document.querySelector("#perfil-form__telefone").value
        const cidade = document.querySelector("#perfil-form__cidade").value
        const sobre = document.querySelector("#perfil-form__mensagem").value
        const id = urlParams.get('userID')
        const url = `http://localhost:3000/usuarios/${id}`


        let data = {
            "nome": `${nome}`,
            "telefone": `${telefone}`,
            "cidade": `${cidade}`,
            "sobre": `${sobre}`,
            "foto_perfil": `${perfilImagem}`
        }

        var options = {
            method: 'PATCH',
            body: JSON.stringify(data),
            // mode: 'cors',
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }

        fetch(url, options)
            .then(function () {
                alert('Alterações Salvas. Recarregando!')
                // Handle response we get from the API
            })
            .catch(function (error) {
                console.log(error);
            });

    })
}
var imgPerfilSrc = getImgPerfil()

function getImgPerfil() {
    return document.querySelector(".foto-perfil__imagem").src
}

if (document.querySelector(".principal").dataset.page == "perfil") {
    const imgPerfil = document.querySelector(".foto-perfil__imagem")
    imgPerfil.addEventListener("click", () => {
        imgPerfilSrc = prompt("Digite a url da nova imagem de perfil")
        if (imgPerfilSrc !== null) {
            imgPerfil.src = imgPerfilSrc

        }
    })
}