// scripts js do zdan 9.1-9.4 razem 

//zadanie 9.1

function getTriangleArea(a,h) {if ((a>0) && (h>0)) {return a*h/2;} else {return 'Nieprawidłowe dane'}};
var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(3, 7);
var triangle3Area = getTriangleArea(0, 15);
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);

// zadanie 9.2

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var newName = 'Marian'
if (allNames.indexOf(newName) === -1) {allNames.push(newName);}
console.log(allNames);

// zadanie 9.3

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
var textChange = text.replace('Velociraptor', dinosaurUpperCased);
console.log(textChange);
text = textChange.slice(0,text.length/2);
console.log(text);

// zadanie 9.4

function drawTree(n) {
for (var i = 0; i < n; i++) { var star =  (' ');
  for (var j = 0; j <= i; j++) 
  { var star =  (star += '*'); 
	
  }
  console.log(star);
                            }}
  drawTree(7);