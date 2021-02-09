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
  winningNum = 2,
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


// Event listener

guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  //validate input

  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'pink')
  }

  //check if won
  if(guess === winningNum){
    guessInput.disabled = true;
    guessInput.style.borderColor = 'green';
    setMessage(`${winningNum} is correct! YOU WIN!` ,'green')
  } else {
    guessInput.value = '';
    guessesLeft -=1;
    if(guessesLeft === 0){
      guessInput.value = `${guess}`
      guessInput.disabled = true;
      guessInput.style.borderColor = 'red';
      setMessage('You lost! Start again?', 'red');
    }
    console.log(guessesLeft);
  }
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}