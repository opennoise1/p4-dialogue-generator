const goldenPositions = {
  Chie: [795, 174],
};

const vanillaPositions = {

}

const findSpecialPosition = (char, emote, costume) => {
  switch (char) {
    case 'Akechi': {
      if (emote.includes('Royal')) return [-30, 10]
      if (costume.includes('Defeated')) return [30, 10];
      if (emote === 'Furious' || emote === 'Smirking' || 
        emote === 'Staring' || emote === 'Upset') return [85, 0];
      if (costume.includes('Cognitive')) return [85, 0];
      return [-30, 0];
    }
    default: return [0, 0];
  }
}

export { goldenPositions, vanillaPositions, findSpecialPosition };