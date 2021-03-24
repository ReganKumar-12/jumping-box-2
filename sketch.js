var fixSprite1,fixSprite2,fixSprite3,fixSprite4;
var movingSprite;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surface
movingSprite=createSprite(random(10,750),300,20,20);
movingSprite.shapeColor = "white";
movingSprite.velocityX=3;
movingSprite.velocityY=3;



    //create box sprite and give velocity
fixSprite1=createSprite(100,590,180,20);
fixSprite1.shapeColor = "red";

fixSprite2=createSprite(300,590,180,20);
fixSprite2.shapeColor = "green";

fixSprite3=createSprite(500,590,180,20);
fixSprite3.shapeColor = "blue";

fixSprite4=createSprite(700,590,180,20);
fixSprite4.shapeColor = "yellow";

}

function draw() {
    background(rgb(10,10,10));
    //create edgeSprite

    if(movingSprite.x<0){
        music.stop();
        movingSprite.velocityX=3
    }

    else if(movingSprite.x>800){
        music.stop();
        movingSprite.velocityX=-3
    }

    
    movingSprite.bounceOff(fixSprite1);
    movingSprite.bounceOff(fixSprite2);
    movingSprite.bounceOff(fixSprite3);
    movingSprite.bounceOff(fixSprite4);
    
    
   
     




drawSprites();
    //add condition to check if box touching surface and make it box
}
