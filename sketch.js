

var a = prompt('Enter the first variable: ');
var b = prompt('Enter the second variable: ');

function setup(){
  var b2 = createButton("click here to Swap");
b2.mousePressed(swap)
  }

function swap()
{ 
  [a,b]=[b,a]
  console.log("value a"+a)
  console.log("value b"+b)
}
function draw()
{
}
