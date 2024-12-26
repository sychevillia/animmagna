// Define the boundaries of the box
const boxTopLeftX = 100;
const boxTopLeftY = 100;
const boxBottomRightX = 300;
const boxBottomRightY = 300;

// Check the position of the dragged item
function dragItem(event) {
  const itemX = event.clientX;
  const itemY = event.clientY;

  // Restrict the movement if the item exceeds the boundaries
  if (itemX < boxTopLeftX || itemX > boxBottomRightX || itemY < boxTopLeftY || itemY > boxBottomRightY) {
    event.preventDefault();
  }
}
