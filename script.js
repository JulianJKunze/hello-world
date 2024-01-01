(function () {
  // DOM-Elements

  const topCategories = ["Aces", "Twos", "Threes", "Fours", "Fives", "Sixes"];
  const rollDiceButton = document.getElementById("rollDice");
  const gameTable = createTable();
  const diceContainer = createDice();

  // Game Data
  const topCategoriesPoints = Array(topCategories.length).fill("0");
  let diceRoll = Array(5).fill("0");
  let keepDie = Array(5).fill(false);

  updateGameTable();
  updateDiceRoll();

  rollDiceButton.addEventListener("click", () => {
    rollDice();
    updateDiceRoll();
    console.log(diceRoll);
  });

  function createTable() {
    const gameTable = document.getElementById("gameTable");

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

    return gameTable;
  }

  function createDice() {
    // create the dices
    const diceContainer = document.getElementById("diceContainer");
    for (let i = 0; i < 5; i++) {
      const diceImage = document.createElement("img");
      diceImage.src = `img/dice-0.svg`;

      diceImage.classList.add("diceImage");
      diceImage.addEventListener("click", toggleDiceState);

      diceContainer.appendChild(diceImage);
    }
    return diceContainer;
  }

  function toggleDiceState(e) {
    const diceIndex = Array.from(diceContainer.children).indexOf(e.target);
  }

  function updateGameTable() {
    for (let i = 0; i < topCategories.length; i++) {
      gameTable.rows[i].cells[1].innerText = topCategoriesPoints[i];
    }
  }

  function updateDiceRoll() {
    for (let i = 0; i < 5; i++) {
      diceContainer.children[i].src = `img/dice-${diceRoll[i]}.svg`;
    }
  }

  function rollDice() {
    diceRoll = diceRoll.map(() => rollDie());
  }

  function rollDie() {
    return Math.ceil(Math.random() * 6);
  }
})();
