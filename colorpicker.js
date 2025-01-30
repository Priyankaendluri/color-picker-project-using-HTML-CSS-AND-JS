document.getElementById('color-picker').addEventListener('input', function(event) {
  const selectedColor = event.target.value;
  const colorDisplay = document.getElementById('color-display');
  
  colorDisplay.textContent = `Selected Color: ${selectedColor}`;
  colorDisplay.style.backgroundColor = selectedColor;
});

