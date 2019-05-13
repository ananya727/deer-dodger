//create an empty array called balls
let timer = 0
//create a variable to hold your avatar
let me;
let died = false;

function preload(){
  img = loadImage('Elephant.png');
}
function setup() {

}

function setup() {
  createCanvas(1000, 1000);
  // me = new Avatar(width/2, 300, 3);
}

function draw(){
	background(255,255,255);
image(img, 0, 0);
}


//
// //avatar class
// class Avatar {
//
// 	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
// 		    this.x = x;
//     		this.y = y;
//         this.speed = speed;
// 	}
//
// 	moveMe(){
//     if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
//        this.y -= this.speed;
//     }
//
//     if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
//         this.y += this.speed;
//     }
// 	}
//
//   die(){
//     if (hitcount == 1) {
//       print("die");
//       died = true
//       textSize(32);
//       fill("red")
//       noStroke();
//       text('You Died :(',10,47);
//       fill(220);
//       rect(me.x-25, me.y-15, 90, 200);
//     }
//
//   }
// }
