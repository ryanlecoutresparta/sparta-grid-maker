# Sparta Grid Maker
### Description
Had to make two prompts that required input for the amount of rows and columns. After that, I had to create the boxes that would be displayed and make them change their background colour to a random colour when clicked.

### Languages used
* Javascript
* HTML
* CSS

### How to download
1. Git Clone into the folder that you desire.


### Challenges (you can include images and code block here)
1. Trying to find a formula for a random background colour:

```
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
```

2. having to use a for loop within a for loop to create the correct amount of boxes in the rows and columns.

### Learning points
1. Feel more confident linking Javascript to HTML and CSS files.
