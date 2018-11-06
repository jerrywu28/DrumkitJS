const playSound = (e) => {  
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
  if (!audio) return; //Stop the function from running
  audio.currentTime = 0; //Rewind to start
  audio.play(); //Plays sound
  key.classList.add('playing'); //Adds class 'playing' to highlight with yellow shadow
}

const removeTransition = (e) => {
  if (e.propertyName !== 'transform') return; //Skip if not transform (as this takes longest)
  e.path[0].classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound);