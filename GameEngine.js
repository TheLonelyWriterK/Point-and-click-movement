var config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 900,

    scene: [Scene1],
    physics:
    {
        default: "arcade"
        
    }
}

new Phaser.Game(config)