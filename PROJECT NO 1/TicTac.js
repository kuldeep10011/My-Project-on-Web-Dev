let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset");
let newGameBtn = document.querySelector("#playagain")
let msgContainer = document.querySelector(".msgcontainer")
let msg = document.querySelector("#msg")

let turnX = true; //playerX, player0

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
    turnX = true
    enableBoxes()
    msgContainer.classList.add("hide")

    boxes.forEach((box) => {
        box.style.color = "#ffffc7";
        box.style.backgroundColor = "";
    });
};



boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.style.color = "green"
    box.style.backgroundColor = "rgba(0,0,0,0.3)"
    if (turnX) {
      box.innerText = "X";
      turnX = false;
      box.style.color = "red"
      box.style.backgroundColor = "rgba(0,0,0,0.3)"
    } else {
      box.innerText = "0";
      turnX = true;
    }
    box.disabled = true;
    
    checkWinner();
  });
});
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false
        box.innerText = ""
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide")
    disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let position1 = boxes[pattern[0]].innerText;
    let position2 = boxes[pattern[1]].innerText;
    let position3 = boxes[pattern[2]].innerText;

    if (position1 != "" && position2 != "" && position3 != "") {
        if(position1 === position2 && position2 === position3){
            console.log("winner", position1);
            showWinner(position1)
        }
    }
  }
};

newGameBtn.addEventListener("click", resetGame)
resetbutton.addEventListener("click", resetGame)
