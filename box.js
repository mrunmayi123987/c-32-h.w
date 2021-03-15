class box {
  

    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'isStatic':true
      }
      this.body = Bodies.rectangle(x, y, 100, 100, options);
      this.width = 100;
      this.height = 100;
      this.image=loadImage("sprites/basket.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
pos.x = mouseX;
//pos.y = mouseY;

      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //rectMode(CENTER);
      fill(" brown");
     // rect(0, 0, this.width, this.height);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();
    }
  }
  