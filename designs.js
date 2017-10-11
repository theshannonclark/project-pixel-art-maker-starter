// Select inputs
const $colorPicker = $('.color-picker');

const $inputHeight = $('#input-height');
const $inputWidth = $('#input-width');
const $submitButton = $('#set-size');

const $pixelCanvas = $('.pixel-canvas');

// Generate initial grid
initializeGrid();

// Re-create the grid when the size is changed
$submitButton.click(function(event) {
  event.preventDefault();
  initializeGrid();
});

// Change the cell background color when it gets clicked
$pixelCanvas.on('click', 'td', function(event) {
  let color = $colorPicker.val();
  $(event.target).css('background-color', color);
});

/**
 * @description Sets up new grid
 */
function initializeGrid() {
  let gridHeight = $inputHeight.val();
  let gridWidth = $inputWidth.val();

  if (gridHeight < 1 || gridHeight > 50 ||
      gridWidth < 1 || gridWidth > 50)
  {
    return;
  }

  clearGrid();
  makeGrid(gridHeight, gridWidth);
}

/**
 * @description Deletes the current grid
 */
function clearGrid() {
  $pixelCanvas.children().remove();
}

/**
 * @description Creates a new grid
 * @param {number} height - The number of vertical cells in the grid
 * @param {number} width - The number of horizontal cells in the grid
 */
function makeGrid(height, width) {
  let grid = '';
  for (let i = 0; i < height; i++) {
    grid += makeGridRow(width);
  }
  $pixelCanvas.append(grid);
}

/**
 * @description Creates a new grid row
 * @param {number} length - The number of columns in the row
 */
function makeGridRow(length) {
  let row = '<tr>';
  for (let j = 0; j < length; j++) {
    row += '<td></td>';
  }
  return row + '</tr>';
}
