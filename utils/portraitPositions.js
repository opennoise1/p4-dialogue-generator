const findPosition = (version, char, emote, costume) => {
  switch (char) {
    case 'Adachi': return version === 'golden' ? [795, 138] : [870, 117];
    case 'Ai': {
      if (costume === 'Summer Uniform') {
        return version === 'golden' ? [793, 143] : [870, 122];
      } 
      return version === 'golden' ? [777, 143] : [854, 122];
    }
    case 'Ayane': {
      if (costume === 'Spring Uniform') {
        return version === 'golden' ? [815, 159] : [890, 139];
      }
      if (costume === 'Summer Uniform') {
        return version === 'golden' ? [815, 159] : [890, 139];
      }
      return version === 'golden' ? [815, 160] : [890, 139];
    }
    case 'Chie': {
      if (emote === 'Miscellaneous') return version === 'golden' ? [802, 173] : [822, 151]; 
      switch (costume) {
        case 'Epilogue': return version === 'golden' ? [793, 171] : [813, 150];
        case 'New Years': return version === 'golden' ? [821, 171] : [841, 150];
        case 'Spring Casual': return version === 'golden' ? [802, 172] : [822, 150];
        case 'Spring Uniform': return version === 'golden' ? [802, 172] : [822, 150];
        case 'Spring Uniform (Glasses)': return version === 'golden' ? [802, 172] : [822, 150];
        case 'Ski Trip': return version === 'golden' ? [774, 96] : [794, 75];
        case 'Summer Casual': return version === 'golden' ? [807, 172] : [827, 150];
        case 'Summer Uniform': return version === 'golden' ? [807, 172] : [827, 150];
        case 'Summer Uniform (Glasses)': return version === 'golden' ? [807, 172] : [827, 150];
        case 'Swimsuit': return version === 'golden' ? [807, 172] : [827, 150];
        case 'Winter Casual': return version === 'golden' ? [787, 172] : [807, 150];
        case 'Winter Uniform': return version === 'golden' ? [795, 171] : [815, 151]; 
        case 'Yukata': return version === 'golden' ? [803, 172] : [823, 153];
        default: return version === 'golden' ? [802, 173] : [822, 151];
      }
    }
    case 'Chihiro': return version === 'golden' ? [745, 171] : [800, 150];
    case 'Daisuke': {
      if (costume === 'Soccer Practice') {
        return version === 'golden' ? [780, 167] : [849, 147];
      }
      return version === 'golden' ? [775, 167] : [844, 147];
    }
    case 'Mr. Edogawa': return version === 'golden' ? [735, 182] : [850, 161];
    case 'Eri': return version === 'golden' ? [785, 150] : [850, 130];
    case 'Fox': return version === 'golden' ? [770, 163] : [865, 142];
    case 'Hanako': return version === 'golden' ? [740, 225] : [825, 205];
    case 'Hisano': {
      if (emote === 'Sad') {
        return version === 'golden' ? [801, 186] : [881, 166];
      } 
      return version === 'golden' ? [800, 185] : [880, 165];
    }
    case 'Kanji': {
      if (costume === 'New Years') { 
        return version === 'golden' ? [795, 145] : [860, 125] 
      }
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