export function valida(input) {
    const tipoDeInput = input.dataset.tipo
    if (document.querySelector(".principal").dataset.page != "login" && document.querySelector(".principal").dataset.page != "cadastro") {
        return
    }

    
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if (input.validity.valid) {
        input.classList.remove('cadastro-form__input-invalido')
        input.nextElementSibling.innerHTML = '&#10240'
    } else {
        input.classList.add('cadastro-form__input-invalido')
        input.nextElementSibling.innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}

const validadores = {
    senhaRepetida: input => validaSenhaRepetida(input)
}


const tiposDeErro = ['valueMissing', 'typeMismatch', 'patternMismatch', 'customError']

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio.'
    },
    email: {
        valueMissing: 'O campo email não pode estar vazio.',
        typeMismatch: 'O email digitado não é valido.'
    },
    senha: {
        valueMissing: 'O campo senha não pode estar vazio.',
        patternMismatch: 'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos.'
    },
    senhaRepetida: {
        valueMissing: 'O campo confirma senha não pode estar vazio',
        patternMismatch: 'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos.',
        customError: 'Senha inserida não corresponde a senha digitada anteriormente.'
    },
    senhaLogin: {
        valueMissing: 'O campo confirma senha não pode estar vazio'
    }
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if (input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })
    return mensagem
}

function validaSenhaRepetida(input) {
    const senha = document.getElementById("cadastro-form__senha").value

    let mensagem = ""
    if (input.value !== senha) {
        mensagem = "Senhas precisam ser iguais"
    }

    input.setCustomValidity(mensagem)
}
