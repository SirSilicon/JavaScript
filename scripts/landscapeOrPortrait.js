console.log("you made it to landscapeOrPortrait.js")
function isLandscape () {
  let varWidth = prompt("Please enter an interger value for width", "500");
  let varHeight = prompt("Please enter an interger value for height", "500");
  if (isNaN(varWidth) || isNaN(varHeight)){
    isLandscape()
  }
  else {
    if (varHeight > varWidth){
      console.log("the display geometry is portrait (" + varWidth + " width " + varHeight + " height)")
    }else if (varWidth > varHeight) {
      console.log("the display geometry is landcape (" + varWidth +  " width " + varHeight + " height)")
    }else {
      console.log("the display geometry is square (" + varWidth + " width " + varHeight + " height)")
    }
  }
}
