
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
var Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies;
 
var boxes = [];
var gSlider;

var ground;
 
function setup() {
    createCanvas(800, 600);

    engine = Engine.create();
    world = engine.world;
    
    gSlider = createSlider(0, 100, 50);
    gSlider.position(625, 550);

    
    // Creates a ground rectangle 
    
    ground = new Ground(200,590,1200,30);
    

}
 
function mousePressed() {
    if (mouseY < 600) {
        // Every time a mouse press occurs create a new box.
       boxes.push(new Box(mouseX, mouseY, random(10, 80),random(10,80)));
    }
}
function draw() {
    // Draw all the elements including the slider that 
    
    background("black");
    Engine.update(engine);
    world.gravity.y = map(gSlider.value(), 0, 100, 0, 1);
    var fVal = world.gravity.y;
 

     for (var i = 0; i < boxes.length; i++) {
        boxes[i].display();
    
    }
    noStroke();
    ground.display();
    fill(0);
    textSize(15);
    text("Gravity " + fVal, 660, 593);
}
 