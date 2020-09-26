class Log {
    constructor(x, y, height, angle) {
      var options = {
          'restitution':0.2,
          'friction':1.5,
          'density':2.5
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      Matter.Body.setAngle(this.body,angle);
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill('tan');
      strokeWeight(1);
      stroke('brown');
      rect(0, 0, 20, this.height);
      pop();
    }
  };
  