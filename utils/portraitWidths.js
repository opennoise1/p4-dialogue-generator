const findWidth = (char, emote, costume) => {
  switch (char) {
    case 'Ai': {
      if (costume !== 'Summer Uniform') return 425;
    }
    default: return 300;
  }
}

export default findWidth;