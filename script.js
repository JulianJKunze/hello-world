$(function () {
  // General
  const topCategories = ["Aces", "Twos", "Threes", "Fours", "Fives", "Sixes"];

  // Game Data initialization
  const topCategoriesPoints = Array(topCategories.length).fill("0");
  const potentialTopCategoriesPoints = Array(topCategories.length).fill("");
  let diceRoll = Array(5).fill(0);
  let keepDie = Array(5).fill(false);
  let rollsLeft = 3;

  // UI initialisation
  const gameTable = createTable();
  const diceContainer = createDice();
  $("#rollDice").on("click", processDiceRoll);
  $(".keepDieCheckbox").on("change", processKeepCheckbox);
  processKeepCheckbox();
  updateGameTable();
  updateRollsLeft();

  function createTable() {
    const gameTable = $("#gameTable");

    for (let i = 0; i < topCategories.length; i++) {
      const categoryRow = $("<tr>");
      const categoryHeader = $("<th>")
        .addClass("category")
        .text(topCategories[i]);
      categoryRow.append(categoryHeader);

      categoryRow.append($("<td>")).addClass("currentPoints");
      categoryRow.append($("<td>")).addClass("potentialPoints");

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
      gameTable
        .find("tr")
        .eq(i)
        .find("td")
        .eq(1)
        .text(potentialTopCategoriesPoints[i]);
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
    updateRollsLeft();
    evaluatePotentialPoints();
    updateGameTable();
  }

  function updateRollsLeft() {
    $("#rollsLeft").text(`${rollsLeft} rolls left`);
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
    if (rollsLeft > 0) {
      for (let i = 0; i < 5; i++) {
        if (keepDie[i] === false) {
          diceRoll[i] = rollDie();
        }
      }
      rollsLeft = rollsLeft - 1;
    }
    if (rollsLeft == 0) {
      $("#rollDice").prop("disabled", true);
      $("#rollDice").text("Select Category");
    }
  }

  function rollDie() {
    return Math.ceil(Math.random() * 6);
  }

  function evaluatePotentialPoints() {
    for (
      let topCategoryEyes = 1;
      topCategoryEyes <= topCategories.length;
      topCategoryEyes++
    ) {
      potentialTopCategoriesPoints[topCategoryEyes - 1] =
        calculateTopCategoriesPoints(topCategoryEyes);
    }
  }

  function calculateTopCategoriesPoints(topCategoryEyes) {
    const result =
      diceRoll.filter((dieEyes) => dieEyes === topCategoryEyes).length *
      topCategoryEyes;
    return result;
  }
});
