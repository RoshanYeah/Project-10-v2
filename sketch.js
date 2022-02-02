var weight = [13,56,43,71,75]

function average(){
  var sum = weight[0]+weight[1]+weight[2]+weight[3]+weight[4]
  var avg = sum/weight.length
  console.log(avg)
}



function setup() {
  createCanvas(400, 400);
  average()
}

function draw() {
  background(220);
  
}