const button = document.getElementById("clickBtn");
const message = document.getElementById("message");
let count = 0;

button.addEventListener("click", function () {
  count++;
  message.textContent = "You clicked the button " + count + " time(s)!";
});
