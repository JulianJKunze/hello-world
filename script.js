const gameTable = document.getElementById("gameTable");
const topCategories = ["Aces", "Twos", "Threes", "Fours", "Fives", "Sixes"];

const topPoints = Array(6).fill("");

createGameTable();

function createGameTable() {
  for (let i = 0; i < topCategories.length; i++) {
    const tr = document.createElement("tr");

    const th = document.createElement("th");
    th.setAttribute("class", "category");
    th.innerText = topCategories[i];
    tr.appendChild(th);

    const td = document.createElement("td");
    td.innerText = topPoints[i];
    tr.appendChild(td);

    gameTable.appendChild(tr);
  }
}

function updateGameTable() {}
