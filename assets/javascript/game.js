// NOTES
// When playing, you can surpass the target number without ending the game.
  // Eventually, the game says you win/lose.
// Also, you can lose before reaching the target number.


// Selects random number between 19 and 120 at game start
var targetRandom=Math.floor(Math.random()*101+19);
  

// Adds random number to the randomNumber id in the html
$("#randomNumber").html(targetRandom);


// Sets up random numbers for each crystal between 1 and 12
var crystal1= Math.floor(Math.random()*11+1);
var crystal2= Math.floor(Math.random()*11+1);
var crystal3= Math.floor(Math.random()*11+1);
var crystal4= Math.floor(Math.random()*11+1);


//  Tally Variables
var userTotal= 0; 
var wins= 0;
var losses = 0;


$('#numberWins').html(wins);
$('#numberLosses').html(losses);


// Game reset
function reset(){
  random=Math.floor(Math.random()*101+19);
  console.log(random)
  $('#randomNumber').text(random);
  crystal1= Math.floor(Math.random()*11+1);
  crystal2= Math.floor(Math.random()*11+1);
  crystal3= Math.floor(Math.random()*11+1);
  crystal4= Math.floor(Math.random()*11+1);
  userTotal= 0;
  $('#finalTotal').text(userTotal);
} 


// Adds wins to userTotal
function win(){
alert("You won!");
  wins++; 
  $('#numberWins').html(wins);
  reset();
}


// Adds loss to userTotal
function lose(){
alert ("Sorry, Try Again!");
  losses++;
  $('#numberLosses').html(losses);
  reset()
}


// Click event for jewels
  $('#one').on('click', function(){
    userTotal = userTotal + crystal1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').html(userTotal); 
          
// Win/lose conditions
  if (userTotal == targetRandom){
    win();
  }
  else if ( userTotal >targetRandom){
    lose();
  }   
  })  

  $('#two').on('click', function(){
    userTotal = userTotal + crystal2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').html(userTotal); 
      if (userTotal == targetRandom){
        win();
      }
      else if ( userTotal > targetRandom){
        lose();
      } 
  }) 

  $('#three').on('click', function(){
    userTotal = userTotal + crystal3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').html(userTotal);

// Win/lose conditions
  if (userTotal == targetRandom){
    win();
  }
  else if ( userTotal > targetRandom){
    lose();
  } 
  })

  $('#four').on('click', function(){
    userTotal = userTotal + crystal4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      if (userTotal == targetRandom){
        win();
      }
      else if ( userTotal > targetRandom){
        lose();
      }
  });