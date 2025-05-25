
const SaveSystem = {
  save: () => {
    if (!GameState.currentSaveName) return;
    const data = JSON.stringify(GameState);
    localStorage.setItem(`PWM25_${GameState.currentSaveName}`, data);
  },

  load: (saveName) => {
    const data = localStorage.getItem(`PWM25_${saveName}`);
    if (data) {
      Object.assign(GameState, JSON.parse(data));
      GameState.currentSaveName = saveName;
    }
  },

  getSaves: () => {
    return Object.keys(localStorage)
      .filter(key => key.startsWith("PWM25_"))
      .map(key => key.replace("PWM25_", ""));
  },

  deleteSave: (saveName) => {
    localStorage.removeItem(`PWM25_${saveName}`);
  }
};
