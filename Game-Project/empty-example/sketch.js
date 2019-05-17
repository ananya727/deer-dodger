
//create an empty array called balls

let balls = [];
//create a variable to hold your avatar
let me;
let died = false;
let hunterpic;
let elephantpic;
let hitcount = 0;


function preload() {
  hunterpic = loadImage('hunter.png');
  elephantpic = loadImage('Elephant.png');
}

function setup() {
  createCanvas(800, 400);
  me = new Avatar(width/2, 300, 3);

}

function draw(){
	background(66, 134, 244);
  image(hunterpic,20,140,75,75);
  print(died);

  if (frameCount % 40 == 0) {
    let a = random (300);
    let c = random (300);
    let  b = new Ball(105, 150, 10/random(30) );
    balls.push(b);
    //console.log(balls);
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();
	  }

    me.drawMe();
    me.moveMe();

    if (died == true){
      textSize(32);
      fill("red")
      noStroke();
      text('You Died :(',10,47);
      fill(220);
      rect(me.x-25, me.y-15, 90, 200);
    }

}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,e){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.e = e;
	}

	drawBall(){  // draw a ball on the screen at x,y

        stroke(0);
        fill(255, 255, 255);
		    ellipse(this.x,this.y,10,10);
	}

	moveBall(){ //update the location of the ball, so it moves across the screen

    this.x = this.x+10;
		this.y = this.y+this.e;
	}

  // hit(){
  //   if(this.x>=me.x+10 && this.y>=  ){ //figure out when this.x will connect with me.x (the elephant) and this.y for me.y
  //     hitcount = hitcount +1;
  //   }
  // }


}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

  drawMe(){
  //  image(elephantpic, this.x, this.y);
    image(elephantpic, this.x, this.y,200,150);// this will scale the elephant
  }

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
	}

  die(){
    if (hitcount > 1) {
      print("die");
      died = true

    }

  }
}
