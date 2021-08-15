class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.life1 = "green";
    this.life2 = "green";
    this.life3 = "green";
    this.isRemoved = false

    World.add(world, this.body);
  }

  life() {
    push();
    textSize(20);
    fill("white");
    text("Player", 280, 40);

    fill(this.life1);
    rect(180, 50, 70, 30);
    fill(this.life2);
    rect(250, 50, 70, 30);
    fill(this.life3);
    rect(320, 50, 70, 30);
    pop();
  }
  reduceLife(archerLife){
    if (archerLife === 2){
      this.life1 = "yellow"
    }
    if (archerLife === 1){
      this.life1 = "red"
    }
    if (archerLife === 0){
      this.life1 = "red"
    }
  }
  remove(){
    this.isRemoved = true
    Matter.Body.setVelocity(this.body, { x:   0, y: 0})
    setTimeout(() => {
      Matter.World.remove(world, this.body)
    }, 1000)

  }

  

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
