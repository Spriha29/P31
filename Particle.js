class Particle{
    constructor(x,y,radius){
              var options = {
                  'restitution':0.3,
                  'friction':5.0,
                  'density':1.0
              }
              this.body = Bodies.circle(x, y, this.radius, options);
              this.radius = 10;
              this.color = color(random(0,255),random(0,255),random(0,255));
              World.add(world, this.body);
            }
display(){
    var position = this.body.position;
    var angle = this.body.angle;
    push();
    translate(position.x, position.y);
    rotate(angle);
    rectMode(CENTER);
    fill(color);
    circle(0, 0, this.radius);
    pop();
    }
          };
    
