
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  function renderMainMenu() {
    app.innerHTML = `
      <div class="menu">
        <h1>Pro Wrestling Manager 2025</h1>
        <button id="newGameBtn">New Game</button>
        <button id="loadGameBtn">Load Game</button>
        <div id="loadList"></div>
      </div>
    `;

    document.getElementById("newGameBtn").onclick = () => {
      const name = prompt("Enter save name:");
      if (name) {
        GameState.currentSaveName = name;
        TitleSystem.init();
        SaveSystem.save();
        loadDashboard();
      }
    };

    document.getElementById("loadGameBtn").onclick = () => {
      const saves = SaveSystem.getSaves();
      const list = document.getElementById("loadList");
      list.innerHTML = saves.length ? "<h3>Saved Games:</h3>" : "<p>No saves found.</p>";
      saves.forEach(name => {
        const btn = document.createElement("button");
        btn.textContent = name;
        btn.onclick = () => {
          SaveSystem.load(name);
          TitleSystem.init();
          loadDashboard();
        };
        list.appendChild(btn);
      });
    };
  }

  renderMainMenu();
});
