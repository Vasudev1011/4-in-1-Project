const hour = document.getElementById("hr");
const minute = document.getElementById("min");
const second = document.getElementById("sec");

setInterval(() => {
  const date = new Date();

  hour.innerHTML = `${date.getHours()}`;
  minute.innerHTML = `${date.getMinutes()}`;
  second.innerHTML = `${date.getSeconds()}`;
}, 500);
