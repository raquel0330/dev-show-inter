// ======================================================
// FRONT-END SHOW - A BATALHA DOS PROGRAMADORES
// ======================================================

// CONFIGURAÇÕES GERAIS
const TEMPO_INICIAL = 30;
const PONTOS_POR_QUESTAO = 100;
const PONTOS_ROUBA = 50;
const PONTOS_BAU = 50;

let rodadaAtual = 1;
let equipes = [];
let pontuacao = [0, 0, 0, 0];

let equipeAtual = 0;
let indicePergunta = 0;
let perguntasAtuais = [];

let tempoRestante = TEMPO_INICIAL;
let intervalo = null;
let jogoPausado = false;
let perguntaRespondida = false;

let cartaUsada = false;
let pularUsado = false;
let tempoExtraUsado = false;
let dicaUsada = false;
let bauUsado = false;

let indiceCartaEscolhida = null;
let proximaAcao = null;
let perguntaDoBau = false;


// ======================================================
// BANCO DE PERGUNTAS - RODADA 1
// ======================================================

const perguntasRodada1 = [

{
    categoria: "HTML",
    visual: "🌐",
    pergunta: "Qual é a principal função do HTML no desenvolvimento de páginas web?",
    alternativas: [
        "Criar a estrutura e o conteúdo da página",
        "Definir as cores e os estilos",
        "Criar animações complexas",
        "Gerenciar o banco de dados"
    ],
    correta: 0,
    explicacao: "O HTML é responsável por estruturar o conteúdo da página, como títulos, textos, imagens e links.",
    dica: "Pense na estrutura de uma casa: paredes, portas e janelas."
},

{
    categoria: "HTML",
    visual: "🧱",
    pergunta: "Qual é a importância da estrutura básica de um documento HTML?",
    alternativas: [
        "Organizar corretamente o conteúdo da página",
        "Aumentar a velocidade da internet",
        "Instalar programas no computador",
        "Criar arquivos de áudio"
    ],
    correta: 0,
    explicacao: "A estrutura básica organiza o documento e permite que o navegador interprete seu conteúdo corretamente.",
    dica: "Toda página precisa de uma organização inicial."
},

{
    categoria: "CSS",
    visual: "🎨",
    pergunta: "Para que serve o CSS em uma página web?",
    alternativas: [
        "Armazenar informações dos usuários",
        "Controlar a aparência e o estilo da página",
        "Criar a estrutura do conteúdo",
        "Executar consultas no banco de dados"
    ],
    correta: 1,
    explicacao: "O CSS controla a aparência da página, como cores, fontes, tamanhos, espaçamentos e posicionamento.",
    dica: "É responsável por deixar a página bonita e organizada."
},

{
    categoria: "JAVASCRIPT",
    visual: "🔔",
    pergunta: "Qual é uma das possibilidades do JavaScript em uma página web?",
    alternativas: [
        "Somente criar títulos",
        "Somente inserir imagens",
        "Exibir alertas e mensagens para o usuário",
        "Substituir o navegador"
    ],
    correta: 2,
    explicacao: "O JavaScript pode exibir mensagens, alertas e responder às ações do usuário.",
    dica: "Pense em uma mensagem que aparece na tela depois de uma ação."
},

{
    categoria: "JAVASCRIPT",
    visual: "⚡",
    pergunta: "Qual é a principal função do JavaScript no desenvolvimento web?",
    alternativas: [
        "Criar apenas textos",
        "Definir somente as cores",
        "Adicionar interatividade e comportamento às páginas",
        "Substituir completamente o HTML"
    ],
    correta: 2,
    explicacao: "O JavaScript permite criar interações, responder a cliques, validar formulários e modificar elementos da página.",
    dica: "Pense no que acontece quando clicamos em um botão."
},

{
    categoria: "CSS",
    visual: "📦",
    pergunta: "O que é o espaçamento interno de um elemento no CSS?",
    alternativas: [
        "A distância entre o conteúdo e a borda do próprio elemento",
        "A distância entre dois computadores",
        "O tamanho da tela",
        "A velocidade de carregamento"
    ],
    correta: 0,
    explicacao: "O padding define o espaço interno entre o conteúdo e a borda de um elemento.",
    dica: "É o espaço que fica dentro de uma caixa."
},

{
    categoria: "CSS",
    visual: "🌈",
    pergunta: "Imagine que uma página está sem cores e com aparência simples. Qual tecnologia deve ser utilizada para melhorar seu visual?",
    alternativas: [
        "CSS",
        "HTML",
        "JavaScript",
        "Banco de dados"
    ],
    correta: 0,
    explicacao: "O CSS é utilizado para personalizar a aparência visual da página.",
    dica: "É a tecnologia responsável pela decoração da página."
},

{
    categoria: "JAVASCRIPT",
    visual: "🎮",
    pergunta: "Em um jogo desenvolvido para navegador, qual tecnologia pode controlar a pontuação e as ações dos jogadores?",
    alternativas: [
        "Somente HTML",
        "Somente CSS",
        "JavaScript",
        "Editor de texto"
    ],
    correta: 2,
    explicacao: "O JavaScript pode controlar pontuação, movimentos, interações e regras de jogos.",
    dica: "É a tecnologia que permite programar os comportamentos."
},

{
    categoria: "VS CODE",
    visual: "💻",
    pergunta: "Qual é a finalidade do Visual Studio Code?",
    alternativas: [
        "Editar vídeos",
        "Editar e escrever códigos de programação",
        "Criar apresentações automaticamente",
        "Acessar redes sociais"
    ],
    correta: 1,
    explicacao: "O Visual Studio Code é um editor de código utilizado para desenvolver projetos de programação.",
    dica: "É o programa que utilizamos nas aulas para escrever HTML, CSS e JavaScript."
},

{
    categoria: "CSS",
    visual: "🖌️",
    pergunta: "Qual propriedade visual está relacionada ao arredondamento dos cantos de um elemento?",
    alternativas: [
        "Bordas arredondadas",
        "Cor da fonte",
        "Tamanho da imagem",
        "Alinhamento do texto"
    ],
    correta: 0,
    explicacao: "A propriedade border-radius permite arredondar os cantos de caixas, botões e outros elementos.",
    dica: "Observe os botões com cantos arredondados."
},

{
    categoria: "HTML",
    visual: "🔗",
    pergunta: "Qual é a finalidade de um link em uma página web?",
    alternativas: [
        "Alterar o tamanho da fonte",
        "Mudar a cor do fundo",
        "Criar uma imagem",
        "Direcionar o usuário para outra página ou endereço"
    ],
    correta: 3,
    explicacao: "Os links permitem navegar entre páginas, documentos e outros endereços da internet.",
    dica: "É utilizado quando queremos clicar em um texto e abrir outro endereço."
},

{
    categoria: "JAVASCRIPT",
    visual: "🤖",
    pergunta: "Quando o JavaScript é utilizado para verificar se um campo de formulário foi preenchido, o que ele está realizando?",
    alternativas: [
        "Uma edição de imagem",
        "Uma alteração no sistema operacional",
        "Uma validação de dados",
        "Uma formatação de texto"
    ],
    correta: 2,
    explicacao: "A validação verifica se os dados informados pelo usuário atendem às condições esperadas.",
    dica: "Pense em um formulário que não permite enviar o cadastro sem preencher o nome."
},

{
    categoria: "CSS",
    visual: "📐",
    pergunta: "O que podemos modificar utilizando o CSS?",
    alternativas: [
        "Cores, fontes, tamanhos e espaçamentos",
        "Somente o conteúdo dos textos",
        "A conexão com a internet",
        "O sistema operacional do computador"
    ],
    correta: 0,
    explicacao: "O CSS permite personalizar diversos aspectos visuais de uma página.",
    dica: "Pense nas características visuais de um site."
},

{
    categoria: "HTML",
    visual: "🔘",
    pergunta: "Qual é a finalidade de um botão em uma página web?",
    alternativas: [
        "Permitir que o usuário execute uma ação",
        "Armazenar arquivos do computador",
        "Aumentar a memória RAM",
        "Substituir o navegador"
    ],
    correta: 0,
    explicacao: "Os botões permitem iniciar ações, como enviar formulários, abrir menus e confirmar operações.",
    dica: "Pense no botão de enviar de um formulário."
},

{
    categoria: "DESENVOLVIMENTO WEB",
    visual: "🏗️",
    pergunta: "Quais são as três tecnologias fundamentais que estamos estudando em Programação Web Front-End?",
    alternativas: [
        "Python, Java e C++",
        "Word, Excel e PowerPoint",
        "HTML, CSS e JavaScript",
        "Photoshop, Canva e CorelDRAW"
    ],
    correta: 2,
    explicacao: "HTML, CSS e JavaScript trabalham juntos para construir páginas web interativas.",
    dica: "São as três tecnologias que estamos estudando neste componente."
},

{
    categoria: "DESENVOLVIMENTO WEB",
    visual: "🔗",
    pergunta: "O que significa dizer que HTML, CSS e JavaScript trabalham juntos?",
    alternativas: [
        "Que todos possuem exatamente a mesma função",
        "Que apenas um deles precisa ser utilizado",
        "Que cada um contribui com uma função diferente para construir a página",
        "Que são programas para editar fotografias"
    ],
    correta: 2,
    explicacao: "HTML estrutura, CSS estiliza e JavaScript adiciona interatividade. Juntos, formam páginas web completas.",
    dica: "Lembre-se da função de cada uma das três tecnologias."
},

{
    categoria: "CSS",
    visual: "🔤",
    pergunta: "Se quisermos mudar o tipo de letra de um texto em uma página, qual tecnologia utilizamos?",
    alternativas: [
        "CSS",
        "HTML",
        "JavaScript",
        "Navegador"
    ],
    correta: 0,
    explicacao: "O CSS permite modificar a família, o tamanho, o peso e outros aspectos das fontes.",
    dica: "Pense na tecnologia que controla a aparência dos textos."
},

{
    categoria: "CSS",
    visual: "🧱",
    pergunta: "O que é uma borda em um elemento visual de uma página?",
    alternativas: [
        "Uma linha que contorna o elemento",
        "Um tipo de imagem",
        "Um arquivo de áudio",
        "Uma função do navegador"
    ],
    correta: 0,
    explicacao: "A borda contorna um elemento e pode ter diferentes cores, espessuras e estilos.",
    dica: "Observe o contorno de uma caixa ou botão."
},

{
    categoria: "VS CODE",
    visual: "📁",
    pergunta: "Por que é importante organizar os arquivos de um projeto web em pastas?",
    alternativas: [
        "Para deixar o computador mais lento",
        "Para impedir a abertura dos arquivos",
        "Para facilitar a organização e a localização dos arquivos",
        "Para eliminar a necessidade de programação"
    ],
    correta: 2,
    explicacao: "A organização facilita a manutenção do projeto e permite encontrar os arquivos com mais facilidade.",
    dica: "Imagine um projeto com dezenas de imagens, páginas e estilos."
},

{
    categoria: "VS CODE",
    visual: "🚀",
    pergunta: "O que é o Live Server, utilizado no desenvolvimento web?",
    alternativas: [
        "Um programa para desenhar",
        "Uma linguagem de programação",
        "Uma extensão que permite visualizar a página localmente e atualizar as mudanças no navegador",
        "Um serviço de armazenamento de imagens"
    ],
    correta: 2,
    explicacao: "O Live Server é uma extensão do VS Code que inicia um servidor local para visualizar páginas durante o desenvolvimento.",
    dica: "É a ferramenta que usamos para visualizar o site enquanto programamos."
}

];


