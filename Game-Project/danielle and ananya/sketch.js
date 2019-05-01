//create an empty array called balls
let balls = [];
let wizard;
let point;
//let princess;

//create a variable to hold your avatar
let me;

function preload() {
  wizard = loadAnimation('sprites/sprite 1.png', 'sprites/sprite 2.png');
  //princess = loadImage('Princess.png');
}

function setup() {
  point=0;
  createCanvas(500, 400);
   //make one avatar called me
  me = new Avatar(width/2, 300, 3);

}


function draw(){
	background(173, 216, 230);
  stroke(2);
  fill("white")
  rect(26,18,33,20);
  fill("black");
  text(point, 30,30);  //make
  me.drawMe();
  me.moveMe();
  //image(princess, 0, 200);

  if (frameCount % 40 == 0) {
      let  b = new Ball(width, random(0,height), -3);
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
	  }

}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
        animation(wizard, this.x-75, this.y-20,75,  75);

        // stroke("green");
        // strokeWeight(3);
    		// fill("blue");
		    // ellipse(this.x,this.y,20,20);
        // line(this.x,this.y, this.x, this.y+40);
        // line(this.x, this.y+40, this.x-20, this.y+60);
        // line(this.x, this.y+40, this.x+10, this.y+50);
        // line(this.x+10, this.y+50, this.x+5, this.y+60);
        // line(this.x, this.y+15, this.x-10, this.y+25);
        // line(this.x-10, this.y+25, this.x+10, this.y+35);
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
    background("black");
    stroke("red");
    fill("red");
    text("the princess died");
  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
      let a = random(255);
      let b = random(255);
      let c = random(255);
    	stroke(0);
      strokeWeight(1);
    	fill(a, b, c);
		  ellipse(this.x,this.y,10,10);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-1 && this.x <= me.x+1 && this.y > me.y-50 && this.y < me.y+50){
            stroke("yellow");
            strokeWeight(10);
            line(this.x,this.y-10, this.x, this.y+10);
            this.speed = -this.speed;
            point=point+1
    		}

  	}

}
