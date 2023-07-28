document.addEventListener('DOMContentLoaded', function() {
let gameStarted = false;
let button = document.getElementById("start");
const s = ( sketch ) => {

  let x = 100;
  let y = 100;

  sketch.setup = () => {
    button.addEventListener('click', () => gameStarted = true);
    document.body.style['userSelect'] = 'none';
    let c = sketch.createCanvas(document.body.clientWidth, document.body.clientHeight);
    c.position(0,0);
    c.style('display', 'block');
    c.style('z-index', '-1');
    sketch.clear();
  };

  sketch.draw = () => {
    console.log('draw started')
    sketch.stroke(0);
    sketch.strokeWeight(4);
    //if (gameStarted) {
      console.log('game started')
    if (sketch.mouseIsPressed) {
      console.log('currently drawing')
      sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
    }
  //}
  }
    
  }


let myp5 = new p5(s);
})