// ======================================================
// BANCO DE PERGUNTAS - RODADA 2
// ======================================================

const perguntasRodada2 = [

{
    categoria: "HTML",
    visual: "📝",
    pergunta: "Qual elemento HTML é utilizado para criar um título principal?",
    alternativas: [
        "Imagem",
        "Parágrafo",
        "Link",
        "Cabeçalho de nível 1"
    ],
    correta: 3,
    explicacao: "O elemento h1 representa o título principal de uma página ou seção.",
    dica: "É o título mais importante da página."
},

{
    categoria: "CSS",
    visual: "🎯",
    pergunta: "O que acontece quando aplicamos uma cor de fundo utilizando CSS?",
    alternativas: [
        "O conteúdo é apagado",
        "A aparência do fundo da página ou de um elemento é modificada",
        "O navegador é fechado",
        "O arquivo HTML é excluído"
    ],
    correta: 1,
    explicacao: "O CSS permite definir cores de fundo para a página e para seus elementos.",
    dica: "Pense na cor que aparece atrás dos textos e imagens."
},

{
    categoria: "HTML",
    visual: "🖼️",
    pergunta: "Qual elemento HTML é utilizado para inserir uma imagem em uma página?",
    alternativas: [
        "Tabela",
        "Parágrafo",
        "Imagem",
        "Lista"
    ],
    correta: 2,
    explicacao: "O elemento img é utilizado para inserir imagens em páginas HTML.",
    dica: "Seu nome é uma abreviação da palavra imagem em inglês."
},

{
    categoria: "HTML",
    visual: "🧩",
    pergunta: "O que são elementos HTML?",
    alternativas: [
        "Peças físicas do computador",
        "Tipos de conexão de internet",
        "Programas de edição de vídeo",
        "Componentes utilizados para estruturar o conteúdo de uma página"
    ],
    correta: 3,
    explicacao: "Os elementos HTML representam diferentes partes do conteúdo, como títulos, parágrafos, imagens e links.",
    dica: "São os componentes que formam a estrutura da página."
},

{
    categoria: "JAVASCRIPT",
    visual: "🖱️",
    pergunta: "Um botão de um site mostra uma mensagem quando recebe um clique. Qual tecnologia pode realizar essa ação?",
    alternativas: [
        "Somente HTML",
        "JavaScript",
        "Somente CSS",
        "Editor de imagens"
    ],
    correta: 1,
    explicacao: "O JavaScript pode detectar o clique do usuário e executar uma ação, como mostrar uma mensagem.",
    dica: "É a tecnologia que dá comportamento aos elementos."
},

{
    categoria: "DESENVOLVIMENTO WEB",
    visual: "🔍",
    pergunta: "Qual é a função do navegador ao abrir uma página HTML?",
    alternativas: [
        "Apagar o código",
        "Interpretar e apresentar o conteúdo da página",
        "Criar automaticamente um banco de dados",
        "Substituir o editor de código"
    ],
    correta: 1,
    explicacao: "O navegador interpreta os arquivos web e apresenta a página para o usuário.",
    dica: "É ele que transforma os arquivos em uma página que conseguimos visualizar."
},

{
    categoria: "HTML",
    visual: "📄",
    pergunta: "Qual é a função do elemento que representa um parágrafo em HTML?",
    alternativas: [
        "Inserir uma imagem",
        "Criar um botão",
        "Criar uma tabela",
        "Organizar um bloco de texto"
    ],
    correta: 3,
    explicacao: "O elemento p é utilizado para representar parágrafos de texto.",
    dica: "É utilizado para escrever textos em blocos."
},

{
    categoria: "HTML",
    visual: "📨",
    pergunta: "Para que servem os formulários em HTML?",
    alternativas: [
        "Criar efeitos de sombra",
        "Mudar a cor do navegador",
        "Organizar pastas do computador",
        "Permitir que o usuário envie informações"
    ],
    correta: 3,
    explicacao: "Formulários permitem coletar informações, como nome, e-mail e mensagens.",
    dica: "Pense em uma tela de cadastro."
},

{
    categoria: "JAVASCRIPT",
    visual: "🧮",
    pergunta: "O JavaScript pode ser utilizado para realizar cálculos em uma página web?",
    alternativas: [
        "Não, nunca",
        "Sim, pode realizar cálculos e operações",
        "Somente quando conectado a uma impressora",
        "Apenas para mudar imagens"
    ],
    correta: 1,
    explicacao: "O JavaScript permite realizar operações matemáticas e utilizar seus resultados em aplicações.",
    dica: "Uma calculadora online pode utilizar essa tecnologia."
},

{
    categoria: "VS CODE",
    visual: "🛠️",
    pergunta: "O que é uma extensão no Visual Studio Code?",
    alternativas: [
        "Uma peça do computador",
        "Um recurso que adiciona funcionalidades ao editor",
        "Um tipo de navegador",
        "Um arquivo de imagem"
    ],
    correta: 1,
    explicacao: "As extensões adicionam recursos ao VS Code, como suporte a linguagens e ferramentas de desenvolvimento.",
    dica: "É possível instalar recursos adicionais no editor."
},

{
    categoria: "HTML",
    visual: "🧭",
    pergunta: "O que significa a sigla HTML?",
    alternativas: [
        "High Technology Modern Language",
        "Home Tool Markup Language",
        "Hyper Transfer Main Language",
        "HyperText Markup Language"
    ],
    correta: 3,
    explicacao: "HTML significa HyperText Markup Language, ou Linguagem de Marcação de Hipertexto.",
    dica: "É uma linguagem de marcação utilizada na web."
},

{
    categoria: "FRONT-END",
    visual: "👀",
    pergunta: "Qual alternativa representa um exemplo de Front-End?",
    alternativas: [
        "O servidor que armazena os dados",
        "O banco de dados de uma empresa",
        "A configuração interna de uma hospedagem",
        "A tela de login que o usuário visualiza e utiliza"
    ],
    correta: 3,
    explicacao: "A tela de login faz parte da interface com a qual o usuário interage.",
    dica: "É algo que aparece na tela para o usuário."
},

{
    categoria: "CSS",
    visual: "📱",
    pergunta: "Uma página web precisa se adaptar a celulares e computadores. Qual conceito do CSS ajuda nessa tarefa?",
    alternativas: [
        "Design responsivo",
        "Banco de dados",
        "Compilação",
        "Hospedagem"
    ],
    correta: 0,
    explicacao: "O design responsivo permite que a página se adapte a diferentes tamanhos de tela.",
    dica: "Pense em um site que funciona bem tanto no celular quanto no computador."
},

{
    categoria: "CSS",
    visual: "📏",
    pergunta: "Qual é a importância de organizar os elementos de uma página com CSS?",
    alternativas: [
        "Impedir o acesso ao site",
        "Melhorar a disposição e a organização visual do conteúdo",
        "Apagar informações",
        "Desligar o navegador"
    ],
    correta: 1,
    explicacao: "O CSS permite posicionar e organizar os elementos, tornando a página mais agradável e fácil de utilizar.",
    dica: "Pense em um site onde tudo está organizado e alinhado."
},

{
    categoria: "DESENVOLVIMENTO WEB",
    visual: "🌍",
    pergunta: "O que é um navegador web?",
    alternativas: [
        "Um programa para editar imagens",
        "Um programa utilizado para acessar e visualizar páginas da internet",
        "Um tipo de linguagem de programação",
        "Um dispositivo de armazenamento"
    ],
    correta: 1,
    explicacao: "Navegadores como Chrome, Firefox e Edge permitem acessar e visualizar páginas web.",
    dica: "É o programa que utilizamos para abrir sites."
},

{
    categoria: "HTML",
    visual: "📂",
    pergunta: "Qual extensão normalmente é utilizada para salvar um arquivo HTML?",
    alternativas: [
        ".jpg",
        ".mp3",
        ".pdf",
        ".html"
    ],
    correta: 3,
    explicacao: "Arquivos HTML normalmente são salvos com a extensão .html.",
    dica: "O nome da extensão é igual à sigla da linguagem."
},

{
    categoria: "HTML",
    visual: "📋",
    pergunta: "Qual é a função das listas em HTML?",
    alternativas: [
        "Criar animações",
        "Alterar o fundo da página",
        "Organizar informações em itens",
        "Executar cálculos"
    ],
    correta: 2,
    explicacao: "As listas organizam informações em itens numerados ou não numerados.",
    dica: "Pense em uma lista de compras."
},

{
    categoria: "JAVASCRIPT",
    visual: "🔄",
    pergunta: "O JavaScript pode modificar o conteúdo de uma página depois que ela já foi carregada?",
    alternativas: [
        "Não, nunca",
        "Sim, pode modificar elementos e conteúdos da página",
        "Somente se o computador for reiniciado",
        "Apenas quando não existe HTML"
    ],
    correta: 1,
    explicacao: "O JavaScript pode alterar textos, imagens e outros elementos da página enquanto ela está em uso.",
    dica: "Pense em uma mensagem que muda depois de clicar em um botão."
},

{
    categoria: "FRONT-END",
    visual: "🖥️",
    pergunta: "O que significa desenvolver o Front-End de um site?",
    alternativas: [
        "Criar apenas o banco de dados",
        "Configurar somente o servidor",
        "Gerenciar exclusivamente os arquivos internos",
        "Desenvolver a parte visual e interativa com a qual o usuário interage"
    ],
    correta: 3,
    explicacao: "O Front-End é a parte da aplicação com a qual o usuário interage diretamente.",
    dica: "É tudo aquilo que o usuário consegue visualizar e utilizar no site."
},

{
    categoria: "FRONT-END",
    visual: "🏁",
    pergunta: "Qual é o objetivo principal do desenvolvimento Front-End?",
    alternativas: [
        "Criar exclusivamente servidores",
        "Trabalhar apenas com banco de dados",
        "Configurar redes de computadores",
        "Construir interfaces que sejam funcionais, organizadas e agradáveis para o usuário"
    ],
    correta: 3,
    explicacao: "O Front-End busca construir interfaces com boa apresentação e facilidade de uso.",
    dica: "Pense na experiência de quem acessa um site."
}

];


