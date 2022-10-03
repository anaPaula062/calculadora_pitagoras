    // script só executa após o carregamento da página
window.addEventListener('load', () => {
    const botaoCalcular = document.querySelector('#calcular-teorema')
    
    botaoCalcular.addEventListener('click', e => {
        e.preventDefault()
        descobrirLadoParaCalcular()
    })
    
})


    // percorrer os inputs para descobrir qual dos lados deve ser aplicado o teorema
function descobrirLadoParaCalcular (){
    const catetoOposto = document.querySelector('#cateto-a').value;
    const catetoAdjacente = document.querySelector('#cateto-b').value;
    const hipotenusa = document.querySelector('#hipotenusa-a').value;
    const resultado = document.querySelector('#resultado');
    
    if((catetoOposto !== "" && catetoAdjacente !== "") && hipotenusa === ""){
        let resultadoHipotenusa = calcularHipotenusa(parseInt(catetoOposto), parseInt(catetoAdjacente))
        resultado.innerHTML = resultadoHipotenusa;

    } else if((catetoAdjacente !== "" && hipotenusa !== "") && catetoOposto === ""){
        let resultadoCateto = calculoCateto(parseInt(catetoAdjacente), parseInt(hipotenusa))
        resultado.innerHTML = resultadoCateto;

    } else if ((catetoOposto !== "" && hipotenusa !== "") && catetoAdjacente === ""){
        let resultadoCateto = calculoCateto(parseInt(catetoOposto), parseInt(hipotenusa))
        resultado.innerHTML = resultadoCateto;

    } else {
        const mensage = `Preencha somente dois campos para descobrir o valor do terceiro
                        ex: cateto, cateto para descobrir a hipotenusa
                            cateto, hipotenusa para descobrir o outro cateto`
        alert(mensage)
    }
}

    // calculo do teorema
function calcularHipotenusa(catetoOposto, catetoAdjacente){
    let hipotenusa = Math.pow(catetoOposto, 2) + Math.pow(catetoAdjacente, 2)
    hipotenusa = Math.sqrt(hipotenusa)
    return hipotenusa
}

function calculoCateto(cateto, hipotenusa){
    let resultadoCateto = Math.pow(hipotenusa, 2) - Math.pow(cateto, 2) 
    resultadoCateto = Math.sqrt(resultadoCateto)
    return resultadoCateto 
}