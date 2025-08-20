let tela = document.getElementById('tela')
let expressao = ''

function clicar(valor) {
    if (valor === '=') {
        try {
            let resultado = eval(expressao)
            tela.innerText = resultado
            expressao = resultado.toString() // permite continuar a operação
        } catch (erro) {
            tela.innerText = 'Erro'
            expressao = ''
        }
    } else {
        expressao += valor
        tela.innerText = expressao
    }
}

// Associa manualmente os botões (sem forEach)
document.querySelectorAll('.botao').forEach(function(botao) {
    botao.addEventListener('click', function() {
        clicar(botao.value)
    })
})