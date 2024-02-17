function verificaValidadeValorChute(chute) {
    const numero = +chute;

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido. Não é um número <i class="fa-solid fa-triangle-exclamation"></i></div>'
        return
    }
    if (numeroNaoPermitido(numero)) {
        elementoChute.innerHTML += `
            <div>Número inválido. Fale um número entre ${menorValor} e ${maiorValor} <i class="fa-solid fa-triangle-exclamation"></i></div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2 class="ganhou">Você acertou! <i class="fa-regular fa-circle-check"></i></h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-angles-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-angles-up"></i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroNaoPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})