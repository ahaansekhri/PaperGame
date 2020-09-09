class Paper {
    constructor(x, y, width) {
      var options = {
          'isStatic': false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }

      this.body = Bodies.circle(x, y, width, options);
      this.width = width;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        ellipse(0, 0, this.width*2, this.width*2);
      pop();
    }
  };
