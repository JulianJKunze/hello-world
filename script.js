$(function () {
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
    const gameTable = $("#gameTable");

    for (let i = 0; i < topCategories.length; i++) {
      const categoryRow = $("<tr>");
      const categoryHeader = $("<th>")
        .addClass("category")
        .text(topCategories[i]);
      categoryRow.append(categoryHeader);

      const scoreCell = $("<td>");
      categoryRow.append(scoreCell);

      gameTable.append(categoryRow);
      console.log(categoryRow, categoryHeader, scoreCell);
    }

    return gameTable;
  }

  function createDice() {
    // create the dices
    const diceContainer = $("#diceContainer");
    for (let i = 0; i < 5; i++) {

      const diceImage = $("<img>")
        .attr("src", "img/dice-0.svg")
        .addClass("diceImage");
      diceContainer.append(diceImage);

    }
    return diceContainer;
  }

  function toggleDiceState(e) {
    const diceIndex = Array.from(diceContainer.children).indexOf(e.target);
  }

  function updateGameTable() {
    for (let i = 0; i < topCategories.length; i++) {
      gameTable.find("tr:eq(" + i + ") td:eq(1)").text(topCategoriesPoints[i]);
    }
  }

  function updateDiceRoll() {
    for (let i = 0; i < 5; i++) {
      diceContainer
        .find(".diceImage:eq(" + i + ")")
        .attr("src", "img/dice-" + diceRoll[i] + ".svg");
    }
  }

  function rollDice() {
    diceRoll = diceRoll.map(() => rollDie());
  }

  function rollDie() {
    return Math.ceil(Math.random() * 6);
  }
});
