export function showCards() {
    const url = `http://localhost:3000/pets/`
    fetch(url)
        .then((resp) => resp.json())
        .then(dados => {
            dados.forEach(pet => {
                const html = `
                <div class="card-pet" data-petID="${pet.id}">
                    <img class="card-pet__imagem" src="${pet.imagem}">

                    <div class="card-pet__descricao">
                        <h2 class="card-pet__titulo">${pet.nome}</h2>
                        <p class="card-pet__texto" id="card-pet__texto-idade">${pet.idade}</p>
                        <p class="card-pet__texto" id="card-pet__texto-porte">${pet.porte}</p>
                        <p class="card-pet__texto" id="card-pet__texto-caracteristicas">${pet.caracteristica}</p>

                        <p class="card-pet__texto-local" id="card-pet__texto-local">${pet.localizacao}</p>
                        <div class="card-pet__contato">
                            <img src="../img/Ícone mensagem.svg" class="card-pet__ico-msg"></img>
                            <p class="card-pet__texto-contato" id="card-pet__texto-contato">Falar com responsável</p>
                        </div>
                    </div>
                </div>`
                const tabCart = document.querySelector(".tabela-card")
                tabCart.innerHTML += html
            });
            mensagemPet()
        })
        .catch(function (error) {
            console.log(error);
        });
}

function mensagemPet() /*petTarget*/ {
    const cardsPets = document.querySelectorAll('.card-pet')
    
    cardsPets.forEach(card => {
        card.addEventListener('click', (evento) => {
            const petID = card.dataset.petid

            const queryString = window.location.search
            const parametros = new URLSearchParams(queryString);

            window.location.href = `mensagem.html?${parametros}&petID=${petID}`
        })
    })

}