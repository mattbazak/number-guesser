/*
guess a number between min and max
get certain amount of guesses
notify of guesses remaining
display correct answer when lost
allow replay
*/

// GAME VALUES

let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI ELEMENTS

const game = document.getElementById('game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');


// assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

// Play Again event listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});


// Event listener

guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  //validate input

  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'pink')
  }

  //check if won
  if(guess === winningNum){
    gameOver(true, `${winningNum} was correct! YOU WIN!`)
  } else {
    
    guessesLeft -=1;
    if(guessesLeft === 0){
      guessInput.value = `${guess}`
      gameOver(false, `Game Over. Correct number was ${winningNum}.`)
    } else {
      guessInput.value = '';
      guessInput.style.borderColor = 'red'
      setMessage(`${guess} is not correct. ${guessesLeft} guesses left.`, 'red')
    }
  }
});

// game over
function gameOver(won, msg){
  let color ;
  won === true ? color = 'green' : color = 'red'
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);

  // play again?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

// get winning num
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}


function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}