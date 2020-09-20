// JQuery accordian
$( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );

  // Add matches and match results to local Storage
localStorage.setItem("match1", "between Man United and Liverpol.");
localStorage.setItem("match2", "between Real Madrid and Barcelona.");
localStorage.setItem("match3", "between Ireland and England.");
localStorage.setItem("match4", "between Rory McIlroy and The Field.");
localStorage.setItem("match5", "between Dublin and Kerry.");
localStorage.setItem("match1result", "Man United");
localStorage.setItem("match2result", "Barcelona");
localStorage.setItem("match3result", "Draw");
localStorage.setItem("match4result", "The Field");
localStorage.setItem("match5result", "Dublin");

  // The game starts with this button for 'Challenge Friend'
let gameStart = document.getElementById("start1a");

  // When the user clicks the button, the script gathers the choices
gameStart.addEventListener("click", function (){
  
    // Get the user's first name
    let firstName1 = document.getElementById("first-name1").value;
    console.log(firstName1);
    // Get the user's team choice
    let prediction1 = document.getElementById("prediction1").value;
    // Get the Amount chosen
    let gameAmount1 = document.getElementById("amount1").value;
    //console.log(gameAmountNumber1);

    // Create variable to update the modal based on game choices made
    let updateModal1 = document.getElementById("mb1").innerHTML = `${firstName1}, good news, your bet is on!<br> 
    You have chosen ${prediction1} to win in the match<br>
    between Man United and Liverpool.<br>
    Your amount staked is ` + `${gameAmount1}<br>
    Best of luck!<br><br>
    PS when the match is over you can check the result below:`;
    console.log(updateModal1);
});