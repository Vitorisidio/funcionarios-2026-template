'use strict'

import funcionarios from "./funcionarios.json" with { type: "json" }
/* oq faz o map:
percorre cada elemento
aplica uma função
retorna um novo array com os resultados
*/

function criarCard(funcionario){
    const card = document.createElement('div')
    card.className = 'card'

    const foto = document.createElement('img')
    foto.src = `./img/${funcionario.imagem}`
    foto.alt = `Foto de ${funcionario.nome}`

    const nome = document.createElement('h3')
    nome.textContent = funcionario.nome

    const cargo = document.createElement('span')
    cargo.textContent = funcionario.cargo

    card.append(foto,nome,cargo)

    return card
}

const cards = funcionarios.map(criarCard)

document.getElementById('container').replaceChildren(...cards)