// ======================================================
// FUNÇÕES DE NAVEGAÇÃO
// ======================================================

function mostrarTela(id) {

    document.querySelectorAll(".tela").forEach(tela => {
        tela.classList.remove("ativa");
    });

    document.getElementById(id).classList.add("ativa");
}


function mostrarCadastro() {

    document.getElementById("nome1").value = "";
    document.getElementById("nome2").value = "";

    mostrarTela("tela-cadastro");
}


// ======================================================
// CADASTRO E INÍCIO DAS RODADAS
// ======================================================

function iniciarRodada() {

    const nome1 = document.getElementById("nome1").value.trim();
    const nome2 = document.getElementById("nome2").value.trim();

    if (!nome1 || !nome2) {
        alert("Digite o nome das duas equipes antes de começar!");
        return;
    }

    if (rodadaAtual === 1) {

        equipes[0] = nome1;
        equipes[1] = nome2;

        perguntasAtuais = perguntasRodada1;

        equipeAtual = 0;
        indicePergunta = 0;

    } else {

        equipes[2] = nome1;
        equipes[3] = nome2;

        perguntasAtuais = perguntasRodada2;

        equipeAtual = 2;
        indicePergunta = 0;
    }

    mostrarTela("tela-jogo");

    carregarPergunta();
}


