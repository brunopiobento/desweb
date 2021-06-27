 let inputAdultos = document.getElementById("adultos");
 let inputCriancas = document.getElementById("criancas");
 let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdtotalbolo = (bolopp(duracao) * adultos) + (bolopp(duracao)/2 * criancas);
    let qtdtotalsalgado = (salgadopp(duracao) * adultos) + (salgadopp(duracao)/2 * criancas);
    let qtdtotalbebida = (bebidapp(duracao) * adultos) + (bebidapp(duracao)/2 * criancas);

    console.log(qtdtotalbolo, qtdtotalsalgado, qtdtotalbebida);
    resultado.innerHTML = `<p>${Math.ceil(qtdtotalbolo/1000)} kg de bolo</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdtotalsalgado/100)} cento de salgados</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdtotalbebida/2000)} garrafas de bebida (2L)</p>`
}

    function bolopp(duracao){
        if (duracao >= 6){
            return 500;
        }
        else{
            return 300;
        }
    }
    function salgadopp(duracao){
        if (duracao >= 6){
            return 50;
        }
        else{
            return 30;
        }
    }
    function bebidapp(duracao){
        if (duracao >= 6){
            return 1500;
        }
        else{
            return 1000;
        }
    }
    