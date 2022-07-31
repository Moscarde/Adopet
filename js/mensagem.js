import { host } from './host.mjs'
import { parametros } from './pegaParametros.mjs'

export function showPetName() {
    console.log(parametros.has('petID'))
    console.log(parametros.has('userID'))
    if (parametros.has('petID')) {
        console.log('tem');
        preenchePet(parametros.get('petID'))
    }
    if (parametros.get('login') == 'true') {
        preencheUsuario(parametros.get('userID'))
    }

}

function preenchePet(petID) {
    console.log('tentando preencher pet')
    const inputNomeAnimal = document.getElementById('mensagem-form__nome-animal')
    const url = `${host}/pets/`

    fetch(url)
        .then((resp) => resp.json())
        .then(dados => {
            let pet = dados.find(pet => pet.id == petID)
            inputNomeAnimal.value = pet.nome
        })
        .catch(function (error) {
            console.log(error);
        });
}

function preencheUsuario(userID) {
    const inputNome = document.getElementById('mensagem-form__nome')
    const inputTelefone = document.getElementById('mensagem-form__telefone')



    let credenciais = {
        "id": `${userID}`
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
        .then(resposta => {
            inputNome.value = resposta.nome
            inputTelefone.value = resposta.telefone
        }) //dadosUsuario
        .catch(function (error) {
            console.log(error);
        });



}
