
// Walker constructor function
// It will take in a position
// It will then take a `step` every frame
var Walker = function (initalX, initialY) {

}


Walker.prototype.step = function() {
  var choice = random(4)

  if (choice === 0) {
    this.x++;
  }
  if (choice === 1) {
    this.x--;
  }
  if (choice === 2) {
    this.y++;
  }
  else {
    this.y--;
  }
}

//
function mouseClicked() {
  // Hint use `push` and `new` to make instances of walkers
  // You might want to pass in mouseX and mouseY
}

//

// Global scope for an array of walkers
function setup() {


}

function draw() {

}