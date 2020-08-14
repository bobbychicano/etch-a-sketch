// Function to create grid
const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
  let cell = document.createElement('div');
  cell.classList.add('cell', `cell-${i}`);

  container.appendChild(cell);
};

container.style.cssText = "height: 75vh; display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(4, 1fr); grid-gap: 1rem";

const gridCell = document.querySelector('.cell');



// Function to clear the current screen and create new grid
// Should use a <button> and run when clicked
