const leornado = document.querySelector('#leonardo')
const samanta = document.querySelector('#samanta')
const bruna = document.querySelector('#bruna')
const setaDireira = document.querySelector('#seta-direita')
const setaEsquerda = document.querySelector('#seta-esquerda')
const cards = document.querySelector('.cards')

function rolarParaDireita(){
    leornado.style = 'display:none'
    samanta.style = 'display:flex'
    setaDireira.style='display:none'
    setaEsquerda.style = 'display:flex; '
    
}
function rolarParaEsquerda(){
    leornado.style = 'display:flex'
    samanta.style = 'display:none'
    setaDireira.style='display:flex'
    setaEsquerda.style = 'display:none'
}