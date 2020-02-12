/*
  CodeSelfPortraitP5
  by Alvin Tran
  
  Draw and animate emotions for self-portrait via processing
*/

  //Universal constants for color
  var seashell;
  var white;
  var lightcoral;
  var black;
  var yellow;
  var lightskyblue;
  var red;

  //Constant for head
  var headDiameter;

  //Constants for mouth
  var mouthHeight;
  var mouthWidth;

  //Constants for nose
  var noseX;
  var noseY;

  //Constants for eyes
  var eyeDiameter;

  //State machines that determines emotions
  var state; //will change
  var normal;
  var scared;
  var mad;
  var sad;

  //Constant place for tears
  var tearX1;
  var tearY1;
  var tearX2;
  var tearY2;
  var tearX3;
  var tearY3;

  //Constant place for blood-drops
  var bloodX1;
  var bloodY1;
  var bloodX2;
  var bloodY2;
  var bloodX3;
  var bloodY3;


function setup() {
  createCanvas(1000, 1000);
  ellipseMode(CENTER);
  //Universal constants for color
  seashell=color(255, 245, 238);
  white=color(255, 255, 255);
  lightcoral=color(240, 128, 128);
  black=color(0, 0, 0);
  yellow=color(255, 255 , 0);
  lightskyblue=color(135, 206, 250);
  red=color(255, 0, 0);

  ellipseMode(CENTER);
  
  //Constant for head
  headDiameter=width/1.2;
  
  //Constants for mouth
  mouthHeight=height/30;
  mouthWidth=width/10;
  
  //Constants for nose
  noseX=(width/2);
  noseY=(width/2);
  
  //Constants for eyes
  eyeDiameter=(headDiameter/10);
  
  //Constant place for tears
  tearX1=(width/4.23);
  tearY1=(width/3.37);
  tearX2=(width/4.25);
  tearY2=(width/3.09);
  tearX3=(width/3.78);
  tearY3=(width/3.05);
  
  //Constant place for blood-drops
  bloodX1=(width/2.14);
  bloodY1=(width/1.72);
  bloodX2=(width/2.08);
  bloodY2=(width/1.72);
  bloodX3=(width/2.11);
  bloodY3=(width/1.67);

  //State machines that determines emotions
  state; //will change
  normal=1;
  scared=2;
  mad=3;
  sad=4;
  }

function draw() {//Main method to run program
  background(white);
  
  /*if(mousePressed)//Able to check coordinates with mouse
  {
    int x=mouseX;
    int y=mouseY;
    println("X: "+x+" Y: "+y);
  }*/
  
  drawHead();
  drawMouth();
  drawNose();
  drawEyes();
  drawEars();
  drawGlasses();
  drawHair();
  setState();
  
  if(state==2)
  {
    makeScared();
  }
  else if(state==3)
  {
    makeMad();
  }
  else if(state==4)
  {
    makeSad();
  }
 }

function drawHead() { //Method that draws head
  fill(seashell);
  ellipse((width/2), (height/2), headDiameter, headDiameter);
 }

function drawMouth() {//Method that draws mouth
  fill(lightcoral);
  rect((width/3.85), (height/1.43), (height/2), mouthWidth, mouthHeight);
 }
 
function drawNose() {//Method that draws nose
  fill(yellow);
  triangle(noseX, noseY, (width/2.21), (width/1.72), (width/1.76), (width/1.72));
 }
 
function drawEyes() {//Method that draws eyes
  fill(white);
  ellipse((width/3.8), (height/3.8), eyeDiameter, eyeDiameter);//Left eye 
  ellipse((width/1.4), (height/3.8), eyeDiameter, eyeDiameter);//Right eye
  
  fill(black);
  ellipse((width/3.8), (height/3.8), eyeDiameter, eyeDiameter/10);//Left pupil 
  ellipse((width/1.4), (height/3.8), eyeDiameter, eyeDiameter/10);//Right pupil
 }

