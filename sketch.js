var bg, canvas;
var iss, issImg, issImg1, issImg2, issImg3;
var spacecraft, scImg;
var hasDocked = false;

function preload(){
    bg = loadImage("spacebg.jpg");
    issImg = loadImage("iss.png");
    scImg = loadImage("spacecraft1.png");
    scImg1 = loadImage("spacecraft2.png");
    scImg2 = loadImage("spacecraft3.png");
    scImg3 = loadImage("spacecraft4.png");
}

function setup(){
    canvas = createSprite(windowWidth, windowHeight);
    canvas.addImage("spacebg.jpg",bg);

    iss = createSprite(330, 130);
    iss.addImage("iss.png", issImg);
    iss.scale = 0.25;

    spacecraft = createSprite(330, 130);
    spacecraft.addImage("spacecraft.png", scImg);
    spacecraft.scale = 0.15;
}

function draw(){
   
    if(!hasDocked){
        spacecraft.x = spacecraft.x + random(-1,1);

        if(keyDown(UP_ARROW)){
            spacecraft.y = spacecraft.y -2;
        }

        if(keyDown(DOWN_ARROW)){
            spacecraft.addImage("spacecraft2.png", scImg1);
            spacecraft.y = spacecraft.y +2;
        }

        if(keyDown(RIGHT_ARROW)){
            spacecraft.addImage("spacecraft4.png", scImg3);
            spacecraft.x = spacecraft.x +2;
        }

        if(keyDown(LEFT_ARROW)){
            spacecraft.addImage("spacecraft3.png", scImg2)
            spacecraft.x = spacecraft.x -2;
        }

        }

    drawSprites();
}