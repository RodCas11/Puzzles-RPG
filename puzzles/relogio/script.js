let constellationAngle = 270;
let planetAngle = 270;
let alchemyAngle = 270;

const correctAngles = {
    constellation: 120, // Example correct angle
    planet: 240, // Example correct angle
    alchemy: 30 // Example correct angle
};

function rotateHand(hand) {
    let handElement;
    if (hand === 'constellation') {
        handElement = document.getElementById('constellation-hand');
        constellationAngle = (constellationAngle + 30) % 360;
        handElement.style.transform = `rotate(${constellationAngle}deg)`;
    } else if (hand === 'planet') {
        handElement = document.getElementById('planet-hand');
        planetAngle = (planetAngle + 30) % 360;
        handElement.style.transform = `rotate(${planetAngle}deg)`;
    } else if (hand === 'alchemy') {
        handElement = document.getElementById('alchemy-hand');
        alchemyAngle = (alchemyAngle + 30) % 360;
        handElement.style.transform = `rotate(${alchemyAngle}deg)`;
    }
}

function checkSolution() {
    if (constellationAngle === correctAngles.constellation &&
        planetAngle === correctAngles.planet &&
        alchemyAngle === correctAngles.alchemy) {
        document.getElementById('result').innerText = "Parabéns! Você resolveu o enigma.";
    } else {
        document.getElementById('result').innerText = "Solução incorreta. Tente novamente.";
    }
}
