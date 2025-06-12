// Obtém a referência ao elemento do cartão principal
const card = document.querySelector('.card');

// --- Conteúdo Inicial do Cartão ---
// Define o HTML do conteúdo inicial do cartão em uma string multi-linha.
// Isso facilita a reinjeção deste conteúdo.
const conteudoInicialHTML = `
    <h1>VOCÊ É MUITO!</h1>
    <img src="foto.jpg" alt="Foto de nós dois" width="250">
    <p class="mensagem">
        No muito e no pouco, sempre grudados! 
    </p>
    <div class="pergunta">
        <h3>Quer continuar me fazendo a pessoa mais feliz do mundo?</h3>
    </div>
    <div class="botoes">
        <button id="btn-sim">Sim!</button>
        <button id="btn-nao">Não</button>
    </div>
`;

// --- Funções Principais ---

/**
 * Função responsável por exibir o conteúdo inicial do cartão.
 * É chamada ao carregar a página e quando o botão "Voltar" é clicado.
 */
function exibirConteudoInicial() {
    // Define o HTML interno do cartão para o conteúdo inicial.
    // IMPORTANTE: Isso remove e recria todos os elementos dentro de 'card'.
    card.innerHTML = conteudoInicialHTML;

    // Após a re-renderização, é NECESSÁRIO re-obter as referências aos botões,
    // pois as referências antigas (se existissem) seriam inválidas.
    const novoBotaoNao = document.getElementById('btn-nao');
    const novoBotaoSim = document.getElementById('btn-sim');

    // Adiciona os event listeners ao botão "Não" (fugir)
    if (novoBotaoNao) {
        novoBotaoNao.addEventListener('mouseover', fugir); // Para desktop (passar o mouse)
        novoBotaoNao.addEventListener('touchstart', fugir); // Para mobile (tocar)
        // Opcional: novoBotaoNao.addEventListener('click', fugir); // Para clique direto (pode ser redundante com mouseover/touchstart)
    }

    // Adiciona o event listener ao botão "Sim!" (responderSim)
    if (novoBotaoSim) {
        // Usamos .onclick diretamente aqui porque o elemento é novo e não estamos adicionando múltiplos listeners
        novoBotaoSim.onclick = responderSim;
    }
}

/**
 * Função que faz o botão "Não" "fugir" para uma posição aleatória na tela.
 * Ativada por mouseover (desktop) ou touchstart (mobile).
 */
function fugir() {
    // Obtém as dimensões da janela do navegador
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    // Obtém a referência ATUAL do botão "Não" (importante após re-renderizações)
    const currentBotaoNao = document.getElementById('btn-nao');

    // Se o botão "Não" não existir (ex: já clicou em "Sim!"), a função para aqui.
    if (!currentBotaoNao) {
        return;
    }

    // Obtém as dimensões do botão "Não"
    const larguraBotao = currentBotaoNao.offsetWidth;
    const alturaBotao = currentBotaoNao.offsetHeight;

    // Define a posição do botão como absoluta para permitir o movimento
    currentBotaoNao.style.position = 'absolute';

    // Calcula uma nova posição aleatória para o botão dentro dos limites da janela
    // Subtraímos as dimensões do botão para que ele não saia da tela
    const novaPosicaoX = Math.floor(Math.random() * (larguraJanela - larguraBotao));
    const novaPosicaoY = Math.floor(Math.random() * (alturaJanela - alturaBotao));

    // Aplica as novas posições ao estilo do botão
    currentBotaoNao.style.left = `${novaPosicaoX}px`;
    currentBotaoNao.style.top = `${novaPosicaoY}px`;
}

/**
 * Função chamada quando o botão "Sim!" é clicado.
 * Altera o conteúdo do cartão para a mensagem de celebração e adiciona o botão "Voltar".
 */
function responderSim() {
    // Altera o HTML interno do cartão para a mensagem de "Eu te amo"
    card.innerHTML = `
        <h1>😏EU TE AMOOO!😏</h1> <h4>❤️FELIZ DIA DOS NAMORADOS!❤️</h4>
        <p class="mensagem">Sabia que você iria aceitar, aqui é caminho sem volta. Que DEUS continue abençoando nosso Amor!<br> <h5>Se conseguir clicar no "Não" da página anterior, ganha $150 no PIX.🤑</h5> </p>
        <img src="comemoração.guif.gif" alt="Comemoração" width="250">
        <button id="btn-voltar" class="botao-voltar">Voltar e ganhar meus $150</button>
    `;

    // Obtém a referência ao recém-criado botão "Voltar"
    const btnVoltar = document.getElementById('btn-voltar');

    // Adiciona um event listener de clique ao botão "Voltar"
    // Quando clicado, ele chamará a função para exibir o conteúdo inicial novamente.
    if (btnVoltar) {
        btnVoltar.addEventListener('click', exibirConteudoInicial);
    }
}

// --- Inicialização ---
// Adiciona um event listener para garantir que o script seja executado apenas
// quando todo o conteúdo HTML do DOM estiver carregado.
// Isso previne erros de tentar acessar elementos que ainda não existem.
document.addEventListener('DOMContentLoaded', exibirConteudoInicial);
