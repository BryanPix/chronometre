// const start = document.getElementById("btn-start");
// const pause = document.getElementById("btn-pause");
// const stop = document.getElementById("btn-stop");
// const text = document.getElementById("btn-text");
// const timer = document.getElementById("btn-timer");


var startTime, endTime, running = false;

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
  document.getElementById("chrono").innerHTML = "00:00:00";
}

function updateTimer() {
  if (running) {
    var currentTime = new Date().getTime();
    var timeElapsed = new Date(currentTime - startTime);
    var hours = timeElapsed.getUTCHours().toString().padStart(2, '0');
    var minutes = timeElapsed.getUTCMinutes().toString().padStart(2, '0');
    var seconds = timeElapsed.getUTCSeconds().toString().padStart(2, '0');
    document.getElementById("chrono").innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout(updateTimer, 1000);
  }
}






// // initialisation du temps de départ
// let tpsEcoule = 0;

// start.addEventListener('click', function () {
//     // Algo de calcul de nombre heures, minutes et secondes écoulées

//     // On démarre avec le timestamp lorsque l'on clique sur start qu'on stock dans startTime
//     let startTime = new Date();

//     // on lance un setInterval
//     decompte = setInterval(function () {
//         // 1- Convertir en secondes ：
//         var seconds = Math.round(
//             (new Date().getTime() - startTime.getTime()) / 1000 + tpsEcoule);

//         // 2- Extraire les heures:
//         var hours = parseInt(seconds / 3600);
//         seconds = seconds % 3600; // secondes restantes

//         // 3- Extraire les minutes:
//         var minutes = parseInt(seconds / 60);
//         seconds = seconds % 60; // secondes restantes

//         // 4- afficher dans le span
//         text.innerHTML = ajouteUnZero(hours)
//             + ": " + ajouteUnZero(minutes)
//             + ": " + ajouteUnZero(seconds);
        
//     }, 1000); // fin de function anonyme dans setInterval

//     //cache du bouton start
//     start.style.visibility = "hidden";
    

// })

// pause.addEventListener('click', function(){
//     if(pause == true){
//         decompte;
//         pause = false;
//     }else{
//         clearInterval(decompte);
//         pause = true;
//     }
// })

// function ajouteUnZero(tps) {
//     if ( tps <= 9){
//         return '0' + tps
//     } else {
//         return tps
//     }
// }