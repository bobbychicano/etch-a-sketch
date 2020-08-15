// Function to create grid
const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
  let cell = document.createElement('div');
  cell.classList.add('cell', `cell-${i}`);

  container.appendChild(cell);
};

container.style.cssText = "height: 75vh; width: 60vw; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(4, 1fr); grid-gap: ";

const gridCells = document.getElementsByClassName('cell');
for (let c = 0; c < gridCells.length; c++) {
  gridCells[c].style.background = '#F9E79F';
  gridCells[c].style.border = '1px solid black';
};

for (let b = 0; b < gridCells.length; b++) {
  gridCells[b].addEventListener('mouseover', function(e) {
    e.target.style.background = 'orange';
  });
};


// hover state
/*
In CSS you usually add a hover declaration. So in Javascript you could do something similar? Another classList.add but with hover? Like so cell.classList.add('cell:hover'). This route doesn't really make sense becasue I'm not supposed to be adding another class, I'm supposed to be affecting the same element on hover.

Or I can add a class with all of the styling that I want when the mouse hovers over the div.

There should be something in 'events' from JavaScript that I can effect.

*/

// Function to clear the current screen and create new grid
// Should use a <button> and run when clicked
