
//create an empty array called balls

let balls = [];
//create a variable to hold your avatar
let me;
let died = false;
let hunterpic;
let elephantpic;
let hitcount = 0;
let time = 0;


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
  //print(died);

  if (frameCount % 90 == 0){
    time = time+1;
  }
  textSize(28);
  text('Score:',10,30);
  text(time, 100,30);
  text('Hitcount:', 650,30);
  text(hitcount, 770,30);

  if (frameCount % 40 == 0) {
    let a = random (300);
    let c = random (300);
    let  b = new Ball(105, 150, 10/random(-50,50) );
    balls.push(b);
    //console.log(balls);
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();
      balls[i].hit();
	  }

    me.drawMe();
    me.moveMe();
    me.die();

    if (died == true){
      textSize(32);
      fill("red")
      noStroke();
      text('You Died.This is a commentary on how elephants are ',10,47);
      text('being killed for their ivory. We hope this gaming',10,75);
      text('experience has allowed you to gain perspective and ', 10,103);
      text('awareness on this critical issue.',10,131);
      score = time;
      text(score,400,200);

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

  hit(){
   if(this.x > me.x-25 && this.x <= me.x+25 && this.y > me.y-25&& this.y < me.y+25 ){ //figure out when this.x will connect with me.x (the elephant) and this.y for me.y
    hitcount = hitcount +1;
    print(hitcount);

  }

  //  }
  }


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
    if (hitcount>5){
      died=true;
      background(0,0,0);

    }

  }

  //if the ball hits the person, change the speed value to negative (send it in the opposite direction)


}