// ======================================================
// CARREGAMENTO DAS PERGUNTAS
// ======================================================

function carregarPergunta() {

    pararCronometro();

    if (indicePergunta >= perguntasAtuais.length) {
        finalizarRodada();
        return;
    }

    perguntaRespondida = false;
    jogoPausado = false;
    perguntaDoBau = false;

    tempoRestante = TEMPO_INICIAL;

    const pergunta = perguntasAtuais[indicePergunta];

    document.getElementById("numero-questao").textContent =
        `Questão ${indicePergunta + 1}/20`;

    document.getElementById("categoria").textContent =
        pergunta.categoria;

    document.getElementById("vez-equipe").textContent =
        `Vez de: ${equipes[equipeAtual]}`;

    document.getElementById("visual-pergunta").textContent =
        pergunta.visual;

    document.getElementById("pergunta").textContent =
        pergunta.pergunta;

    document.getElementById("tempo").textContent =
        tempoRestante;

    document.getElementById("pontos1").textContent =
        pontuacao[rodadaAtual === 1 ? 0 : 2];

    document.getElementById("pontos2").textContent =
        pontuacao[rodadaAtual === 1 ? 1 : 3];

    document.getElementById("nome-equipe1").textContent =
        equipes[rodadaAtual === 1 ? 0 : 2];

    document.getElementById("nome-equipe2").textContent =
        equipes[rodadaAtual === 1 ? 1 : 3];

    document.getElementById("barra-progresso").style.width =
        `${(indicePergunta / perguntasAtuais.length) * 100}%`;

    document.getElementById("feedback").textContent = "";

    document.getElementById("resultado-resposta").className =
        "resultado-resposta escondido";

    const alternativas = document.getElementById("alternativas");

    alternativas.innerHTML = "";

    pergunta.alternativas.forEach((alternativa, indice) => {

        const botao = document.createElement("button");

        botao.className = "alternativa";

        botao.textContent =
            `${String.fromCharCode(65 + indice)}) ${alternativa}`;

        botao.onclick = () => responder(indice);

        alternativas.appendChild(botao);
    });

    atualizarBotoesPoderes();

    atualizarBotaoPausa();

    iniciarCronometro();
}


