class Ground{

    constructor(x,y,width,height){
        var Ground_options = {
            isStatic : true,
        }
        this.body = Bodies.rectangle(x,y,width,height,Ground_options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var position = this.body.position;
        rectMode(CENTER);
        fill(100);
        rect(position.x,position.y,this.width,this.height);
    }
}