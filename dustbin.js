class Dustbin{
    constructor(x,y){
        var options={
            isStatic: true
        }
        this.x = x;
        this.y = y;

        this.image = loadImage("dustbingreen.png");

        this.dW = 200;
        this.dH = 175;
        this.wallThichkness = 20;
        this.angle = 0;

        this.bottomBody = Bodies.rectangle(this.x,this.y,this.dW,this.wallThichkness, options);
        this.leftBody = Bodies.rectangle(this.x-this.dW/2 ,this.y-this.dH/2 ,this.wallThichkness, this.dH, options);
        this.rightBody = Bodies.rectangle(this.x+this.dW/2,this.y-this.dH/2 ,this.wallThichkness,this.dH ,options);

        Matter.Body.setAngle(this.leftBody, this.angle);
        Matter.Body.setAngle(this.rightBody, -1*this.angle);

        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
    }
    display(){
        var posR = this.rightBody.position;
        var posB = this.bottomBody.position;
        var posL = this.leftBody.position;
        push();
        translate(posL.x, posL.y)
        rectMode(CENTER);
        angleMode(RADIANS);
        strokeWeight(4);   
        fill("green")
        rotate(this.angle)
        //rect(0,0, this.wallThichkness, this.dH)
        pop();

        push();
        translate(posR.x, posR.y)
        rectMode(CENTER);
        angleMode(RADIANS);
        strokeWeight(4);
        fill("green");
        rotate(-1*this.angle);
        //rect(0,0, this.wallThichkness, this.dH)
        pop();

        push();
        translate(posB.x, posB.y)
        rectMode(CENTER);
        imageMode(CENTER);
        angleMode(RADIANS);
        strokeWeight(4);
        fill("green");
        //rect(0,0, this.dH+120, this.wallThichkness)
        image(this.image,0,-this.dH/3, this.dW, this.dH)
        pop();
    }
 }