// move mouse vertically to change size
// move mouse horizontally to change color

var color = 0

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(180,222,196);//green background
  
  
  color = map(mouseY,0,400,0,300);
  
  if(mouseX < 200) {
    stroke(222,196,180);//thrid square
    strokeWeight(10);
    fill(159, 255, 51);//lime green
   rect(177,175,175,175);
  }
  
  if(mouseX >=200 && mouseX <=300){ //diffrent positions 
    stroke(222,196,180);//second square
    strokeWeight(10);
    fill(255,55,51);//red
    rect(150,150,150,150);
  }
  
  if(mouseX> 300) {
    stroke(222,196,180);//first square
    strokeWeight(10);
    fill(241,255,51);
    rect(125,125,125,125);
    
    //with every square its the charcter walking towards person 
  }  
  
}
  


 



