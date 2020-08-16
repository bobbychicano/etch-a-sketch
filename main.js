// Function to create grid
const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
  let cell = document.createElement('div');
  cell.classList.add('cell', `cell-${i}`);

  container.appendChild(cell);
};

container.style.cssText = "height: 640px; width: 960px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(4, 1fr); grid-gap: ";

const gridCells = document.getElementsByClassName('cell');
for (let c = 0; c < gridCells.length; c++) {
  gridCells[c].style.background = '#F9E79F';
  gridCells[c].style.border = '1px solid black';
};

// Hover function to change grid cell color
for (let b = 0; b < gridCells.length; b++) {
  gridCells[b].addEventListener('mouseover', function(e) {
    e.target.style.background = 'orange';
  });
};

// Creating and styling the reset button
const body = document.querySelector('body');
const buttonContainer = document.createElement('div');
const button = document.createElement('button');
button.textContent = "Click Me";

buttonContainer.appendChild(button);
buttonContainer.style.cssText = "margin: 20px auto; text-align: center; border: 1px solid black";
button.style.cssText = "margin: 10px; padding: 10px 20px; color: white; background: #5DADE2; border: none";

body.insertBefore(buttonContainer, container);



// button will be an event listener that will clear the current grid, send the user a pop-up asking for how many squares per side to make the new grid.