// ======================================================
// CRONÔMETRO
// ======================================================

function iniciarCronometro() {

    pararCronometro();

    if (jogoPausado || perguntaRespondida) {
        return;
    }

    intervalo = setInterval(() => {

        tempoRestante--;

        document.getElementById("tempo").textContent =
            tempoRestante;

        if (tempoRestante <= 10) {
            document.querySelector(".cronometro").style.color = "#fb7185";
        } else {
            document.querySelector(".cronometro").style.color = "#facc15";
        }

        if (tempoRestante <= 0) {

            pararCronometro();

            tempoEsgotado();
        }

    }, 1000);
}


function pararCronometro() {

    if (intervalo !== null) {

        clearInterval(intervalo);

        intervalo = null;
    }
}


function pausarTempo() {

    if (perguntaRespondida) {
        return;
    }

    if (jogoPausado) {

        jogoPausado = false;

        atualizarBotaoPausa();

        iniciarCronometro();

    } else {

        jogoPausado = true;

        pararCronometro();

        atualizarBotaoPausa();
    }
}


function atualizarBotaoPausa() {

    const botao = document.getElementById("btn-pausar");

    if (jogoPausado) {

        botao.textContent = "▶️ RETOMAR";

        botao.classList.add("pausado");

    } else {

        botao.textContent = "⏸️ PAUSAR";

        botao.classList.remove("pausado");
    }
}


