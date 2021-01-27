class Blocks{
    constructor(x, y,width,height){
      var options= {
          //isStatic: true,
          restitution: 0.4,
          friction: 0.0
      }
     
      this.body = Bodies.rectangle(x, y, width, height,options);
      
      this.width = width;
      this.height = height;
      this.visiblity = 225;
      World.add(world,this.body)
      
    }
    display(){
      var pos=this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      fill(255,0,255)
      rectMode(CENTER);
      this.visiblity = this.visiblity - 5;
      tint(255,this.visiblity);
      rect(0,0,this.width, this.height);
      pop();
    }
  
    score() {

      if(this.visiblity<0 && this.visiblity> -105){
        score++;
      }
      }
 }