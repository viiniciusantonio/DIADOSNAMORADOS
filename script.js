const botaoNao = document.getElementById('btn-nao');

botaoNao.addEventListener('mouseover', fugir);

function fugir() {
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    const larguraBotao = botaoNao.offsetWidth;
    const alturaBotao = botaoNao.offsetHeight;

    const novaPosicaoX = Math.floor(Math.random() * (larguraJanela - larguraBotao));
    const novaPosicaoY = Math.floor(Math.random() * (alturaJanela - alturaBotao));

    botaoNao.style.position = 'absolute';
    botaoNao.style.left = `${novaPosicaoX}px`;
    botaoNao.style.top = `${novaPosicaoY}px`;
}

function responderSim() {
    const card = document.querySelector('.card');
    
    card.innerHTML = `
        <h1>😏😏😏😏😏😏😏 EU TE AMOOO! ❤️</h1>
        <p class="mensagem">Sabia que você ia aceitar! Agora não tem mais volta 😏. (O botão "Não" nunca vai funcionar😎)</p>
        <img src="comemoração.guif.gif" alt="Comemoração" width="250">
    `;
}