
//create grid
var grid = document.getElementById('grid');
for (var i = 0; i < 1300; i++) {
    var tile = document.createElement('div');
    tile.classList.add('tile');
    tile.id = "tile" + [i]
    tile.style.backgroundColor = 'white';
    grid.appendChild(tile);
}

//Getting tile ID
function getTileNum(number){
    var tileNum = number;
    console.log(tileNum);
}

//Create paint circles
var paintBlobs = document.getElementById('paintBlobs');
for (var i = 0; i < 40; i++) {
    var randomColor = getRandomColor()
    var blob = document.createElement('div');
    blob.classList.add('circle');
    blob.id = "paint" + [i]
    blob.style.backgroundColor = randomColor
    paintBlobs.appendChild(blob);
}


//putting colors on plank
//////iterate through the different color blocks like you do for tiles. crop the plank so that it can just go through the row within that div


//get/set color
var colorManagement = {
  userColor: '#000000',
  // setUserColor: function(color){
  //   this.userColor = color;
  // }
}

//select user color on click
paintBlobs.addEventListener("click", pickColor);

//change background color for painting
function pickColor(event){
  var pickUserColor = event.target.style.backgroundColor;
  // colorManagement.setUserColor(pickUserColor);
  colorManagement.userColor = pickUserColor;
  //setting current color swatch
  var currentSwatch = document.getElementById('currentSwatch');
  currentSwatch.style.backgroundColor = colorManagement.userColor;
}




//tell tile to change color on click
grid.addEventListener("click", paintSquare);


//function to change square background
function paintSquare(event) {
    var selectedColor = colorManagement.userColor
    event.target.style.backgroundColor = selectedColor;
}


//changing color of directions
var directions = document.getElementById('directions');
console.log(directions);
var randomColor = getRandomColor();

directions.style.color = randomColor;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var fullColor = '#';
    for (var i = 0; i < 6; i++) {
        fullColor += letters[Math.floor(Math.random() * 15)];
    }
    return fullColor;
}