// ======================================================
// RESPOSTAS
// ======================================================

function responder(indiceEscolhido) {

    if (perguntaRespondida || jogoPausado) {
        return;
    }

    perguntaRespondida = true;

    pararCronometro();

    const pergunta = perguntasAtuais[indicePergunta];

    const botoes = document.querySelectorAll(".alternativa");

    botoes.forEach((botao, indice) => {

        botao.disabled = true;

        if (indice === pergunta.correta) {

            botao.classList.add("correta");

        } else if (indice === indiceEscolhido) {

            botao.classList.add("errada");
        }
    });

    if (indiceEscolhido === pergunta.correta) {

        pontuacao[equipeAtual] += PONTOS_POR_QUESTAO;

        mostrarResultado(
            true,
            "🎉 RESPOSTA CORRETA!",
            `Parabéns! A equipe ganhou ${PONTOS_POR_QUESTAO} pontos. ${pergunta.explicacao}`
        );

    } else {

        mostrarResultado(
            false,
            "❌ RESPOSTA INCORRETA!",
            `A resposta correta era: ${pergunta.alternativas[pergunta.correta]}. ${pergunta.explicacao}`
        );

        proximaAcao = "roubar";
    }

    atualizarPlacar();
}


// ======================================================
// TEMPO ESGOTADO
// ======================================================

function tempoEsgotado() {

    if (perguntaRespondida) {
        return;
    }

    perguntaRespondida = true;

    const pergunta = perguntasAtuais[indicePergunta];

    const botoes = document.querySelectorAll(".alternativa");

    botoes.forEach((botao, indice) => {

        botao.disabled = true;

        if (indice === pergunta.correta) {
            botao.classList.add("correta");
        }
    });

    mostrarResultado(
        false,
        "⏰ TEMPO ESGOTADO!",
        `A equipe não respondeu a tempo. A resposta correta era: ${pergunta.alternativas[pergunta.correta]}. ${pergunta.explicacao}`
    );

    proximaAcao = "roubar";
}


// ======================================================
// PAINEL DE RESULTADO
// ======================================================

function mostrarResultado(acertou, titulo, explicacao) {

    const painel = document.getElementById("resultado-resposta");

    painel.classList.remove("escondido", "acertou", "errou");

    painel.classList.add(acertou ? "acertou" : "errou");

    document.getElementById("titulo-resposta").textContent =
        titulo;

    document.getElementById("explicacao-resposta").textContent =
        explicacao;

    document.getElementById("feedback").textContent =
        acertou ? "Muito bem! 👏" : "Vamos para a próxima!";
}


// ======================================================
// CONTINUAR APÓS A RESPOSTA
// ======================================================

function continuarJogo() {

    document.getElementById("resultado-resposta").classList.add("escondido");

    if (proximaAcao === "roubar") {

        proximaAcao = null;

        abrirModalRoubaPontos();

        return;
    }

    avancarPergunta();
}


// ======================================================
// ROUBA-PONTOS
// ======================================================

function abrirModalRoubaPontos() {

    const equipeAdversaria = equipeAtual % 2 === 0
        ? equipeAtual + 1
        : equipeAtual - 1;

    pontuacao[equipeAdversaria] += PONTOS_ROUBA;

    atualizarPlacar();

    document.getElementById("titulo-modal").textContent =
        "💰 ROUBA-PONTOS!";

    document.getElementById("texto-modal").textContent =
        `${equipes[equipeAdversaria]} recebeu ${PONTOS_ROUBA} pontos por causa do erro ou do tempo esgotado da equipe adversária!`;

    document.getElementById("opcoes-modal").innerHTML = "";

    document.getElementById("fechar-modal").textContent =
        "CONTINUAR";

    document.getElementById("modal-desafio").classList.remove("escondido");

    document.getElementById("fechar-modal").onclick = () => {

        fecharModal();

        avancarPergunta();
    };
}


