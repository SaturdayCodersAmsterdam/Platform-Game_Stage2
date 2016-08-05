var cursors;
var game = new Phaser.Game(640,480, Phaser.AUTO, 'world', {
  preload: preload, create: create, update: update });

var mySprite;
var x = game.width/2;
var y = game.height/2;
var dirX = 10;
var dirY = 10;

function preload() {

    //  use for a single frame
    //game.load.image('mySprite', 'assets/sprite.png');

    // use for multiple frames
    game.load.atlas('mySprite', 'assets/student.png', 'assets/student.json');

}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.stage.backgroundColor = '#333';
    mySprite = game.add.sprite( 64,48, 'mySprite',1 );

    mySprite.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(mySprite);
    mySprite.body.velocity.setTo(200, 200);

    mySprite.body.collideWorldBounds = true;
    // mySprite.bounce.set(0.8);
    mySprite.body.gravity.set(0, 180);
    cursors = game.input.keyboard.createCursorKeys();
}

function update () {

    if (x > game.width - mySprite.width || x < 0) {
        dirX = -dirX;
    }
    if (y > game.height - mySprite.height || y < 0) {
        dirY = -dirY;
    }
    if (cursors.down.isDown) {
        mySprite.y = mySprite.y + 10;
    }
    if (cursors.up.isDown) {
        mySprite.y = mySprite.y - 10;
    }
    else {
    }
    if (cursors.left.isDown) {
        mySprite.x = mySprite.x - 5;
    }
    else if (cursors.right.isDown) {
        mySprite.x = mySprite.x + 5;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
    }
}

function onDown(dog) {
  console.log('clicked');
  console.log(mySprite.x);
  console.log(mySprite.y);
}
