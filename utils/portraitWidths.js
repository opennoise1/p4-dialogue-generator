const findWidth = (char, emote, costume) => {
  switch (char) {
    case 'Ai': {
      if (costume !== 'Summer Uniform') return 312;
    }
    case 'Ayane': {
      if (costume === 'Spring Uniform') return 225;
      if (costume === 'Summer Uniform') return 230;
      return 235;
    }
    default: return 300;
  }
}

export default findWidth;