
function setup() {

  document.body.style.backgroundColor = "rgb(57, 57, 57)";
  // document.body.style.marginTop = "10px";

  createCanvas(1880, 1040, WEBGL)
  background(0)
  
 r = 127
 g = 127
 b = 127

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
// setInterval(function(){

//   fill(0)
//   rect(-(width/2),-(height/2),width,height)
  
// },100000);

var r = 127
var g = 127
var b = 127

var xstart = -940
var ystart = -520
var spacing = 90
var xorigin = xstart
var yorigin = ystart

var x = 0
var y = 0
var movex = 0
var movey = 0
var grid = []


function draw() {
  movex = floor(random(-42,43))
  movey = floor(random(-42,43))
  x = x + movex
  y = y + movey

  var v = createVector(x, y)
  grid.push(v)

  if(grid.length >= 100){
    grid.shift()
  }
  


  fill(r,g,b, 222)
  // noFill()
  stroke(r,g,b,floor(random(10)))
  // noStroke()

  push()
  translate(grid[grid.length-1].x,grid[grid.length-1].y)
  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  
  box(r/4,g/4,b/4)
  pop()


  console.log(grid.length)
  // if(grid.length >= 4200){
  //   noLoop()
  // }


  if(x > ((width/2)-10)){
    x = x - 10
  }
  if(y > ((height/2)-10)){
    y = y - 10
  }
  if(x < -((width/2)-10)){
    x = x + 10
  }
  if(y < -((height/2)-10)){
    y = y + 10
  }
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