document.addEventListener('DOMContentLoaded', () => {
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const calcularBtn = document.getElementById('calcular-btn');
    const resultadoDiv = document.getElementById('resultado');
    const erroMensagemDiv = document.getElementById('erro-messagem');
    const nomeSpan = document.getElementById('your-name');

    function addYourName() {
        nomeSpan.textContent = "Guilherme Miguel"; 
    }

    function removeClassResultadoDiv() {
        const classes = ["resultado-baixo", "resultado-normal", "resultado-sobre", "resultado-obesidade"];
        resultadoDiv.classList.remove(...classes);
    }

    calcularBtn.addEventListener('click', () => {
        removeClassResultadoDiv();
        erroMensagemDiv.textContent = "";
        resultadoDiv.textContent = "";

        const peso = parseFloat(pesoInput.value);
        const altura = parseFloat(alturaInput.value);

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            erroMensagemDiv.textContent = "Por favor, preencha os campos corretamente com valores maiores que zero.";
            erroMensagemDiv.style.display = "block";
            return;
        }

        const imc = peso / (altura * altura);
        const imcFormatado = imc.toFixed(2);
        let classificacao = "";
        let classe = "";

        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
            classe = "resultado-baixo";
        } else if (imc < 25) {
            classificacao = "Peso normal";
            classe = "resultado-normal";
        } else if (imc < 30) {
            classificacao = "Sobrepeso";
            classe = "resultado-sobre";
        } else if (imc < 35) {
            classificacao = "Obesidade Grau I";
            classe = "resultado-obesidade";
        } else if (imc < 40) {
            classificacao = "Obesidade Grau II";
            classe = "resultado-obesidade";
        } else {
            classificacao = "Obesidade Grau III (Mórbida)";
            classe = "resultado-obesidade";
        }

        resultadoDiv.textContent = `IMC: ${imcFormatado} - ${classificacao}`;
        resultadoDiv.classList.add(classe);
        erroMensagemDiv.style.display = "none";
    });

    addYourName();
});
