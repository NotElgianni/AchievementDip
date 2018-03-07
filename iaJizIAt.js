/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/iaJizIAt
 *
 * This source requires Phaser 2.6.2
 */

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.stage.backgroundColor = '#85b5e1';

    game.load.baseURL = 'http://examples.phaser.io/assets/';
    game.load.crossOrigin = 'anonymous';

    game.load.image('player', 'sprites/phaser-dude.png');
    game.load.image('platform', 'sprites/platform.png');
    game.load.image('dragon', 'pics/cougar_dragonsun.png');

}

var player;
var platforms;
var cursors;
var jumpButton;
var dragon;

function create() {

    player = game.add.sprite(100, 200, 'player');
    dragon = game.add.sprite(500, 300, 'dragon');
    dragon.scale.setTo(0.3,0.3);

    game.physics.arcade.enable(player);

    player.body.collideWorldBounds = true;
    player.body.gravity.y = 700;

    platforms = game.add.physicsGroup();

    platforms.create(500, 150, 'platform');
    platforms.create(-100, 400, 'platform');

    platforms.setAll('body.immovable', true);

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

}

function update () {

    game.physics.arcade.collide(player, platforms);

    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -400;
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 400;
    }

    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
    {
        player.body.velocity.y = -650;
    }
}

function render () {

}
