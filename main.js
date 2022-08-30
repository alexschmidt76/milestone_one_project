colors = ['green', 'red', 'yellow', 'blue'];
sequence = [];
playerSequence = [];

// add new random move
function addToSequence() {
    sequence.push(colors[Math.floor(Math.random() * 4)]);
}

// show the current sequence
async function showSequence() {
    for (let i = 0; i < colors.length; i++) {
        color = colors[i]
        document.getElementById(color).style.filter = 'brightness(1)';
        await sleep(500);
        document.getElementById(color).style.filter = 'brightness(.7)';
        await sleep(250);
    };
}

// create event listeners for each square
colors.forEach(color => {
    document.getElementById(color).addEventListener('click', async () => {
       playerSequence.push(color);
       document.getElementById(color).style.filter = 'brightness(1)';
       await sleep(250);
       document.getElementById(color).style.filter = 'brightness(.7)'
    });
});

// sleeper function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


for (let i = 0; i < 5; i++) {
    addToSequence();
}
console.log(sequence)
showSequence();