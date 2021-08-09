class Snow  {
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 40,40, options);
        this.width = 40;
        this.height = 40;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y, this.width, this.height);
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,400) })
        }
    }
}