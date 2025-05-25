
// For now, this just seeds a fake roster when new game is created
(function seedDefaultRoster() {
  if (GameState.roster.length === 0) {
    GameState.roster = [
      "Ronan Reignz", "Colby Roads", "Zeph Rawlins", "Reba Wrath",
      "Brock Boulder", "Jimmy Ooze", "Jay Ooze", "Braydn Wyatt"
    ];
  }
})();
