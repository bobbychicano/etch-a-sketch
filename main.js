
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
};

makeGrid();

// Style the container
container.style.cssText = `height: 576px; width: 576px; margin: 0 auto; display: grid; grid-template-columns: repeat(${columns}, 1fr); grid-template-rows: repeat(${rows}, 1fr);`

// Style the grid cells
const gridCells = document.querySelectorAll('.cell');
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
buttonContainer.style.cssText = "margin: 20px auto; text-align: center";
button.style.cssText = "margin: 10px; padding: 10px 20px; color: white; background: #5DADE2; border: none";

body.insertBefore(buttonContainer, container);

/*

//THis arrary is what is creating an issue here
// Click function to clear hover
button.addEventListener('click', function() {
  for (let i = 0; i < gridCells.length; i++) {
    gridCells[i].style.background = '#F9E79F';
  };
});

*/

// Click function to remove old grid and create new grid
button.addEventListener('click', function() {

  //remove the old divs (newCell)
  //get a static NodeList OR Use a different loop
    // the while loop?

  for (let r = 0; r < gridCells.length; r++) {
    container.removeChild(gridCells[r]);
  };

  newGrid = Number(prompt("Let's make a new grid. How many squares per side do you want?"));
  rows = newGrid;
  columns = newGrid;
  makeGrid();

  for (let c = 0; c < gridCells.length; c++) {
    gridCells[c].style.background = '#F9E79F';
    gridCells[c].style.border = '1px solid black';
  };
});

// should I convert the initial grid into a function so that I can call it after I reset it?
