var ball;

var database

var position;

function setup(){
    createCanvas(500,500);

   database = firebase.database()

    
ball = createSprite (250,250,50,50);
ball.shapeColor =  ("lightgreen");

var ballref = database.ref("ball/position");
ballref.on("value",readPosition,showError )

}

function draw(){
    background("white");
if(position !== undefined){
    if (keyDown ("up")){
    writePosition(0,-3)
    }
    if(keyDown("down")){
    writePosition(0,3)
    }
    if (keyDown ("left")){
    writePosition(-3,0)
    }
    if (keyDown ("right")){
    writePosition (3,0)
    }
    
    drawSprites();
}
}

function writePosition(x,y){
    database.ref("ball/position").set({
        x : position.x + x,
        y : position.y + y
    })
}

function changePosition(x,y){
   ball.x = ball.x + x;
   ball.y = ball.y + y; 

}

function readPosition(data){
   position = data.val()
   ball.x = position.x ;
   ball.y = position.y ;
}

function showError(){
    console.log("unable to read the value from database")
}