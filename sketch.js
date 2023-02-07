let x=[];
let y=[];
let a=[];

let xOff=[];
let yOff=[];
let aOff=[];

function setup() {
  createCanvas(600, 600);
  noStroke();
  
  for(let i = 0; i<10; i++){
    x[i] = 0
    y[i] = 0
    a[i] = 0
    xOff[i] = random(-10,10);
    yOff[i] = random(-10,10);
    aOff[i] = random(-5,5)
  }
}

function draw() {
  background(0);
  
  //Fireflies
  for(let i = 0; i<10; i++){
      for(let j = 0 ; j < 90; j++){
        fill(255,255/(j*2.7))
        circle(x[i],y[i],5+j*(a[i]+.2))
      }
  
    //Perlin Noise
      x[i] = noise(xOff[i])*width
      xOff[i] += 0.003+random(0,0.001)
      y[i] = noise(yOff[i])*height
      yOff[i] += 0.003+random(0,0.001)
      a[i] = noise(aOff[i])
      aOff[i] += 0.03+random(0,0.01)
  
    //Map
      x[i] = map(x[i],
                 0,width,
                 random(-102,-100),width+random(100,105))
      y[i] = map(y[i],
                 0,height,
                 random(-102,-100),height+random(100,102))
      }

}

