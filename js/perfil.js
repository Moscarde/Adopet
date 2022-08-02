import { host } from './host.mjs'
import { parametros } from './pegaParametros.mjs'

const pagina = document.querySelector(".principal").dataset.page


export function showPerfil() {
    let idUsuario = parametros.get('userID')
    let credenciais = {
        "id": `${idUsuario}`
    }

    var options = {
        method: 'POST',
        body: JSON.stringify(credenciais),
        mode: 'cors',
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }

    const url = `${host}/usuarioDados/`
    fetch(url, options)
        .then((res) => res.json())
        .then(resposta => exibeDadosPerfil(resposta)) //dadosUsuario
        .catch(function (error) {
            console.log(error);
        });
    // logado(userID)
}


function exibeDadosPerfil(dadosUsuario) { //inserir ID aqui
    let usuario = dadosUsuario
    if (usuario.foto_perfil !== "") {
        const imgHeader = document.querySelector(".cabecalho__imagem-perfil")
        imgHeader.src = usuario.foto_perfil
    }

    if (pagina == "perfil") {
        const perfilImagem = document.querySelector(".foto-perfil__imagem")
        const nome = document.querySelector("#perfil-form__nome")
        const telefone = document.querySelector("#perfil-form__telefone")
        const cidade = document.querySelector("#perfil-form__cidade")
        const sobre = document.querySelector("#perfil-form__mensagem")

        if (usuario.foto_perfil !== "") {
            perfilImagem.src = usuario.foto_perfil
        }
        nome.value = usuario.nome
        telefone.value = usuario.telefone
        cidade.value = usuario.cidade
        sobre.value = usuario.sobre
    }
}

var imgPerfilSrc = ""
function getImgPerfil() {
    return document.querySelector(".foto-perfil__imagem").src
}

export function btnsPerfil() {
    const imgPerfil = document.querySelector(".foto-perfil__imagem")
    imgPerfil.addEventListener("click", () => {
        imgPerfilSrc = prompt("Digite a url da nova imagem de perfil")
        if (imgPerfilSrc !== null) {
            imgPerfil.src = imgPerfilSrc

        }
    })

    const btnSalvar = document.querySelector("#perfil-form__submit")
    btnSalvar.addEventListener('click', () => {
        const perfilImagem = getImgPerfil()
        const nome = document.querySelector("#perfil-form__nome").value
        const telefone = document.querySelector("#perfil-form__telefone").value
        const cidade = document.querySelector("#perfil-form__cidade").value
        const sobre = document.querySelector("#perfil-form__mensagem").value
        const id = parametros.get('userID')
        const url = `${host}/editaUsuario/`


        let data = {
            "id": `${id}`,
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
                document.location.reload(true)
            })
            .catch(function (error) {
                console.log(error);
            });

    })
}