// ======================================================
// AVANÇAR PERGUNTA
// ======================================================

function avancarPergunta() {

    pararCronometro();

    indicePergunta++;

    equipeAtual = equipeAtual % 2 === 0
        ? equipeAtual + 1
        : equipeAtual - 1;

    carregarPergunta();
}


// ======================================================
// ATUALIZAÇÃO DO PLACAR
// ======================================================

function atualizarPlacar() {

    const indice1 = rodadaAtual === 1 ? 0 : 2;
    const indice2 = rodadaAtual === 1 ? 1 : 3;

    document.getElementById("pontos1").textContent =
        pontuacao[indice1];

    document.getElementById("pontos2").textContent =
        pontuacao[indice2];
}


// ======================================================
// PODER 1 - PULAR QUESTÃO
// ======================================================

function pularQuestao() {

    if (pularUsado || perguntaRespondida || jogoPausado) {
        return;
    }

    pularUsado = true;

    perguntaRespondida = true;

    pararCronometro();

    document.getElementById("feedback").textContent =
        "⏭️ A equipe decidiu pular esta questão!";

    document.querySelectorAll(".alternativa").forEach(botao => {
        botao.disabled = true;
    });

    mostrarResultado(
        false,
        "⏭️ QUESTÃO PULADA!",
        "A equipe utilizou o poder de pular questão. Nenhum ponto foi recebido nesta pergunta."
    );

    proximaAcao = null;

    atualizarBotoesPoderes();
}


// ======================================================
// PODER 2 - CARTAS MISTERIOSAS
// ======================================================

function abrirCartas() {

    if (cartaUsada || perguntaRespondida || jogoPausado) {
        return;
    }

    cartaUsada = true;

    pararCronometro();

    jogoPausado = true;

    indiceCartaEscolhida = null;

    document.getElementById("resultado-carta").textContent = "";

    document.getElementById("voltar-cartas").classList.add("escondido");

    document.querySelectorAll(".carta").forEach(botao => {
        botao.disabled = false;
    });

    mostrarTela("tela-cartas");

    atualizarBotoesPoderes();
}


function revelarCarta(indice) {

    if (indiceCartaEscolhida !== null) {
        return;
    }

    indiceCartaEscolhida = indice;

    const cartas = [
        {
            nome: "BRONZE 🥉",
            eliminar: 1
        },
        {
            nome: "PRATA 🥈",
            eliminar: 2
        },
        {
            nome: "OURO 🥇",
            eliminar: 3
        }
    ];

    const carta = cartas[indice];

    const pergunta = perguntasAtuais[indicePergunta];

    let alternativasErradas = [];

    pergunta.alternativas.forEach((alternativa, i) => {

        if (i !== pergunta.correta) {
            alternativasErradas.push(i);
        }
    });

    alternativasErradas.sort(() => Math.random() - 0.5);

    const quantidade = Math.min(
        carta.eliminar,
        alternativasErradas.length
    );

    const eliminadas = alternativasErradas.slice(0, quantidade);

    eliminadas.forEach(i => {

        const botao = document.querySelectorAll(".alternativa")[i];

        if (botao) {
            botao.classList.add("eliminada");
            botao.disabled = true;
        }
    });

    document.getElementById("resultado-carta").innerHTML =
        `<h2>CARTA ${carta.nome}</h2>
         <p>Você eliminou ${quantidade} alternativa(s) incorreta(s)!</p>`;

    document.querySelectorAll(".carta").forEach(botao => {
        botao.disabled = true;
    });

    document.getElementById("voltar-cartas").classList.remove("escondido");
}


function voltarPergunta() {

    mostrarTela("tela-jogo");

    jogoPausado = false;

    atualizarBotaoPausa();

    iniciarCronometro();
}


// ======================================================
// PODER 3 - TEMPO EXTRA
// ======================================================

function tempoExtra() {

    if (tempoExtraUsado || perguntaRespondida || jogoPausado) {
        return;
    }

    tempoExtraUsado = true;

    tempoRestante += 15;

    document.getElementById("tempo").textContent =
        tempoRestante;

    document.getElementById("feedback").textContent =
        "⏱️ A equipe ganhou mais 15 segundos!";

    atualizarBotoesPoderes();
}


// ======================================================
// PODER 4 - PEDIR DICA
// ======================================================

function mostrarDica() {

    if (dicaUsada || perguntaRespondida || jogoPausado) {
        return;
    }

    dicaUsada = true;

    const pergunta = perguntasAtuais[indicePergunta];

    document.getElementById("feedback").textContent =
        `💡 DICA: ${pergunta.dica}`;

    atualizarBotoesPoderes();
}


// ======================================================
// PODER 5 - BAÚ SURPRESA
// ======================================================

