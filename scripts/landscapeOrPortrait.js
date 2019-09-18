console.log("you made it to landscapeOrPortrait.js")

var VarWidth = 500;
var VarHeight = 500;
function isLandscape (width, height) {
  if (width == height) return 'Square';
  return (width > height) ? 'Landscape' : 'Portrait';
}

function inputGeometry(VarWidth, VarHeight) {
  var VarWidth = prompt("Please enter an interger value for width", "500");
  var VarHeight = prompt("Please enter an interger value for height", "500");
  if (!(isNaN(VarWidth) || isNaN(VarHeight))){
    let width = VarWidth;
    let height = VarHeight;
    console.log("This display geometry is", isLandscape (width, height));
   }
  else {
    inputGeometry(VarWidth, VarHeight)
  }
}
