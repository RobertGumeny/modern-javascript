let min = 1,
  max = 10,
  winningNumber = getRandomNum(min, max),
  guessesLeft = 3;

const gameWrapper = document.getElementById('game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

gameWrapper.addEventListener('mousedown', function (e) {
  if (e.target.classList.contains('play-again')) {
    window.location.reload();
    console.log('Hello');
  }
});

guessBtn.addEventListener('click', function (e) {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
  }

  if (guess === winningNumber) {
    gameOver(true, `${winningNumber} is correct, you win!`);
  } else {
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      gameOver(
        false,
        `Game over, you lost. The correct number was ${winningNumber}`
      );
    } else {
      guessInput.value = '';
      setMessage(
        `Guess is incorrect, ${guessesLeft} guesses remaining.`,
        'red'
      );
    }
  }

  e.preventDefault();
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');

  guessInput.disabled = true;
  setMessage(msg, color);

  guessBtn.value = 'Play Again';
  guessBtn.className += ' play-again';
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
