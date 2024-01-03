$(function () {
  // General
  const topCategories = ["Aces", "Twos", "Threes", "Fours", "Fives", "Sixes"];

  // jQuery / Cash elements
  const rollDiceButton = $("#rollDice");
  const gameTable = createTable();
  const diceContainer = createDice();

  // Game Data
  const topCategoriesPoints = Array(topCategories.length).fill("0");
  let diceRoll = Array(5).fill("0");
  // let keepDie = Array(5).fill(false);

  updateGameTable();
  updateDiceRoll();

  rollDiceButton.on("click", () => {
    rollDice();
    updateDiceRoll();
  });

  function createTable() {
    const gameTable = $("#gameTable");

    for (let i = 0; i < topCategories.length; i++) {
      const categoryRow = $("<tr>");
      const categoryHeader = $("<th>")
        .addClass("category")
        .text(topCategories[i]);
      categoryRow.append(categoryHeader);

      categoryRow.append($("<td>"));

      gameTable.append(categoryRow);
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

  // function toggleDiceState(e) {
  //   const diceIndex = Array.from(diceContainer.children).indexOf(e.target);
  // }

  function updateGameTable() {
    for (let i = 0; i < topCategories.length; i++) {
      gameTable.find("tr").eq(i).find("td").eq(0).text(topCategoriesPoints[i]);
    }
  }

  function updateDiceRoll() {
    for (let i = 0; i < 5; i++) {
      diceContainer
        .find("img")
        .eq(i)
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
