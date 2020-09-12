// The game starts with this button will be this button
let gameStart = document.getElementById("start");


// When the user clicks the button, the script gathers the choices
gameStart.addEventListener("click", function(){
  
  // Get the user's first name
  let firstName = document.getElementById("first-name");
  // Get the user's last name
  let lastName = document.getElementById("last-name");
  // Get the Amount chosen
  let gameAmount = document.getElementById("amount").value;
  // Get the Prediction chosen
  let prediction = document.getElementById("prediction").value;

  
  // testing the output
  var test = `Hello ${name}, you chose ${gameType} at level ${prediction}`;
  console.log(test);
  
// Game functions

function runGameManUtdLiv(firstName, gameAmount, prediction) {
  document.getElementById("game-container").innerHTML = "<h3>Good news " + name + ", your friend has accepted your challenge, game on!<br>;" +
  "</h3><h3>The amount of your bet is €"+ gameAmount + ".<br> The team you chose to win is " + prediction + "." + "</h3>";
  console.log("Game A running....");
}


function runGameB(prediction, name) {
  document.getElementById("game-container").innerHTML = "<h3>Welcome to Game B " + name + "</h3>";
  console.log("Game B running....");
}


function runGameC(prediction, name) {
  document.getElementById("game-container").innerHTML = "<h3>Welcome to Game C " + name + "</h3>";
  console.log("Game C running....");
}


function runGameD(prediction, name) {
  document.getElementById("game-container").innerHTML = "<h3>Welcome to Game D " + name + "</h3>";
  console.log("Game D running....");
}

 // Now run the function depending on the game
  if (gameType === "Game A") {
    
    runGameManUtdLiv(prediction, name)
    
  } else if(gameType === "Game B") {
    
    runGameB(prediction, name)
    
  } else if(gameType === "Game C") {
    
    runGameC(prediction, name)
    
  } else {
    
    runGameD(prediction, name)
    
  }
  
});