const simplePositions = {
  Chie: [750, 100],
};

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
    case 'Ann': {
      if (emote === 'Excited (Royal)' || emote === 'Shocked (Royal)') return [0, 35];
      if (emote.includes('Royal')) return [50, 35];
      return [50, 45];
    }
    case 'Futaba': {
      if (costume.includes('Mask')) return [0, 0];
      return [-35, 0];
    }
    case 'Haru': {
      if (costume.includes('Noir')) return [0, 0];
      return [35, 10];
    }
    case 'Kamoshida': {
      if (costume.includes('Shadow')) return [35, 10];
      return [-30, 15];
    }
    case 'Madarame': {
      if (costume.includes('Shadow')) return [-75, 10];
      return [55, 10];
    }
    case 'Maruki': {
      if (costume.includes('Metaverse')) return [80, 5];
      return [30, 35];
    }
    case 'Morgana': {
      if (costume === 'Human') return [35, 10];
      if (costume === '(Not a) Cat') return [-75, 65];
      if (emote.includes('Royal')) return [-30, 10];
      return [0, 25];
    }
    case 'Okumura': {
      if (costume.includes('Shadow')) return [0, 10];
      return [-35, 0];
    }
    case 'Ryuji': {
      if (emote.includes('Royal')) return [-45, 25];
      return [-70, 25];
    }
    case 'Sae': {
      if (costume.includes('Shadow')) return [10, 30];
      return [35, 10];
    }
    case 'Shiho': {
      if (costume.includes('Cognitive')) return [0, 0];
      return [55, 25];
    }
    default: return [0, 0];
  }
}

export { simplePositions, findSpecialPosition };