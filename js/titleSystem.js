
// Simple Title Manager
const TitleSystem = {
  init: () => {
    if (GameState.titles.length === 0) {
      GameState.titles = [
        {
          name: "World Heavyweight Championship",
          champion: "Ronan Reignz",
          history: ["Ronan Reignz"]
        },
        {
          name: "Women's Championship",
          champion: "Reba Wrath",
          history: ["Reba Wrath"]
        }
      ];
    }
  },

  assignChampion: (titleName, newChamp) => {
    const title = GameState.titles.find(t => t.name === titleName);
    if (title) {
      title.champion = newChamp;
      title.history.push(newChamp);
    }
  },

  getTitleInfo: () => {
    return GameState.titles.map(t => 
      `${t.name}: ${t.champion} (Past: ${t.history.join(', ')})`
    ).join('\n');
  }
};

// Run init once
TitleSystem.init();
