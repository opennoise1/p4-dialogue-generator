const findPosition = (version, char, emote, costume) => {
  switch (char) {
    case 'Adachi': {
      return version === 'golden' ? [795, 138] : [870, 117];
    }
    case 'Ai': {
      if (costume === 'Summer Uniform') {
        return version === 'golden' ? [793, 143] : [870, 122];
      } 
      return version === 'golden' ? [777, 143] : [854, 122];
    }
    case 'Ayane': {
      if (costume === 'Spring Uniform') {
        return version === 'golden' ? [815, 157] : [890, 137];
      }
      if (costume === 'Summer Uniform') {
        return version === 'golden' ? [815, 159] : [890, 139];
      }
      return version === 'golden' ? [815, 158] : [890, 137];
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