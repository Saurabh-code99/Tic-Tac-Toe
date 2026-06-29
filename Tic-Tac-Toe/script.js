let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let msg = document.querySelector(".msg");

turn0 = false;
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
    checkWinner();
    checkDraw();
  });
});

const checkDraw = () => {
  for(let box of boxes){
    if(box.innerText === ""){
      return;
    }
  }
  msg.innerText = "It is a Draw";
  msg.classList.remove("hide");
};
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
      }
    }
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulation, winner is ${winner}`;
  msg.classList.remove("hide");
  disableboxes();
};
const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

resetbtn.addEventListener("click", (e) => {
  turn0 = false;
  enableboxes();
});
const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    msg.classList.add("hide");
  }
};
