function rollDice() {
    var dice1 = document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");
    var winnerElement = document.getElementById("total");
    var audio = new Audio("dicemusic.mp3"); // Replace "dice-roll.mp3" with the path to your audio file
  
    // Generate random numbers between 1 and 6 for each dice
    var diceValue1 = Math.floor(Math.random() * 6) + 1;
    var diceValue2 = Math.floor(Math.random() * 6) + 1;
  
    // Update the dice images with rotation animation
    dice1.style.animation = "rotate 4s linear"; // Increase the duration to 2 seconds
    dice2.style.animation = "rotate 4s linear"; // Increase the duration to 2 seconds
  
    // Play the dice roll sound
    audio.play();
  
    // Wait for the animation to finish (2 seconds) before updating the images
    setTimeout(function() {
      // Reset the animation to none after it finishes
      dice1.style.animation = "none";
      dice2.style.animation = "none";
  
      // Pause and reset the audio
      audio.pause();
      audio.currentTime = 7;
  
      // Update the dice images
      dice1.src = "dice" + diceValue1 + ".png";
      dice2.src = "dice" + diceValue2 + ".png";
  
      // Determine the winner based on the dice values
      var winnerName = "";
      if (diceValue1 > diceValue2) {
        winnerName = "Dice 1";
      } else if (diceValue1 < diceValue2) {
        winnerName = "Dice 2";
      } else {
        winnerName = "It's a tie";
      }
  
      // Display the winner's name
      winnerElement.textContent = "Winner: " + winnerName;
    }, 4000); // Increase the timeout to 2000 milliseconds (2 seconds)
  }
  