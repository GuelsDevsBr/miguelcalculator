document.addEventListener('DOMContentLoaded', () => {
    const tela = document.querySelector('.tela');
    const botoes = document.querySelectorAll('.btn');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const valor = botao.textContent;

            if (botao.classList.contains('igual')) {
                try {
                    tela.value = eval(tela.value);
                } catch {
                    tela.value = 'Erro';
                }
            } else if (botao.classList.contains('operador')) {
                const ultimo = tela.value.slice(-1);
                if (!['+', '-', '*', '/'].includes(ultimo) && tela.value !== '') {
                    tela.value += valor;
                }
            } else if (botao.classList.contains('limpar')) {
                tela.value = '';
            } else if (valor === '.') {
                const partes = tela.value.split(/[\+\-\*\/]/);
                const ultimoNumero = partes[partes.length - 1];
                if (!ultimoNumero.includes('.')) {
                    tela.value += valor;
                }
            } else {
                tela.value += valor;
            }
        });
    });
});