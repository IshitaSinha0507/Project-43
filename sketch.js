var hr,min,sec;
var hrAngle,mnAngle,secAngle;

function setup() {
  createCanvas(500,500);
 angleMode(DEGREES);

}

function draw() {
  background(0); 

  //Translation and rotation 
  translate(200,200)
  rotate(-90)
  
//Calculating time using predefined func from p5.js
  hr = hour();
  min = minute();
  sec = second();

//To create ab iterative rotation
  secAngle = map(sec,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hrAngle = map(hr % 12,0,12,0,360);

//Drawing seconds hand
 push();
 rotate(secAngle); 
 stroke("red");
 strokeWeight(7);
 line(0,0,100,0);
 pop()

//Drawing mins hand
 push();
 rotate(minAngle);
 stroke("lime");
 strokeWeight(7);
 line(0,0,75,0);
 pop()

//Drawing hr hand
 push();
 rotate(hrAngle);
 stroke("cyan");
 strokeWeight(7);
 line(0,0,50,0);
 pop()

 stroke(255,0,255);
 point(0,0);

//Drawing arcs
  strokeWeight(10);
  noFill();
//Seconds
  stroke("red");
  arc(0,0,300,300,0,secAngle);
//Minute
  stroke("lime");
  arc(0,0,280,280,0,minAngle);
//Hours
  stroke("cyan");
  arc(0,0,260,260,0,hrAngle);
}