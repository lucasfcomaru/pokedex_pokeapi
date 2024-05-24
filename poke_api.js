function consulta_pokemon() {
    // pegando o valor do nome do pokémon no html e tazendo para o javascript través de um seletor CSS
    // e transformando em caracteres minúsculos
    let pokemon = document.querySelector('#pokemon').value.toLowerCase();
    // concatenando a variável para substituir pelo valor do cep dentro da string
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    // pega os dados da API
    fetch(url)
    .then(response => {
        if(response.status === 404){
            throw new Error("Pokemon não encontrado")
        }
        return response.json()
    })
    .then(data => mostra_resultado(data))
    .catch(error => alert(error.message))
}  

function mostra_resultado(dados) {
    // pega a div pelo onde vai armazenar o resultado pelo ID
    let resultado = document.querySelector('#resultado');
    // pegando o valor do nome do pokémon no html e tazendo para o javascript través de um seletor CSS
    // e transformando em caracteres minúsculos
    let pokemon = document.querySelector('#pokemon').value.toLowerCase();
    // pega a div pelo onde vai armazenar a imagem pelo ID
    let imagem = document.querySelector('#imagem');
    // pega a div pelo onde vai armazenar os atributos pelo ID
    let atributos = document.querySelector('#atributos');

    // tratando caso não tenha nada digitado no input
    if (pokemon == "") {
        resultado.innerHTML = "<p>Por favor, digite o nome do pokémon.</p>";
    } else {
        if (dados.abilities.length == 1) {
            // Pegando os atributos principais
            resultado.innerHTML = ` <img src="${dados.sprites.front_default}" title="${dados.name}" alt="${dados.name}">
                                    <p><b>Número: </b>${dados.id}</p>
                                    <p><b>Nome: </b>${dados.name}</p>
                                    <p><b>Tipo: </b>${dados.types[0].type.name}</p>
                                    <!-- convertendo altura -->
                                    <p><b>Altura: </b>${dados.height}0 cm</p>
                                    <!-- convertendo peso -->
                                    <p><b>Peso: </b>${dados.weight / 10} kg</p>
                                    <p><b>Habilidades: </b>${dados.abilities[0].ability.name}`;
            // Pegando os atributos
            atributos.innerHTML = ` <p><b>HP: </b>${dados.stats[0].base_stat}</p>
                                    <p><b>Ataque: </b>${dados.stats[1].base_stat}</p>
                                    <p><b>Defesa: </b>${dados.stats[2].base_stat}</p>
                                    <p><b>Ataque Especial: </b>${dados.stats[3].base_stat}</p>
                                    <p><b>Defesa Especial: </b>${dados.stats[4].base_stat}</p>
                                    <p><b>Velocidade: </b>${dados.stats[5].base_stat}</p>`;

        } else if (dados.abilities.length == 2){
            // Pegando os atributos principais
            resultado.innerHTML = ` <img src="${dados.sprites.front_default}" title="${dados.name}" alt="${dados.name}">
                                    <p><b>Número: </b>${dados.id}</p>
                                    <p><b>Nome: </b>${dados.name}</p>
                                    <p><b>Tipo: </b>${dados.types[0].type.name}</p>
                                    <!-- convertendo altura -->
                                    <p><b>Altura: </b>${dados.height}0 cm</p>
                                    <!-- convertendo peso -->
                                    <p><b>Peso: </b>${dados.weight / 10} kg</p>
                                    <p><b>Habilidades: </b>${dados.abilities[0].ability.name}, ${dados.abilities[1].ability.name}</p>`;
            // Pegando os atributos
            atributos.innerHTML = ` <p><b>HP: </b>${dados.stats[0].base_stat}</p>
                                    <p><b>Ataque: </b>${dados.stats[1].base_stat}</p>
                                    <p><b>Defesa: </b>${dados.stats[2].base_stat}</p>
                                    <p><b>Ataque Especial: </b>${dados.stats[3].base_stat}</p>
                                    <p><b>Defesa Especial: </b>${dados.stats[4].base_stat}</p>
                                    <p><b>Velocidade: </b>${dados.stats[5].base_stat}</p>`;
        } else {
            // Pegando os atributos principais
            resultado.innerHTML = ` <img src="${dados.sprites.front_default}" title="${dados.name}" alt="${dados.name}">
                                    <p><b>Número: </b>${dados.id}</p>
                                    <p><b>Nome: </b>${dados.name}</p>
                                    <p><b>Tipo: </b>${dados.types[0].type.name}</p>
                                    <!-- convertendo altura -->
                                    <p><b>Altura: </b>${dados.height}0 cm</p>
                                    <!-- convertendo peso -->
                                    <p><b>Peso: </b>${dados.weight / 10} kg</p>
                                    <p><b>Principais habilidades: </b>${dados.abilities[0].ability.name}, ${dados.abilities[1].ability.name}, ${dados.abilities[2].ability.name}</p>`;
            // Pegando os atributos
            atributos.innerHTML = ` <p><b>HP: </b>${dados.stats[0].base_stat}</p>
                                    <p><b>Ataque: </b>${dados.stats[1].base_stat}</p>
                                    <p><b>Defesa: </b>${dados.stats[2].base_stat}</p>
                                    <p><b>Ataque Especial: </b>${dados.stats[3].base_stat}</p>
                                    <p><b>Defesa Especial: </b>${dados.stats[4].base_stat}</p>
                                    <p><b>Velocidade: </b>${dados.stats[5].base_stat}</p>`;
        }
    }
}