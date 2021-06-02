// declaring global variables
var welcometogame;
var StartScreen=0;
var ballX,ballY; 
var ballsize=20;
var player,playerbase;
var pipes=[]
var playerbird;
function preload(){
  playerimage=loadImage("Images/ball1.png")
}
function setup() {
	createCanvas(1000, 600);
// 0:Starting Game Screen
// 1: Regular Game Screen
// 2: Game Over Screen
playerbird=new Bird()
pipes.push(new Pipe())
// creating startgame sprite object
/*welcometogame=createSprite(400,300,200,100);
  player=createSprite(680,330,20,20);
  player.addImage("player",playerimage)
  player.scale=0.05;
  playerbase=createSprite(680,350,100,20);
  playerbase.shapeColor=("orange");*/
}



function draw() {
  background('blue');
  for(var i=pipes.length-1;i>=0;i--){
  pipes[i].show()
  pipes[i].update()
  if(pipes[i].hit(playerbird)){
    console.log("player is hit by pipe")
  }
  if(pipes[i].offscreen()){
  pipes.splice(i,1)
  }
  if(frameCount%60===0){
    pipes.push(new Pipe())
  }
  }
  /*intitialisethescreen()
  controltheplayerbase()
  createEdgeSprites()
  player.displace(playerbase)
  player.x=playerbase.x
  //player.y=playerbase.y
  if(StartScreen===0){
startgame()
  }
  else if(StartScreen===1){
playgame()
  }
  else if(StartScreen===2){
endgame()
  }
  else{
 console.log("Something went wrong")
  }*/
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===32){
 playerbird.up()
  }
}
/*function controltheplayerbase(){
  if(keyDown("left")){
    playerbase.velocityX=-2;
  }
  if(keyDown("right")){
    playerbase.velocityX=2;
  }
  if(keyDown("space")){
  player.velocityY=-2;
  }
  player.velocityY=player.velocityY+0.2
}
//function logic
function startgame(){
  //logic for startgame
}
function endgame(){
  //logic for endgame
}
function playgame(){
  //function for playgame
console.log('Welcome to game')
background("pink")
}
//mouse interaction with the sprite object
function mousePressed(welcometogame){
StartScreen=1;
}
function intitialisethescreen(){
  background('green')
 
}
*/

