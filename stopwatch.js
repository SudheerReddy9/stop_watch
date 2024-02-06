// window.onload = function() {
//     var seconds = 0;
//     var tens = 0;
//     var appendTens = document.getElementById("tens");
//     var appendSeconds = document.getElementById("seconds");
//     var buttonStart = document.getElementById("button-start");
//     var buttonStop = document.getElementById("button-stop");
//     var buttonReset = document.getElementById("button-reset");
//     var interval;

//     function startTimer() {
//         interval = setInterval(function() {
//             tens++;
//             if (tens < 9) {
//                 appendTens.innerHTML = "0" + tens;
//             }
//             if (tens > 9) {
//                 appendTens.innerHTML = tens;
//             }
//             if (tens > 99) {
//                 seconds++;
//                 appendSeconds.innerHTML = "0" + seconds;
//                 tens = 0;
//                 appendTens.innerHTML = "0" + tens;
//             }
//             if (seconds > 9) {
//                 appendSeconds.innerHTML = seconds;
//             }
//         }, 10);
//     }

//     function stopTimer() {
//         clearInterval(interval);
//         seconds = 0;
//         tens = 0;
//     }

//     function resetTimer() {
//         clearInterval(interval);
//         seconds = 0;
//         tens = 0;
//         appendSeconds.innerHTML = "0" + seconds;
//         appendTens.innerHTML = "0" + tens;
//     }

//     buttonStart.onclick = startTimer;
//     buttonStop.onclick = stopTimer;
//     buttonReset.onclick = resetTimer;
// };