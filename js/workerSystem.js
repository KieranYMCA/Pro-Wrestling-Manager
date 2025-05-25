
(function seedDefaultRoster() {
  if (GameState.roster.length === 0) {
    GameState.roster = [
      { name: "Ronan Reignz", popularity: 90, alignment: "Face", morale: 80 },
      { name: "Colby Roads", popularity: 85, alignment: "Face", morale: 70 },
      { name: "Zeph Rawlins", popularity: 88, alignment: "Heel", morale: 75 },
      { name: "Reba Wrath", popularity: 92, alignment: "Heel", morale: 85 },
      { name: "Brock Boulder", popularity: 78, alignment: "Tweener", morale: 65 },
      { name: "Jimmy Ooze", popularity: 80, alignment: "Heel", morale: 68 },
      { name: "Jay Ooze", popularity: 77, alignment: "Heel", morale: 66 },
      { name: "Braydn Wyatt", popularity: 74, alignment: "Face", morale: 70 }
    ];
  }
})();

function getWorkerNames() {
  return GameState.roster.map(w => w.name);
}
