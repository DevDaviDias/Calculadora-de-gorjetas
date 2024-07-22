// Seleciona elementos do DOM
const valorInput = document.getElementById('valor');
const porcentagemButtons = document.querySelectorAll('.btn-porcentagem');
const customTipInput = document.getElementById('custom-tip');
const quantidadePessoasInput = document.querySelector('.input-txtP');
const gorjetaPorPessoaDisplay = document.querySelector('.valor-gorjeta-number');
const totalPorPessoaDisplay = document.querySelector('.total-number');
const resetButton = document.querySelector('.reset');
var errorMessage = document.getElementById('error-message');

// Variáveis globais
let valorConta = 0;
let porcentagemGorjeta = 0;
let quantidadePessoas = 1;



// Atualiza o valor da conta
valorInput.addEventListener('input', function () {
    valorConta = parseFloat(valorInput.value);
    calcularGorjeta();
});

// Atualiza a porcentagem da gorjeta ao clicar nos botões
porcentagemButtons.forEach(button => {
    button.addEventListener('click', function () {
        porcentagemGorjeta = parseFloat(button.value);
        customTipInput.value = ''; // Limpa o valor customizado
        calcularGorjeta();
    });
});

// Atualiza a porcentagem da gorjeta ao inserir um valor customizado
customTipInput.addEventListener('input', function () {
    porcentagemGorjeta = parseFloat(customTipInput.value);
    calcularGorjeta();
});

// Atualiza a quantidade de pessoas
quantidadePessoasInput.addEventListener('input', function () {
    quantidadePessoas = parseInt(quantidadePessoasInput.value);
    calcularGorjeta();
});

// Função para calcular a gorjeta e o total por pessoa
function calcularGorjeta() {
    if (quantidadePessoas <= 0) {
        errorMessage.style.display = 'block';
        quantidadePessoasInput.style.border = '2px solid red'; 
        gorjetaPorPessoaDisplay.textContent = `$0.00`;
        totalPorPessoaDisplay.textContent = `$0.00`;
        return;
    } else {
        quantidadePessoasInput.style.border = '';
        errorMessage.style.display = 'none';
    }

    const gorjetaTotal = (valorConta * (porcentagemGorjeta / 100)) || 0;
    const gorjetaPorPessoa = (gorjetaTotal / quantidadePessoas) || 0;
    const totalPorPessoa = ((valorConta + gorjetaTotal) / quantidadePessoas) || 0;

    gorjetaPorPessoaDisplay.textContent = `$${gorjetaPorPessoa.toFixed(2)}`;
    totalPorPessoaDisplay.textContent = `$${totalPorPessoa.toFixed(2)}`;
}


// Função para resetar os valores
resetButton.addEventListener('click', function () {
    valorConta = 0;
    porcentagemGorjeta = 0;
    quantidadePessoas = 1;

    valorInput.value = '';
    customTipInput.value = '';
    quantidadePessoasInput.value = '';

    gorjetaPorPessoaDisplay.textContent = `$0.00`;
    totalPorPessoaDisplay.textContent = `$0.00`;
});


