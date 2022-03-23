const findWidth = (char, emote, costume) => {
  switch (char) {
    case 'Ai': {
      if (costume !== 'Summer Uniform') return 312;
      return 300;
    }
    case 'Ayane': {
      if (costume === 'Spring Uniform') return 223;
      if (costume === 'Summer Uniform') return 230;
      return 233;
    }
    case 'Chie': {
      switch (costume) {
        case 'Epilogue': return 275;
        case 'New Years': return 255;
        case 'Ski Trip': return 336;
        case 'Spring Casual': return 290;
        case 'Spring Uniform': return 290;
        case 'Spring Uniform (Glasses)': return 290;
        case 'Summer Casual': return 280;
        case 'Summer Uniform': return 280;
        case 'Summer Uniform (Glasses)': return 280;
        case 'Swimsuit': return 280;
        case 'Winter Casual': return 312;
        case 'Winter Uniform': return 300;
        case 'Yukata': return 278;
        default: return 290;
      }
    }
    case 'Mr. Edogawa': return 335;
    case 'Eri': return 260;
    case 'Fox': return 320;
    case 'Hanako': {
      if (costume === 'Summer Uniform') return 339;
      return 330;
    }
    case 'Hisano': return 320;
    case 'Igor': return 320;
    default: return 300;
  }
}

export default findWidth;