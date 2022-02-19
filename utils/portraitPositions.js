const findPosition = (version, char, emote, costume) => {
  switch (char) {
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
    default: return version === 'golden' ? [795, 135] : [870, 115];
  }
}

export default findPosition;