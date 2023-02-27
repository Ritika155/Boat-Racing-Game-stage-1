var canvas;
var backgroundImage;
var boat1Img, boat2Img, trackImg;
var boat1,boat2,boats;
var bgImg;
var database;
var form, player;
var playerCount, gameState;

function preload() {
  backgroundImage = loadImage("./assets/backGround.jpeg");
  boat1Img = loadAnimation("./assets/ship_1.png","./assets/ship_2.png", "./assets/ship_3.png", "./assets/ship_4.png" );
  boat2Img = loadAnimation("./assets/ship2_1.png","./assets/ship2_2.png", "./assets/ship2_3.png", "./assets/ship2_4.png" );
  trackImg = loadImage("./assets/bg.jpeg");
 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();

}

function draw() {
  background(backgroundImage);
 
  if (playerCount === 2) {
    game.update(1);
    
  }


  if (gameState === 1) {
    game.play();
    
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
