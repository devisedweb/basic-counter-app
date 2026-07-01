const displayCount = document.querySelector("p");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");

let count = 0;

increment.addEventListener("click", function () {
  count += 1;
  decrement.disabled = false;
  displayCount.textContent = count;
});

decrement.addEventListener("click", function () {
  count -= 1;
  if (count == 0) {
    decrement.disabled = true;
  }
  displayCount.textContent = count;
});

reset.addEventListener("click", function () {
  count = 0;
  displayCount.textContent = 0;
});
