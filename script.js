let startTime, endTime, running = false;

function start() {
  if (!running) {
    startTime = new Date().getTime();
    running = true;
    updateTimer();
  }
}

function stop() {
  if (running) {
    endTime = new Date().getTime();
    running = false;
  }
}

function reset() {
  startTime = 0;
  endTime = 0;
  running = false;
  document.getElementById("btn-text").innerHTML = "00:00:00";
}

function updateTimer() {
  if (running) {
    let currentTime = new Date().getTime();
    let timeElapsed = new Date(currentTime - startTime);
    let hours = timeElapsed.getUTCHours().toString().padStart(2, '0');
    let minutes = timeElapsed.getUTCMinutes().toString().padStart(2, '0');
    let seconds = timeElapsed.getUTCSeconds().toString().padStart(2, '0');
    document.getElementById("btn-text").innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout(updateTimer, 1000);
  }
}