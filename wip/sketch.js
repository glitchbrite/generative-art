
function setup() {

  document.body.style.backgroundColor = "rgb(57, 57, 57)";
  // document.body.style.marginTop = "10px";

  createCanvas(1880, 1040, WEBGL)
  background(222)
  
 

}

setInterval(function(){
  // fill(0,0,0,10)
  // noFill()
  // rect(-500,-500,1000,1000)
  r = r + floor(random(-5,6))
  g = g + floor(random(-5,6))
  b = b + floor(random(-5,6))

  if(r < 5){
    r = 10
  }
  if(r > 250){
    r = 245
  }
  if(g < 5){
    g = 10
  }
  if(g > 250){
    g = 245
  }
  if(b < 5){
    b = 10
  }
  if(b > 250){
    b = 245
  }
  // var rgb = [r,g,b]
  // console.log(rgb)
},100);

var r = 127
var g = 127
var b = 127


function draw() {
  fill(222)
  noStroke()
  push()
  translate(0,0,-100)
  rect(-1000,-1000,2000, 2000)
  pop()
  
  


}

var onoff = 1

function mouseClicked(){

  if(onoff === 1){

    noLoop()
    onoff = 0

  } else {

    loop()
    onoff = 1

  }  
}