let boxes = document.querySelectorAll(".box");

let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
turn0 = true;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0 === true) {
      box.innerHTML = "0";
      turn0 = false;
    } else {
      box.innerHTML = "x";
      turn0 = true;
    }
    box.disabled = true;
    count++;
  });
});