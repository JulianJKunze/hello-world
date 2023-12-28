const gameTable = document.getElementById("gameTable");
const topCategories = ["Aces", "Twos", "Threes", "Fours", "Fives", "Sixes"];

const topCategoriesPoints = Array(topCategories.length).fill("");
const rollDiceButton = document.getElementById("rollDice");

let diceRoll = Array(5).fill("");

createGameTable();
updateGameTable();

rollDiceButton.addEventListener("click", () => {
  rollDice();
  updateDiceRoll();
  console.log(diceRoll);
});

function createGameTable() {
  for (let i = 0; i < topCategories.length; i++) {
    const tr = document.createElement("tr");

    const th = document.createElement("th");
    th.setAttribute("class", "category");
    th.innerText = topCategories[i];
    tr.appendChild(th);

    const td = document.createElement("td");
    tr.appendChild(td);

    gameTable.appendChild(tr);
  }
}

function updateGameTable() {
  for (let i = 0; i < topCategories.length; i++) {
    gameTable.rows[i].cells[1].innerText = topCategoriesPoints[i];
  }
}

function updateDiceRoll() {
  const diceRollDiv = document.getElementById("diceRoll");
  diceRollDiv.innerText = diceRoll.join(", ");
}

function rollDice() {
  diceRoll = diceRoll.map(() => rollDie());
}

function rollDie() {
  return Math.ceil(Math.random() * 6);
}
