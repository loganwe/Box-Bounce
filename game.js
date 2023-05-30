const gameState = {};
let player_speed=160;
let gravity=200;

function preload() {
  this.load.image('player', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxzA4SLh5UloVJPBdr7caSmbs5xkU6nEW-eg&usqp=CAU');
   this.add.text(635, 10, "End", { font: "40px Times New Roman", fill: "#000"});
   this.load.image('wall', '');
    this.load.image('platform', 'https://content.codecademy.com/courses/learn-phaser/physics/platform.png');
}

function create() {
  gameState.player = this.physics.add.sprite(645, 259, 'player');
  gameState.cursors = this.input.keyboard.createCursorKeys();
// gameState.wall= this.add.sprite(600,530,'wall');
const platforms = this.physics.add.staticGroup();
  platforms.create(645, 450);
  gameState.player.setCollideWorldBounds(true);
  
  this.physics.add.collider(gameState.player, platforms);
}

function update() {
  if (gameState.cursors.left.isDown) {
  	gameState.player.setVelocityX(-160);
	} else if (gameState.cursors.right.isDown) {
 		gameState.player.setVelocityX(160);
	} else if (gameState.cursors.up.isDown) {
 		gameState.player.setVelocityY(-160);
	} else if (gameState.cursors.down.isDown) {
 		gameState.player.setVelocityY(160);
	} else{
    gameState.player.setVelocityX(0);
  }
  
}
const config = {
  type: Phaser.AUTO,
  width: 4000,
  height: 5000,
  backgroundColor: "#fff",
   physics: {
    default: 'arcade',
    arcade: {
      // gravity: { y: gravity },
    }
  },
  scene: {
    preload,
    create,
    update
  }
}

const game = new Phaser.Game(config)