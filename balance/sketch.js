let r
let g
let b
let stone1 = []
let stone2 = []
let stone3 = []

function setup() {
  createCanvas(1880, 1040, WEBGL)
  angleMode(DEGREES)
  background(42)
  // r = 255
  // g = 255
  // b = 255
  fill(160,150,140)
  // noStroke()

  

  // // Create stone1
  // for(let a = 0; a < 360; a += spacing){
  //   let x = floor(random(120,200)*sin(a))
  //   let y = floor(random(120,200)*cos(a))+200
  //   let v = createVector(x, y)
  //   stone1.push(v)
  // }

  // // Find top of stone1
  // let temp = height/2
  // let top1 = 0
  // for(let b = 0; b < stone1.length; b++){
  //   if(stone1[b].y < temp){
  //     temp = stone1[b].y
  //     top1 = b
  //   }
  // }

  // // Create stone2
  // for(let a = 0; a < 360; a += spacing){
  //   let x = floor(random(64,100)*sin(a))
  //   let y = floor(random(64,100)*cos(a))+stone1[top1].y
  //   let v = createVector(x, y)
  //   stone2.push(v)
  // }

  // // Find bottom of stone2
  // let temp2 = height/2
  // let bottom2
  // for(let b = 0; b < stone2.length; b++){
  //   if(stone2[b].y > temp){
  //     temp2 = stone2[b].y
  //     bottom2 = b
  //   }
  // }

  // let diff_X
  // let diff_Y
  // diff_X = stone1[top1].x - stone2[bottom2].x
  // diff_Y = stone1[top1].y - stone2[bottom2].y

  // console.log(diff_X,diff_Y)
  
 

  // fill(160,150,140)

  // beginShape()
  // for(let i = 0; i < stone2.length; i++){
  //   vertex(stone2[i].x+diff_X,stone2[i].y+diff_Y+10)
  // }
  // endShape()

  createStone(stone1, 200, 120, 200)
  
  // createStone(stone3)

  let top = findTop(stone1)
  createStone(stone2,stone1[top].y, 60, 100)
  

  let bottom = findBottom(stone2)
  let diff = findDiff(stone1[top],stone2[bottom])
  console.log(diff)



  fill(162,152,142)

  beginShape()
  for(let i = 0; i < stone1.length; i++){
    vertex(stone1[i].x,stone1[i].y)
  }
  endShape()

  beginShape()
  for(let i = 0; i < stone2.length; i++){
    vertex(stone2[i].x+diff[0],stone2[i].y-diff[1])
  }
  endShape()
}

function createStone(stone,offSet,a,b){
  let spacing = random(21,42)
  for(let i = 0; i < 360; i += spacing){
    let x = floor(random(a,b)*sin(i))
    let y = floor(random(a,b)*cos(i)) + offSet
    let v = createVector(x, y)
    stone.push(v)
  }

}

function findTop(stone){
  let temp = height/2
  let top = 0
  for(let i = 0; i < stone.length; i++){
    if(stone[i].y < temp){
      temp = stone[i].y
      top = i
    }
  }
  return top
}

function findBottom(stone){
  let temp = height/2
  let bottom
  for(let i = 0; i < stone.length; i++){
    if(stone[i].y < temp){
      temp = stone[i].y
      bottom = i
    }
  }
  return bottom
}

function findDiff(a,b){
  let diff_X
  let diff_Y
  diff_X = a.x - b.x
  diff_Y = a.y - b.y
  return [diff_X, diff_Y]
}




function draw() {
  // fill(160,150,140)
  // rect(stone1.x,stone1.y,50,50)




  if(frameCount > 2000){
    noLoop()
  }

}

// Color Walk
// setInterval(function(){
  
//   r = r + floor(random(-5,6))
//   g = g + floor(random(-5,6))
//   b = b + floor(random(-5,6))

//   if(r < 5){
//     r = 10
//   }
//   if(r > 250){
//     r = 245
//   }
//   if(g < 5){
//     g = 10
//   }
//   if(g > 250){
//     g = 245
//   }
//   if(b < 5){
//     b = 10
//   }
//   if(b > 250){
//     b = 245
//   }
// },10);