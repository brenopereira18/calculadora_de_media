const form = document.getElementById('form_atividade')
const imgAprovado = '<img src="./imagens/aprovado.png" alt="Emoji celebrando"/>'
const imgReprovado = '<img src="./imagens/reprovado.png" alt="Emoji triste"/>'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'

let linhas = ''

form.addEventListener('submit', function(event) {
    event.preventDefault()

    adicionaLinha()
    atualizaTabela()
    CalculaMediaFinal()
})

function adicionaLinha() {
    const nomeAtividade = document.getElementById('nome_atividade')
    const notaAtividade = document.getElementById('nota_atividade')

    if (atividades.includes(nomeAtividade.value)) {
        alert(`A atividade ${nomeAtividade.value} já foi inserida`)
    } else {
        atividades.push(nomeAtividade.value)
        notas.push(parseFloat(notaAtividade.value))
    
        let linha = '<tr>'
        linha += `<td>${nomeAtividade.value}</td>`
        linha += `<td>${notaAtividade.value}</td>`
        linha += `<td>${notaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`
        linha += '</tr>'
    
        linhas += linha
    }
    
    nomeAtividade.value = ''
    notaAtividade.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

}

function CalculaMediaFinal() {
    let somaNotas = 0

    for (let i=0; i<notas.length; i++) {
        somaNotas += notas[i]
    }

    let media = somaNotas / notas.length

    informaAMedia(media)
}

function informaAMedia(media) {
    let mediaFinal = document.querySelector('.media_final')
    let resultado = document.querySelector('.media_final_resultado')

    mediaFinal.innerHTML = media.toFixed(2)
    
    if (mediaFinal.innerHTML >= 7) {
        resultado.innerHTML = spanAprovado
    } else {
        resultado.innerHTML = spanReprovado
    }
}