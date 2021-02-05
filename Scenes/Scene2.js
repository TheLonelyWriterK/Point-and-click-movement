class Scene1 extends Phaser.Scene
{
    constructor()
    {
        super("Scene1")

        this.recA = null;

    }

    preload()
    {

    }

    create()
    {
        this.recA = this.add.rectangle(800,450,30,30,0xffffff)
    }

    update()
    {

    }
}