var colors=['red','orange', 'yellow','green', 'cyan','blue', 'magenta','brown','white', 'black'];
//index of selected color
var selectedColorIndex=0;
//width/height of one cell in color palette
var palette_cell_size=30;
//x,y coordinates of previous point (used to draw a line from this point to new point)
var x, y;
//flag indicating if we are currently drawing something
var drawing=false;

function setup() {
  //using 500x500 window size
  createCanvas(500,500);
  //using a thicker pen
  strokeWeight(10);
  //some grayish background (change it as needed)
  background(200);
}

//this method gets called repeatedly so that color palette will stay on top all the time.
function draw() {
  //disabling stroke
  noStroke();
  //drawing each cell in color palette
  for(let i=0;i<colors.length;i++){
    //using color at index i as fill color
    fill(colors[i]);
    //drawing a rectangle at 0,i*palette_cell_size with width and height equals palette_cell_size
    rect(0,i*palette_cell_size,palette_cell_size,palette_cell_size);
  }
  //enabling stroke again
  stroke(colors[selectedColorIndex]);
}

function mousePressed(){
  if(mouseX>=0 && mouseX<palette_cell_size && mouseY>=0 && mouseY<(colors.length*palette_cell_size)){
    selectedColorIndex=floor(mouseY/palette_cell_size);
    stroke(colors[selectedColorIndex]);
    drawing=false;  
  }else{
    x=mouseX;
    y=mouseY;
    drawing=true;
  }
}

function mouseDragged(){
  if(drawing){
    line(x,y, mouseX, mouseY);
    x=mouseX;
    y=mouseY;
  }
}