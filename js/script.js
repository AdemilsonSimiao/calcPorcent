const entradaInput = document.getElementById("entrada");
const porcentagemInput = document.getElementById("porcentagem");
const calculadoraButton = document.getElementById("calculadora");
const saidaSpan = document.getElementById("saida");

function calculadoraPorcent() {
    const entradaValue = entradaInput.value;
    const porcentagemValue = porcentagemInput.value;
    const saidaValue = entradaValue * (1 + porcentagemValue / 100);
    saidaSpan.innerText = "R$ " + saidaValue.toFixed(2);
}

calculadoraButton.addEventListener("click", calculadoraPorcent);