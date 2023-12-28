const gameTable = document.getElementById("gameTable");
const topCategories = ["Aces", "Twos", "Threes", "Fours", "Fives", "Sixes"];

const topCategoriesPoints = Array(topCategories.length).fill("");
const rollDiceButton = document.getElementById("rollDice");
const diceContainer = document.getElementById("diceContainer");

let diceRoll = Array(5).fill("0");

createGame();
updateGameTable();
updateDiceRoll();

rollDiceButton.addEventListener("click", () => {
  rollDice();
  updateDiceRoll();
  console.log(diceRoll);
});

function createGame() {
  // create and fill the Table
  for (let i = 0; i < topCategories.length; i++) {
    const categoryRow = document.createElement("tr");

    const categoryHeader = document.createElement("th");
    categoryHeader.setAttribute("class", "category");
    categoryHeader.innerText = topCategories[i];
    categoryRow.appendChild(categoryHeader);

    const scoreCell = document.createElement("td");
    categoryRow.appendChild(scoreCell);

    gameTable.appendChild(categoryRow);
  }

  // create the dices

  for (let i = 0; i < 5; i++) {
    const diceImage = document.createElement("img");
    diceImage.src = `img/dice-0.svg`;
    diceImage.classList.add("diceImage");
    diceContainer.appendChild(diceImage);
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
