let count = "00";
let sec = "00";
let min = "00";
let hr = "00";
let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");

let timer = false;
start.addEventListener("click", () => {
  timer = true;
  StartTimer();
});
pause.addEventListener("click", () => {
  timer = false;
});
reset.addEventListener("click", () => {
  count = "00";
  sec = "00";
  min = "00";
  hr = "00";
  document.getElementById("count").innerHTML = "00";
  document.getElementById("Sec").innerHTML = "00";
  document.getElementById("Min").innerHTML = "00";
  document.getElementById("Hr").innerHTML = "00";
  timer = false;
});
function StartTimer() {
  if (timer) {
    count++;
    if (count == 100) {
      sec++;
      count = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hr++;
      min = 0;
      sec = 0;
    }
    if (count > 0) {
      document.getElementById("count").innerHTML =
        count < 10 ? "0" + count : count;
    }
    if (sec > 0) {
      document.getElementById("Sec").innerHTML = sec < 10 ? "0" + sec : sec;
    }
    if (min > 0) {
      document.getElementById("Min").innerHTML = min < 10 ? "0" + min : min;
    }
    if (hr > 0) {
      document.getElementById("Hr").innerHTML = hr < 10 ? "0" + hr : hr;
    }
    setTimeout(StartTimer, 10);
  }
  if (timer) {
    start.disabled = true;
  } else {
    start.disabled = false;
  }
}
