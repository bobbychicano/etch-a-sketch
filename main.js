
const container = document.querySelector('.container');
let rows = 16;
let columns = 16;
let newGrid;

// Function to create grid
let makeGrid = function() {
  for (let i = 0; i < (rows * columns); i++) {
    let newCell = document.createElement('div');
    newCell.classList.add('cell', `cell-${i}`);

    container.appendChild(newCell);
  };

  // Style the container
  container.style.cssText = `height: 576px; width: 576px; margin: 0 auto; display: grid; grid-template-columns: repeat(${columns}, 1fr); grid-template-rows: repeat(${rows}, 1fr);`
};

makeGrid();


// Style all of the grid cells
const gridCells = document.getElementsByClassName('cell');
for (let c = 0; c < gridCells.length; c++) {
  gridCells[c].style.background = '#F9E79F';
  gridCells[c].style.border = '1px solid black';
};

// Hover function to change grid cell color
for (let h = 0; h < gridCells.length; h++) {
  gridCells[h].addEventListener('mouseover', function(e) {
    e.target.style.background = 'orange';
  });
};

// Creating and styling the reset button
const body = document.querySelector('body');
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('reset-button');
const button = document.createElement('button');
button.textContent = "Click Me";

buttonContainer.appendChild(button);
buttonContainer.style.cssText = "margin: 20px auto; text-align: center";
button.style.cssText = "margin: 10px; padding: 10px 20px; color: white; background: #5DADE2; border: none";

body.insertBefore(buttonContainer, container);


// Click function to remove old grid and create new grid
button.addEventListener('click', function() {

  let removeOldGrid = container.querySelectorAll('.cell');

  for (let j = 0; j < removeOldGrid.length; j++) {
    container.removeChild(removeOldGrid[j]);
  };

  let newGrid = '';

  //An 'if' function to ensure the user inputs a prompt.
  //Or would a 'while' loop function better here?

  while (true) {
    newGrid = +prompt("Let's make a new grid. How many squares per side do you want?");

    if (!newGrid) continue;

    if (newGrid > 0) break;

  };

  rows = newGrid;
  columns = newGrid;
  makeGrid();

  //style the new cells
  let styleAgain = document.querySelectorAll('.cell');

  for (let n = 0; n < styleAgain.length; n++) {
    styleAgain[n].style.background = '#F9E79F';
    styleAgain[n].style.border = '1px solid black';
  };

  for (let b = 0; b < styleAgain.length; b++) {
    styleAgain[b].addEventListener('mouseover', function(e) {
      e.target.style.background = 'orange';
    });
  };
});
