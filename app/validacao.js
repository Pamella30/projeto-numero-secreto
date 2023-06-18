function verificaNumero() {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Isto nao e um numero</div>'
        return
    }

    if (numeroNaoPermitido(numero)) {
        elementoChute.innerHTML += `
        <div> Numero invalido! Fale um numero entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Voce acertou!</h2>
        <h3>O numero secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O numero secreto e maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }else {
        elementoChute.innerHTML += `
        <div>O numero secreto e menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    }

}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroNaoPermitido (numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener(`click`, e => {
    if(e.target.id == `jogar-novamente`){
        window.location.reload()
    }
} )