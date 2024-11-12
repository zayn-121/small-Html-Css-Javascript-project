const buttonEl = document.querySelector("#roll-dice");
const diceEl = document.querySelector("#dice");
const rollHistoryEl = document.querySelector("#roll-history");

let historyList = [];
function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);
  diceEl.innerHTML = diceFace;
  historyList.push(rollResult);
  updateHistory();
}

function updateHistory() {
  rollHistoryEl.innerHTML = "";
  for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`;
    rollHistoryEl.appendChild(listItem)
  }
}

function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}
buttonEl.addEventListener("click", () => {
  buttonEl.style.padding = "1rem 1.7rem";
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    buttonEl.style.padding = "1rem 2rem";
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
