const gameTable = document.getElementById("gameTable");
const topCategories = ["Aces", "Twos", "Threes", "Fours", "Fives", "Sixes"];

for (const topCategory of topCategories) {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.innerText = topCategory;
  tr.appendChild(td);
  gameTable.appendChild(tr);
}
