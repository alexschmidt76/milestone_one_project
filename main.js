colors = ['green', 'red', 'yellow', 'blue'];
sequence = [];
playerSequence = [];

function addToSequence() {
    sequence.push(colors[Math.floor(Math.random() * 4)]);
}

function showSequence() {
    // add functionality to show sequence
}

// create event listeners for divs
colors.forEach(color => {
    document.getElementById(color).addEventListener('click', () => {
       playerSequence.push(color);
       console.log(playerSequence);
    });
});

// order of gameplay
addToSequence();
showSequence(); 
// await player input, if input is valid, continue
