document.addEventListener('DOMContentLoaded', () => {

  const rows = prompt('How many rows do you want?');
  const columns = prompt('How many columns do you want?');
  const board = document.getElementById('board');

  for (i=0; i<rows; i++) {
    const section = document.createElement('div');
    section.setAttribute('class', 'row');
    board.appendChild(section);
    section.addEventListener('click', () => {
      section.style.backgroundColor = 'red';
    });
    for (j=0; j<columns; j++) {
      const section = document.createElement('div');
      section.setAttribute('class', 'col');
      board.appendChild(section);
      section.addEventListener('click', () => {
        section.style.backgroundColor = getRandomColor();
      });
    }
    j = 0;
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

})
