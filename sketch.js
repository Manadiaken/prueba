function setup() {
  var canvas=createCanvas(640, 480);
  //canvas.parent('lienzo');
  background(0);
}

function draw() {
fill(random(255),random(255),random(255));
  textSize(random(40));
  text("hola personas",random(640),random(480));
}
function mouseClicked(){
  background(0);
}