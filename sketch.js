var Mobj,Fobj
function setup() {
  createCanvas(800,400);
 Mobj= createSprite(600, 200, 100, 50);
 Mobj.shapeColor="green";
 Mobj.debug=true;
 Fobj= createSprite(400, 200, 50, 100);
 Fobj.shapeColor="green";
 Fobj.debug=true;
}

function draw() {
  background(255,255,255);
  Mobj.x=mouseX;
  Mobj.y=mouseY;
  console.log(Mobj.x);
  console.log(Fobj.x);
  console.log(Fobj.width/2+Mobj.width/2);
  console.log(Mobj.x-Fobj.x);
  console.log(Fobj.x-Mobj.x);
  if(Mobj.x-Fobj.x<Fobj.width/2+Mobj.width/2&&
    Fobj.x-Mobj.x<Fobj.width/2+Mobj.width/2&&
    Mobj.y-Fobj.y<Fobj.width/2+Mobj.width/2&&
    Fobj.y-Mobj.y<Fobj.width/2+Mobj.width/2){
    Mobj.shapeColor="red";
    Fobj.shapeColor="red";
  }
  else{Mobj.shapeColor="green";
  Fobj.shapeColor="green";}
  drawSprites();
}