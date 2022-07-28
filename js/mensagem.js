export function showPetName() {
    console.log('k')
    const queryString = window.location.search;
    const parametros = new URLSearchParams(queryString);

    if (parametros.has('petID')) {
        preenchePet(parametros.get('petID'))
    }
    if (parametros.get('login') == 'true') {
        preencheUsuario(parametros.get('userID'))
    }

}

function preenchePet(petID) {
    const url = `http://localhost:3000/pets/${petID}` 
    const inputNome = document.getElementById('mensagem-form__nome-animal')

    fetch(url)
        .then((resp) => resp.json())
        .then(dados => inputNome.value = dados.nome)
        .catch(function (error) {
            console.log(error);
        });
}

function preencheUsuario(userID) {
    const url = `http://localhost:3000/usuarios/${userID}` 
    const inputNome = document.getElementById('mensagem-form__nome')
    const inputTelefone = document.getElementById('mensagem-form__telefone')

    fetch(url)
        .then((resp) => resp.json())
        .then(dados => {
            inputNome.value = dados.nome
            inputTelefone.value = dados.telefone
        })
        .catch(function (error) {
            console.log(error);
        });
}
