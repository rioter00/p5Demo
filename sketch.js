let pressed = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if (pressed){
    text('You did it!', 100, 100);
  } else {
    text('Press any button please', 100, 100);
  }
}

function keyPressed(){
  pressed = true;
}