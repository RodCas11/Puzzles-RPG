function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const symbol = document.getElementById(data);
    const pedestal = event.target;

    if (pedestal.classList.contains('pedestal')) {
        pedestal.innerHTML = '';
        pedestal.appendChild(symbol);
        
        // Reproduzir som de colocar objeto
        const placeSound = document.getElementById('placeSound');
        placeSound.play();
    }
}

function checkConfiguration() {
    const pedestal1 = document.getElementById('pedestal1').firstChild ? document.getElementById('pedestal1').firstChild.alt : null;
    const pedestal2 = document.getElementById('pedestal2').firstChild ? document.getElementById('pedestal2').firstChild.alt : null;
    const pedestal3 = document.getElementById('pedestal3').firstChild ? document.getElementById('pedestal3').firstChild.alt : null;
    const pedestal4 = document.getElementById('pedestal4').firstChild ? document.getElementById('pedestal4').firstChild.alt : null;

    const combination = {
        pedestal1: pedestal1,
        pedestal2: pedestal2,
        pedestal3: pedestal3,
        pedestal4: pedestal4
    };

    fetch('/check', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(combination)
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'correct') {
            alert('Tururum !!!');
            document.getElementById('correctImage').classList.remove('hidden');
            document.getElementById('check').classList.add('hidden'); // Oculta o botão
            
            // Reproduzir som de resposta correta
            const correctSound = document.getElementById('correctSound');
            correctSound.play();
        } else {
            alert('Nada Acontece!');
        }
    });
}
