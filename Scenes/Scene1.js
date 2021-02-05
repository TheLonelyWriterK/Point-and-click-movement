class Scene1 extends Phaser.Scene
{
    constructor()
    {
        super("Scene1")

        this.recA = null;
        this.goal = {x: 600, y:50};

    }

    preload()
    {

    }

    create()
    {
        this.recA = this.add.rectangle(600,50,30,30,0xffffff)
        this.recA.setInteractive()
        this.physics.add.existing(this.recA)
        this.input.on("pointerdown",this.onClick,this)
    }

    update()
    {
        if(Math.abs(this.recA.x - this.goal.x) < 10 && Math.abs(this.recA.y - this.goal.y) < 10){
            this.recA.body.setVelocity(0);
        } else {
            this.physics.moveTo(this.recA,this.goal.x,this.goal.y,200)
        }
    }

    onClick(activepointer)
    {
        this.goal.x = activepointer.x;
        this.goal.y = activepointer.y;
    }
}