function abrirBau() {

    if (bauUsado || perguntaRespondida || jogoPausado) {
        return;
    }

    bauUsado = true;

    pararCronometro();

    jogoPausado = true;

    const perguntaBau = {
        pergunta: "Qual das três tecnologias é responsável pela estrutura de uma página web?",
        alternativas: [
            "CSS",
            "JavaScript",
            "HTML",
            "Nenhuma delas"
        ],
        correta: 2
    };

    document.getElementById("titulo-modal").textContent =
        "🎁 BAÚ SURPRESA!";

    document.getElementById("texto-modal").textContent =
        perguntaBau.pergunta;

    const opcoes = document.getElementById("opcoes-modal");

    opcoes.innerHTML = "";

    perguntaBau.alternativas.forEach((alternativa, indice) => {

        const botao = document.createElement("button");

        botao.textContent =
            `${String.fromCharCode(65 + indice)}) ${alternativa}`;

        botao.onclick = () => responderBau(indice, perguntaBau);

        opcoes.appendChild(botao);
    });

    document.getElementById("fechar-modal").classList.add("escondido");

    document.getElementById("modal-desafio").classList.remove("escondido");

    atualizarBotoesPoderes();
}


function responderBau(indice, perguntaBau) {

    const opcoes = document.getElementById("opcoes-modal");

    opcoes.querySelectorAll("button").forEach(botao => {
        botao.disabled = true;
    });

    if (indice === perguntaBau.correta) {

        pontuacao[equipeAtual] += PONTOS_BAU;

        document.getElementById("texto-modal").textContent =
            `🎉 CORRETO! A equipe ganhou ${PONTOS_BAU} pontos extras!`;

    } else {

        document.getElementById("texto-modal").textContent =
            "❌ Resposta incorreta! O baú não concedeu pontos desta vez.";

    }

    atualizarPlacar();

    document.getElementById("fechar-modal").classList.remove("escondido");

    document.getElementById("fechar-modal").textContent =
        "VOLTAR AO JOGO";

    document.getElementById("fechar-modal").onclick = () => {

        fecharModal();

        jogoPausado = false;

        atualizarBotaoPausa();

        iniciarCronometro();
    };
}


// ======================================================
// ATUALIZAÇÃO DOS PODERES
// ======================================================

function atualizarBotoesPoderes() {

    document.getElementById("btn-pular").disabled =
        pularUsado;

    document.getElementById("btn-cartas").disabled =
        cartaUsada;

    document.getElementById("btn-tempo").disabled =
        tempoExtraUsado;

    document.getElementById("btn-dica").disabled =
        dicaUsada;

    document.getElementById("btn-bau").disabled =
        bauUsado;
}


// ======================================================
// MODAL
// ======================================================

function fecharModal() {

    document.getElementById("modal-desafio").classList.add("escondido");

    document.getElementById("fechar-modal").onclick =
        fecharModal;

    document.getElementById("fechar-modal").classList.remove("escondido");
}


// ======================================================
// FINALIZAÇÃO DA RODADA
// ======================================================

function finalizarRodada() {

    pararCronometro();

    mostrarTela("tela-resultado");

    const indice1 = rodadaAtual === 1 ? 0 : 2;
    const indice2 = rodadaAtual === 1 ? 1 : 3;

    const pontos1 = pontuacao[indice1];
    const pontos2 = pontuacao[indice2];

    let vencedor;

    if (pontos1 > pontos2) {

        vencedor = equipes[indice1];

    } else if (pontos2 > pontos1) {

        vencedor = equipes[indice2];

    } else {

        vencedor = "EMPATE!";
    }

    document.getElementById("vencedor").textContent =
        vencedor === "EMPATE!"
            ? "🤝 A disputa terminou empatada!"
            : `🏆 ${vencedor} venceu a disputa!`;

    document.getElementById("placar-final").innerHTML =
        `<p>🔵 ${equipes[indice1]}: <strong>${pontos1} pontos</strong></p>
         <p>🔴 ${equipes[indice2]}: <strong>${pontos2} pontos</strong></p>`;
}


// ======================================================
// PRÓXIMA RODADA
// ======================================================

function proximaRodada() {

    if (rodadaAtual === 1) {

        rodadaAtual = 2;

        mostrarCadastro();

        alert("Agora é a vez das equipes 3 e 4! Cadastrem seus nomes.");

    } else {

        finalizarCampeonato();
    }
}


// ======================================================
// RANKING FINAL
// ======================================================

function finalizarCampeonato() {

    mostrarTela("tela-campeao");

    let ranking = equipes.map((nome, indice) => {

        return {
            nome: nome,
            pontos: pontuacao[indice]
        };

    });

    ranking.sort((a, b) => b.pontos - a.pontos);

    document.getElementById("campea").textContent =
        ranking[0].nome;

    let html = "";

    ranking.forEach((equipe, indice) => {

        let medalha = "";

        if (indice === 0) {
            medalha = "🥇";
        } else if (indice === 1) {
            medalha = "🥈";
        } else if (indice === 2) {
            medalha = "🥉";
        } else {
            medalha = "🏅";
        }

        html += `
            <p>
                ${medalha}
                ${indice + 1}º lugar -
                <strong>${equipe.nome}</strong>:
                ${equipe.pontos} pontos
            </p>
        `;
    });

    document.getElementById("ranking-final").innerHTML =
        html;
}