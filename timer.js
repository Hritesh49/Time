const mainmenu = document.querySelector(".mainmenu");
const closemenu = document.querySelector(".closemenu");
const openmenu = document.querySelector(".openmenu");




openmenu.addEventListener("click", show);
closemenu.addEventListener("click", close);


function show() {
    mainmenu.style.display = 'flex';
    mainmenu.style.top = '0';
}
function close() {
    mainmenu.style.top = '-100%';
}


const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

const song = document.getElementById('song');

const disp = document.getElementById('disp');

var interval = null;
var total = 0;

totalValue = () => {
    total = Number(hour.value) * 3600 + Number(minute.value) * 60 + Number(second.value);
}

Timer = () => {
    totalValue();
    total--;

    if (total >= 0) {
        var hrs = Math.floor(total / 3600);
        var min = Math.floor((total / 60) - (hrs * 60));
        var sec = total - ((hrs * 3600) + (min * 60));

        hour.value = hrs;
        minute.value = min;
        second.value = sec;
    }
    else {
        disp.innerText = "Time's Up !";

        playSong();
    }
}


start.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(Timer, 1000);

    disp.innerText = "Timer Started";
})

stop.addEventListener('click', () => {
    clearInterval(interval);
    stopSong();
})

reset.addEventListener('click', () => {

    clearInterval(interval);

    hour.value = 0;
    minute.value = 0;
    second.value = 0;

    disp.innerText = "Timer";

})

function playSong() {
    song.play();
}

function stopSong() {
    song.pause();
    song.currentTime = 0;
}