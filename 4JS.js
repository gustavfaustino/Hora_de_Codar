
// Área para mostrar os campos, com funções

function mostrarCampos() {
    const figuraSelecionada = document.getElementById('figura').value
    const divCampos = document.getElementById('campos')
    divCampos.innerHTML = ''

    // QUADRADO
    if (figuraSelecionada === 'quadrado') {
        divCampos.innerHTML = `
            <div class="form-group">
                <label for="lado">Lado do quadrado em centímetros:</label>
                <input type="number" id="lado" placeholder="Insira o lado do quadrado">
            </div>`;
    }

    // RETANGULO
    else if (figuraSelecionada === 'retangulo') {
        divCampos.innerHTML = `
            <div class="form-group">
                <label for="base">Base em centímetros:</label>
                <input type="number" id="base" placeholder="Insira a base">
            </div>
            <div class="form-group">
                <label for="altura">Altura em centímetros:</label>
                <input type="number" id="altura" placeholder="Insira a altura">
            </div>`

    }

    // TRIANGULO
    else if (figuraSelecionada === 'triangulo') {
        divCampos.innerHTML = `
            <div class="form-group">
                <label for="base">Base em centímetros:</label>
                <input type="number" id="base" placeholder="Insira a base">
            </div>
            <div class="form-group">
                <label for="altura">Altura em centímetros:</label>
                <input type="number" id="altura" placeholder="Insira a altura">
            </div>`
    }

    // CIRCULO
    else if (figuraSelecionada === 'circulo') {
        divCampos.innerHTML = `
            <div class="form-group">
                <label for="raio">Raio em centímetros:</label>
                <input type="number" id="raio" placeholder="Insira o raio">
            </div>`
    }

    // LOSANGO
    else if (figuraSelecionada === 'losango') {
        divCampos.innerHTML = `
        <div class="form-group">
                <label for="diagMaior">Diagonal maior em centímetros:</label>
                <input type="number" id="diagMaior" placeholder="Insira o valor da maior diagonal">
            </div>    
        <div class="form-group">
                <label for="diagMenos">Diagonal menor em centímetros:</label>
                <input type="number" id="diagMenor" placeholder="Insira o valor da menor diagonal">
            </div>
        `
    }
    // TRAPEZIO
    else if (figuraSelecionada === 'trapezio') {
        divCampos.innerHTML = `
        <div class="form-group">
                <label for="baseMaior">Base maior em centímetros:</label>
                <input type="number" id="baseMaior" placeholder="Insira o valor da maior base">
            </div>
        <div class="form-group">
                <label for="baseMenor">Base menor em centímetros:</label>
                <input type="number" id="baseMaior" placeholder="Insira o valor da menor base">
            </div>
        <div class="form-group">
                <label for="altura">Altura em centímetros:</label>
                <input type="number" id="altura" placeholder="Insira o valor da altura">
            </div>
        `
    }
    // PARAELOLOGRAMA
    else if (figuraSelecionada === 'paralelograma') {
        divCampos.innerHTML = `
        <div class="form-group">
                <label for="base">Base em centímetros:</label>
                <input type="number" id="base" placeholder="Insira a base">
            </div>
            <div class="form-group">
                <label for="altura">Altura em centímetros:</label>
                <input type="number" id="altura" placeholder="Insira a altura">
            </div>`

    }
}

// Sessão de funções de cálculos

function calcularArea() {
    let area = 0 // Aplica o valor 0 a area de padrão
    const figuraSelecionada = document.getElementById('figura').value // Vai pegar qual figura foi selecionada para que haja acesso as funções


    // CALCULO QUADRADO
    if (figuraSelecionada === 'quadrado') {
        const lado = document.getElementById('lado').value
        if (lado) /* Verifica se o parametro possui valor */ {
            area = Math.pow(lado, lado)
        }
    }

    // CALCULO RETANGULO
    if (figuraSelecionada === 'retangulo') {
        const base = document.getElementById('base').value
        const altura = document.getElementById('altura').value

        if(base && altura){
            area = base*altura
        }
    }
    // CALCULO TRIANGULO
    if (figuraSelecionada === 'triangulo') {
        const largura = document.getElementById('base').value
        const altura = document.getElementById('altura').value

        if(base && altura){
            area = (base*base)/2
        }
    }
    // CALCULO CIRCULO
    if (figuraSelecionada === 'circulo') {
        const raio = document.getElementById('raio').value

        if(raio){
            area = Math.PI*Math.pow(raio,2)
        }
    }
    // CALCULO LOSANGO
    if (figuraSelecionada === 'losango') {
        const diagMaior = document.getElementById('diagMaior').value
        const diagMenor = document.getElementById('diagMenor').value

        if(diagMaior && diagMenor){
            area = (diagMaior*diagMenor)/2
        }
    }
    // CALCULO TRAPEZIO
    if (figuraSelecionada === 'trapezio') {
        const baseMaior = document.getElementById('baseMaior').value
        const baseMenor = document.getElementById('baseMenor').value
        const altura = document.getElementById('altura').value

        if(baseMaior && baseMenor && altura){
            area = ((baseMaior+baseMenor)*altura)/2
        }
    }
    // CALCULO PARALELOGRAMA
    if (figuraSelecionada === 'paralelograma') {
        const base = document.getElementById('base').value
        const altura = document.getElementById('altura').value

        if(base && altura){
            area = base*altura
        }
    }

    // Mostrar na area de resultado

    if(area>0){
        document.getElementById('resultado').textContent = `A área do ${figuraSelecionada} é: ${area.toFixed(2)}cm²`
        document.getElementById('container-resultado').style.display = 'block'
    } else {
        alert("Por favor, preencha todos os campos corretamente e com valores inteiros, reais e maiores que 0")
    }
}

// Função para limpar os campos

function limparCampos() {
    document.getElementById('resultado').textContent = ''
    document.getElementById('container-resultado').style.display = 'none'
    document.getElementById('campos').innerHTML = ''
    document.getElementById('figura').value = ''
}