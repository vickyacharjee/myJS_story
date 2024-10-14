let changer = false;
let stopInterval;

document.getElementsByClassName('start').addEventListener('click',startChangingColor)

function startChangingColor() {
  if (!changer) {
    changer = true;
    document.querySelector('.start').style.backgroundColor = "red";
    document.querySelector('.start').textContent = "Stop";
    stopInterval = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 10);
  } 
  else {
    changer = false;
    document.querySelector('.start').style.backgroundColor = "green";
    document.querySelector('.start').textContent = "Start";
    clearInterval(stopInterval);
  }
}