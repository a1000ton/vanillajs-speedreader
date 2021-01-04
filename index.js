var settings = document.querySelector("#settings");
var text = document.querySelector("#text");
var wpm = document.querySelector("#wpm");
var reader = document.querySelector("#reader");

var words, speed, current, interval;

var end = () => {
  clearInterval(interval);
};

var run = () => {
  settings.removeAttribute("open");

  interval = setInterval(() => {
    if (!words[current]) {
      end();
      return;
    }

    reader.textContent = words[current];
    current++;
  }, speed);
};

var stop = (event) => {
  if (event.target.id !== "stop") return;

  end();
};

var start = (event) => {
  if (event.target.id !== "start") return;

  if (!text.value.length) return;

  words = text.value.split(" ").filter((word) => word.length);

  speed = (60 / parseInt(wpm.value, 10)) * 1000;

  current = 0;

  run();
};

var clickHandler = (event) => {
  start(event);
  stop(event);
};

document.addEventListener("click", clickHandler);
