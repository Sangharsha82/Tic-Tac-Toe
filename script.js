let box = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg");
let msg = document.querySelector("#winner");
let main = document.querySelector(".main");
let turn0 = true;
const winPat = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const rBtn = () => {
  turn0 = true;
  eBox();
  msgContainer.classList.add("hide");
  main.classList.remove("hide");
};
box.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked");
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    winCheck();
  });
});
const dBox = () => {
  for (let boxes of box) {
    boxes.disabled = true;
  }
};
const eBox = () => {
  for (let boxes of box) {
    boxes.disabled = false;
    boxes.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations the winner is ${winner}`;
  msgContainer.classList.remove("hide");
  main.classList.add("hide");
  dBox();

};
const winCheck = () => {
  for (let pattern of winPat) {
    let p1 = box[pattern[0]].innerText;
    let p2 = box[pattern[1]].innerText;
    let p3 = box[pattern[2]].innerText;

    if (p1 != "" && p2 != "" && p3 != "") {
      if (p1 == p2 && p2 == p3) {
        console.log("winner", p1);
        showWinner(p1);
      }
    }
  }
};
reset.addEventListener("click", rBtn);
newGame.addEventListener("click", rBtn);
