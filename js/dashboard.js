
function loadDashboard() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="dashboard">
      <h1>${GameState.company.name}</h1>
      <p><strong>Save:</strong> ${GameState.currentSaveName}</p>
      <p><strong>Week:</strong> ${GameState.week}</p>
      <p><strong>Popularity:</strong> ${GameState.company.popularity}%</p>
      <p><strong>Momentum:</strong> ${GameState.company.momentum}</p>
      <p><strong>Prestige:</strong> ${GameState.company.prestige}</p>
      <button onclick="startBooking()">Book Show</button>
      <button onclick="SaveSystem.save()">Save Game</button>
      <button onclick="location.reload()">Exit to Menu</button>
    </div>
  `;
}
