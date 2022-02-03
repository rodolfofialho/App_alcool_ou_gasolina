const form = document.querySelector('#form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputAlcool = e.target.querySelector('#valor_alcool');
    const inputGasolina = e.target.querySelector('#valor_gasolina');

    const alcool = Number(inputAlcool.value);
    const gasolina = Number(inputGasolina.value);

    if (!alcool ) {
    setResultado('Preencha os campos corretamente', false);
    return;
    }

    if (!gasolina ) {
        setResultado('Preencha os campos corretamente', false);
        return;
        }

    const calculo = getCalculo(alcool, gasolina);

    if ( calculo >= 0.7){
        setResultado('Melhor utilizar Gasolina');
        
    } else{
        setResultado('Melhor utilizar Alcool');
        
    }

});


function getCalculo (alcool, gasolina) {
    const calculo = alcool / gasolina ;
    return calculo.toFixed(2);
}

function  criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg) {

    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);

}