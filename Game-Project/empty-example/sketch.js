
//create an empty array called balls

let balls = [];


function setup() {
  createCanvas(800, 400);

}
function preload() {
  img = loadImage('hunter.png');
}

function draw(){
	background(66, 134, 244);

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();

image(img,75,50,50,50);
	  }


}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
  let a = random (300);
  let c = random (300);


  let  b = new Ball(75, 150, 10/random(30) );
  balls.push(b);
  console.log(balls);
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


}
