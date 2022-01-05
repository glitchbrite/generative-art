var points = []
var points2 = []

var mult = 0.00042
var mult2 = 0.000021

function setup() {
  createCanvas(1880, 1040)
  background(0)
  angleMode(DEGREES)
  noiseDetail(88)
  
  var density = 11
  var space = width / density
    
  for (var x = 0; x < 1880; x += space){
    for (var y = 0; y < 1040; y += space){
      var p = createVector(x, y)
      points.push(p)
      
    }    
  }
  for (var x = 0; x < 1880; x += space){
    for (var y = 0; y < 1040; y += space){
      var p = createVector(x, y)
      points2.push(p)
      
    }    
  }
  r = 255
  g = 255
  b = 255
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
},10);
function draw() {
  fill(0)
  noStroke()

  
  for (var i = 0; i < points2.length; i++){
  
    var angle = map(noise(points2[i].x * mult2, points2[i].y * mult2), 0, 1, 0, width)
    
    points2[i].add(createVector(sin(angle), (cos(angle))))
    
    fill(0)
    ellipse(points2[i].x, points2[i].y, 2, 2)
  
    fill(255)
    ellipse(points2[i].x, points2[i].y, 1*cos(frameCount), 1*cos(frameCount))
  
    stroke(r,g,b,10)
    strokeWeight(2)
    line(points[i].x, points[i].y, points2[i].x, points2[i].y-88)
      
    
  }

  for (var i = 0; i < points.length; i++){
  
    var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, width)
    
    points[i].add(createVector(sin(angle), (cos(angle))))
    
    stroke(0)
    ellipse(points[i].x, points[i].y, 2, 2)
  
    stroke(255)
    // ellipse(points[i].x, points[i].y, 10, 5)
  
    stroke(255,10)
    strokeWeight(2)
    line(points[i].x, points[i].y, points2[i].x, points2[i].y)
      
    
  }
  console.log(frameCount)
  if(frameCount===1200){
    noLoop()
  }
}