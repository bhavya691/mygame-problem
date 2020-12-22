class Block{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,50,100,options);
        this.width = 50;
        this.height = 130;
        // this.Visiblity = 255;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        // this.Visiblity = this.Visiblity-5;
        // tint(255,this.Visiblity)
        rectMode(CENTER)
        rect(pos.x , pos.y , this.width , this.height);
        pop()
    }
}