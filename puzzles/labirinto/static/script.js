function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('visible');
    });
    document.getElementById(sectionId).classList.add('visible');
}

function createLabirinto() {
    const labirinto = document.getElementById('labirinto');
    const sections = {
        "entrada": {
            title: "Entrada",
            content: "Você está na entrada do labirinto. Escolha sabiamente para encontrar a saída.",
            choices: [
                { text: "Entrar no labirinto", target: "secao1" }
            ]
        },
        "secao1": {
            title: "Quadrado 1",
            content: "Você chegou ao primeiro quadrado. Qual caminho você escolhe?",
            choices: [
                { text: "Seguir em frente", target: "secao2" },
                { text: "Virar à esquerda", target: "entrada" },
                { text: "Virar à direita", target: "teleportado" }
            ]
        },
        "secao2": {
            title: "Quadrado 2",
            content: "Você encontrou outro quadrado. Qual caminho você escolhe?",
            choices: [
                { text: "Seguir em frente", target: "adormeceu" },
                { text: "Virar à esquerda", target: "secao3" },
                { text: "Virar à direita", target: "entrada" }
            ]
        },
        "secao3": {
            title: "Quadrado 3",
            content: "Você chegou a um quadrado. Qual caminho você escolhe?",
            choices: [
                { text: "Seguir em frente", target: "secao4" },
                { text: "Virar à esquerda", target: "armadilha" },
                { text: "Virar à direita", target: "entrada" }
            ]
        },
        "secao4": {
            title: "Quadrado 4",
            content: "Você chegou a um quadrado. Qual caminho você escolhe?",
            choices: [
                { text: "Seguir em frente", target: "secao5" },
                { text: "Virar à esquerda", target: "entrada" },
                { text: "Virar à direita", target: "adormeceu" }
            ]
        },

        "secao5": {
            title: "Quadrado 5",
            content: "Você chegou a um quadrado. Qual caminho você escolhe?",
            choices: [
                { text: "Seguir em frente", target: "entrada" },
                { text: "Virar à esquerda", target: "estatua" },
                { text: "Virar à direita", target: "secao6" }
            ]
        },

        "secao6": {
            title: "Quadrado 6",
            content: "Você chegou a um quadrado. Qual caminho você escolhe?",
            choices: [
                { text: "Seguir em frente", target: "entrada" },
                { text: "Virar à esquerda", target: "entrada" },
                { text: "Virar à direita", target: "secao7" }
            ]
        },

        "secao7": {
            title: "Quadrado 7",
            content: "Você chegou a um quadrado. Qual caminho você escolhe?",
            choices: [
                { text: "Seguir em frente", target: "adormeceu" },
                { text: "Virar à esquerda", target: "entrada" },
                { text: "Virar à direita", target: "secao8" }
            ]
        },

        "secao8": {
            title: "Quadrado 8",
            content: "Você chegou a um quadrado. Qual caminho você escolhe?",
            choices: [
                { text: "Seguir em frente", target: "secao9" },
                { text: "Virar à esquerda", target: "entrada" }
            ]
        },

        "secao9": {
            title: "Quadrado 9",
            content: "Você chegou a um quadrado. Qual caminho você escolhe?",
            choices: [
                { text: "Seguir em frente", target: "secao10" },
                { text: "Virar à esquerda", target: "adormeceu" }
            ]
        },

        "secao10": {
            title: "Quadrado 10",
            content: "Você chegou a um quadrado. Qual caminho você escolhe?",
            choices: [
                { text: "Seguir em frente", target: "secao11" },
                { text: "Virar à esquerda", target: "adormeceu" }
            ]
        },

        "secao11": {
            title: "Quadrado 11",
            content: "Você chegou a um quadrado. Qual caminho você escolhe?",
            choices: [
                { text: "Seguir em frente", target: "entrada" },
                { text: "Virar à esquerda", target: "secao12" }
            ]
        },

        "secao12": {
            title: "Quadrado 12",
            content: "Você chegou a um quadrado. Qual caminho você escolhe?",
            choices: [
                { text: "Seguir em frente", target: "entrada" },
                { text: "Virar à esquerda", target: "secao13" },
                { text: "Virar à direita", target: "entrada" }
            ]
        },

        "secao13": {
            title: "Quadrado 13",
            content: "Você chegou a um quadrado. Qual caminho você escolhe?",
            choices: [
                { text: "Seguir em frente", target: "secao14" },
                { text: "Virar à esquerda", target: "teleportado" },
                { text: "Virar à direita", target: "entrada" }
            ]
        },

        "secao14": {
            title: "Quadrado 14",
            content: "Você chegou a um quadrado. Qual caminho você escolhe?",
            choices: [
                { text: "Seguir em frente", target: "secao15" },
                { text: "Virar à esquerda", target: "entrada" },
                { text: "Virar à direita", target: "entrada" }
            ]
        },

        "secao15": {
            title: "Quadrado 15",
            content: "Você está perto do final. Qual caminho você escolhe?",
            choices: [
                { text: "Seguir em frente", target: "entrada" },
                { text: "Virar à esquerda", target: "secao16" },
                { text: "Virar à direita", target: "armadilha" }
            ]
        },

        "secao16": {
            title: "Quadrado 16",
            content: "Você está perto do final. Qual caminho você escolhe?",
            choices: [
                { text: "Seguir em frente", target: "entrada" },
                { text: "Virar à esquerda", target: "secao17" },
                { text: "Virar à direita", target: "entrada" }
            ]
        },

        "secao17": {
            title: "Quadrado 17",
            content: "Você está perto do final. Qual caminho você escolhe?",
            choices: [
                { text: "Seguir em frente", target: "secao18" },
                { text: "Virar à esquerda", target: "entrada" },
                { text: "Virar à direita", target: "entrada" }
            ]
        },

        "secao18": {
            title: "Quadrado 18",
            content: "Você está perto do final. Qual caminho você escolhe?",
            choices: [
                { text: "Seguir em frente", target: "saida" }
            ]
        },

        "adormeceu": {
            title: "ZzZzZzzZZzZZZz",
            content: "Você adormeceu enquanto cruzava o labirinto você voltou ao inicio.",
            choices: [
                { text: "Acordar", target: "entrada" }
            ]
        },

        "estatua": {
            title: "Estatua",
            content: "Você é levado para a frente da estatua que começa a falar com você só clique no botão após falar com o mestre.",
            choices: [
                { text: "Terminar de falar", target: "entrada" }
            ]
        },

        "teleportado": {
            title: "Você foi teleportado",
            content: "Você foi teleportado para um lugar na mansão role 1d10",
            choices: [
                { text: "Menor que 5", target: "menor" },
                { text: "Maior que 5", target: "maior" }
            ]
        },

        "menor": {
            title: "Você foi teleportado",
            content: "Você foi teleportado para as catacumbas da mansão.",
            choices: []
        },

        "maior": {
            title: "Você foi teleportado",
            content: "Você foi teleportado para uma sala com um grande relogio.",
            choices: []
        },

        "armadilha": {
            title: "Armadilha",
            content: "Você caiu em uma armadilha magica, Role -1d3 pontos de vidas perdidos.",
            choices: [
                { text: "Levantar", target: "entrada" }
            ]
        },

        "saida": {
            title: "Saída",
            content: "Parabéns! Você completou o labirinto.",
            choices: []
        }
    };

    Object.keys(sections).forEach(sectionId => {
        const section = sections[sectionId];
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'section';
        sectionDiv.id = sectionId;

        const title = document.createElement('h2');
        title.textContent = section.title;
        sectionDiv.appendChild(title);

        const content = document.createElement('p');
        content.textContent = section.content;
        sectionDiv.appendChild(content);

        section.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.onclick = () => showSection(choice.target);
            sectionDiv.appendChild(button);
        });

        labirinto.appendChild(sectionDiv);
    });

    showSection('entrada');
}

document.addEventListener('DOMContentLoaded', createLabirinto);
