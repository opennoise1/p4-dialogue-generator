import { useEffect, SyntheticEvent } from 'react';

const CharacterMenu = ({ char, emote, boxFont, selection, setChar, setEmote, setEmoteMenus, setBox }) => {

  const switchChar = (e: SyntheticEvent<HTMLSelectElement>) => {
    setChar((e.target as HTMLSelectElement).value);
    setBox(`../images/boxes/db-${selection}-${boxFont}.png`);
    return;
  };

  useEffect(() => {
    fetch('/emotions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'char': `../images/portraits/${char}/` })
    })
    .then(data => data.json())
    .then(parsed => {
      setEmoteMenus(parsed);
      // If the newly selected character doesn't have the previously selected emotion...
      if (!parsed.includes(emote)) {
        // ...change the current emotion to the top-most emotion on the newly fetched menu
        setEmote(parsed[0]);
      }
    })
    .catch(err => console.log(err));
  }, [char]);

  return (
    <div className='menuDivs'>
      <div className='menuLabels'>Character</div>
      <select id='charMenu' className='menuOptions knife' value={char} name='characters' onChange={switchChar}>
        <option value='Chie'>Chie Satonaka</option>
        <option value='Eri'>Eri Minami</option>
        <option value='Igor'>Igor</option>
        <option value='Kanji'>Kanji Tatsumi</option>
        <option value='Morooka'>Kinshiro Morooka</option>
        <option value='Marie'>Marie</option>
        <option value='Nanako'>Nanako Dojima</option>
        <option value='Rise'>Rise Kujikawa</option>
        <option value='Dojima'>Ryotaro Dojima</option>
        <option value='Teddie'>Teddie</option>
        <option value='Yosuke'>Yosuke Hanamura</option>
        <option value='Yukiko'>Yukiko Amagi</option>


        <option value='Kaneshiro'>Junya Kaneshiro</option>
        <option value='Justine'>Justine</option>
        <option value='Okumura'>Kunikazu Okumura</option>
        <option value='Lavenza'>Lavenza</option>
        <option value='Makoto'>Makoto Niijima</option>
        <option value='Shido'>Masayoshi Shido</option>
        <option value='Mika'>Mika</option>
        <option value='Morgana'>Morgana</option>
        <option value='Hiruta'>Mr. Hiruta</option>
        <option value='Inui'>Mr. Inui</option>
        <option value='Ushimaru'>Mr. Ushimaru</option>
        <option value='Chouno'>Ms. Chouno</option>
        <option value='Usami'>Ms. Usami</option>
        <option value='Iwai'>Munehisa Iwai</option>
        <option value='Nakanohara'>Natsuhiko Nakanohara</option>
        <option value='Principal'>Principal Kobayakawa</option>
        <option value='Joker'>Protagonist</option>
        <option value='Rumi'>Rumi</option>
        <option value='Ryuji'>Ryuji Sakamoto</option>
        <option value='Kawakami'>Sadayo Kawakami</option>
        <option value='Sae'>Sae Niijima</option>
        <option value='Shibusawa'>Shibusawa</option>
        <option value='Shiho'>Shiho Suzui</option>
        <option value='Shinichi'>Shinichi Yoshizawa</option>
        <option value='Shinya'>Shinya Oda</option>
        <option value='Director'>SIU Director</option>
        <option value='Sojiro'>Sojiro Sakura</option>
        <option value='Sugimura'>Sugimura</option>
        <option value='Kamoshida'>Suguru Kamoshida</option>
        <option value='Sumire'>Sumire Yoshizawa</option>
        <option value='Takemi'>Tae Takemi</option>
        <option value='Maruki'>Takuto Maruki</option>
        <option value='Tanaka'>Tanaka</option>
        <option value='Yoshida'>Toranosuke Yoshida</option>
        <option value='Wakaba'>Wakaba Isshiki</option>
        <option value='Yusuke'>Yusuke Kitagawa</option>
        <option value='Mishima'>Yuuki Mishima</option>
      </select>
    </div>
  );
};

export default CharacterMenu;