function drawEars(){//Method that draws ears
   fill(seashell);
   triangle((width/6.59), (width/3.70), (width/10), (width/3.45), (width/8.11), (width/5));//Left ear
   
   fill(seashell);
   triangle((width/1.19), (width/3.75), (width/1.13), (width/5), (width/1.1), (width/3.45));//Right ear
 }
 
function drawGlasses(){//Lines to represent glasses
   line((width/3.3), (width/3.85), (width/1.49), (width/3.85));//Center line
   line((width/4.55), (width/3.85), (width/8.11), (width/5));//Left eye
   line((width/1.32), (width/3.85), (width/1.13), (width/5));//Right eye
 }
 
 function drawHair(){//Method that draws hair   
   fill(black);
   triangle((width/4.45), (width/5.32), (width/1.29), (width/5.32), (width/2), (width/12.5));
 }
 
 function setState(){
   if(key=='F'||key=='f')
   {
     state=scared;
   }
   else if(key=='M'||key=='m')
   {
     state=mad;
   }
   else if(key=='S'||key=='s')
   {
     state=sad;
   }
   else
   {
     state=normal;
   }
   
   return state;
 }
 
function makeScared(){
     fill(white);
     ellipse((width/3.8), (width/3.8), eyeDiameter, eyeDiameter);//Left eye 
     ellipse((width/1.4), (height/3.8), eyeDiameter, eyeDiameter);//Right eye
     
     fill(white);
     rect((width/3.85), (height/1.43), (height/2), mouthWidth, mouthHeight);
     
     fill(red);
     triangle(bloodX1, bloodY1, bloodX2, bloodY2, bloodX3, bloodY3);//Left side
     triangle(bloodX1, bloodY1+120, bloodX2, bloodY2+120, bloodX3, bloodY3+120);
     
     triangle(bloodX1+60, bloodY1, bloodX2+60, bloodY2, bloodX3+60, bloodY3);//Right side
     triangle(bloodX1+60, bloodY1+120, bloodX2+60, bloodY2+120, bloodX3+60, bloodY3+120);
     
     Blood();
   }
 
function Blood(){
   if(bloodY1<=1180||bloodY2<=1180||bloodY3<=1180)
   {
     bloodY1+=20;
     bloodY2+=20;
     bloodY3+=20;
   }
   else
   {
     bloodY1=(width/1.72);
     bloodY2=(width/1.72);
     bloodY3=(width/1.67);
   }
 }
 
function makeMad(){
   fill(red);
   ellipse((width/3.8), (width/3.8), eyeDiameter, eyeDiameter);//Left eye 
   ellipse((width/1.4), (height/3.8), eyeDiameter, eyeDiameter);//Right eye
   
   fill(red);
   triangle(tearX1, tearY1, tearX2, tearY2, tearX3, tearY3);//Left side
   triangle(tearX1, tearY1+120, tearX2, tearY2+120, tearX3, tearY3+120);
   
   triangle(tearX1+560, tearY1, tearX2+560, tearY2, tearX3+560, tearY3);//Right side
   triangle(tearX1+560, tearY1+120, tearX2+560, tearY2+120, tearX3+560, tearY3+120);//
   
   Tears();
}
 
function makeSad(){
   fill(lightskyblue);
   triangle(tearX1, tearY1, tearX2, tearY2, tearX3, tearY3);//Left side
   triangle(tearX1, tearY1+120, tearX2, tearY2+120, tearX3, tearY3+120);
   
   triangle(tearX1+560, tearY1, tearX2+560, tearY2, tearX3+560, tearY3);//Right side
   triangle(tearX1+560, tearY1+120, tearX2+560, tearY2+120, tearX3+560, tearY3+120);//
   
   Tears();
 }
 
function Tears(){
   if(tearY1<=1180||tearY2<=1180||tearY3<=1180)
   {
     tearY1+=20;
     tearY2+=20;
     tearY3+=20;
   }
   else
   {
     tearY1=(width/3.37);
     tearY2=(width/3.09);
     tearY3=(width/3.05);
   }
 }