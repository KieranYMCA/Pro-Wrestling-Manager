
function startBooking() {
  const app = document.getElementById("app");
  app.innerHTML = '<h2>Book Weekly Show</h2>';
  for (let i = 0; i < 3; i++) {
    const div = document.createElement("div");
    div.className = "match";
    div.innerHTML = \`
      <label>Match \${i + 1}:</label><br>
      <select id="w1-\${i}">\${GameState.roster.map(w => \`<option value="\${w}">\${w}</option>\`).join('')}</select>
      vs
      <select id="w2-\${i}">\${GameState.roster.map(w => \`<option value="\${w}">\${w}</option>\`).join('')}</select>
    \`;
    app.appendChild(div);
  }
  const btn = document.createElement("button");
  btn.textContent = "Simulate Show";
  btn.onclick = simulateShow;
  app.appendChild(btn);
}

function simulateShow() {
  const results = [];
  for (let i = 0; i < 3; i++) {
    const w1 = document.getElementById(`w1-${i}`).value;
    const w2 = document.getElementById(`w2-${i}`).value;
    const score1 = Math.random() * 100;
    const score2 = Math.random() * 100;
    const winner = score1 > score2 ? w1 : w2;
    const rating = ((score1 + score2) / 2).toFixed(1);
    results.push(`${w1} vs ${w2} — Winner: ${winner} (Rating: ${rating}%)`);
  }
  GameState.showHistory.push(results);
  GameState.week++;
  SaveSystem.save();
  alert("Show complete! Returning to dashboard...");
  loadDashboard();
}
