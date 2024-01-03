$(function () {
  // General
  const topCategories = ["Aces", "Twos", "Threes", "Fours", "Fives", "Sixes"];

  // Game Data initialization
  const topCategoriesPoints = Array(topCategories.length).fill("0");
  let diceRoll = Array(5).fill("0");
  let keepDie = Array(5).fill(false);

  // UI Creation

  const gameTable = createTable();
  const diceContainer = createDice();
  $("#rollDice").on("click", processDiceRoll);
  $(".keepDieCheckbox").on("change", processKeepCheckbox);
  processKeepCheckbox();
  updateGameTable();

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
    const diceContainer = $("#diceContainer");
    for (let i = 0; i < 5; i++) {
      const dieContainer = $("<div>").addClass("dieContainer");
      const dieImage = $("<img>")
        .attr("src", "img/die-0.svg")
        .addClass("dieImage");
      const keepDieCheckbox = $("<input>")
        .attr("type", "checkbox")
        .addClass("keepDieCheckbox clickable");
      dieContainer.append(keepDieCheckbox, dieImage);
      diceContainer.append(dieContainer);
    }
    return diceContainer;
  }

  // UI Output
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
        .attr("src", "img/die-" + diceRoll[i] + ".svg");
    }
  }

  // UI Input
  function processDiceRoll() {
    rollDice();
    updateDiceRoll();
  }

  function processKeepCheckbox() {
    for (let i = 0; i < 5; i++) {
      keepDie[i] = $(".dieContainer")
        .find(".keepDieCheckbox")
        .eq(i)
        .prop("checked");
    }
  }

  // gameplay
  function rollDice() {
    for (let i = 0; i < 5; i++) {
      if (keepDie[i] === false) {
        diceRoll[i] = rollDie();
      }
    }
  }

  function rollDie() {
    return Math.ceil(Math.random() * 6);
  }

  // function toggleDiceState(e) {
  //   const diceIndex = Array.from(diceContainer.children).indexOf(e.target);
  // }
});
