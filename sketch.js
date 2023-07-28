const button = document.getElementById('draw');

const s = ( sketch ) => {

  let x = 100;
  let y = 100;

  sketch.setup = () => {
    document.body.style['userSelect'] = 'none';
    let c = sketch.createCanvas(document.body.clientWidth, document.body.clientHeight);
    c.position(0,0);
    c.style('display', 'block');
    c.style('z-index', '999');
    sketch.clear();
  };

  sketch.draw = () => {
    sketch.stroke(0);
    sketch.strokeWeight(4);
    if (sketch.mouseIsPressed) {
      sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
    }
    
  };
};

let myp5 = new p5(s);