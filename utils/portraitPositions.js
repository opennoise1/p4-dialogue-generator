const findPosition = (version, char, emote, costume) => {
  switch (char) {
    case 'Adachi': {
      return version === 'golden' ? [795, 138] : [870, 117];
    }
    case 'Ai': {
      return version === 'golden' ? [793, 143] : [870, 122];
    }
    case 'Chie': {
      return version === 'golden' ? [795, 174] : [795, 135];
    }
    case 'Kanji': {
      if (costume === 'New Years') { return version === 'golden' ? [795, 145] : [860, 125] };

      return version === 'golden' ? [795, 135] : [870, 115];
    }
    case 'Naoto': {
      return version === 'golden' ? [795, 174] : [795, 135];
    }
    case 'Rise': {
      return version === 'golden' ? [795, 174] : [795, 135];
    }
    default: return version === 'golden' ? [795, 135] : [870, 115];
  }
}

export default findPosition;