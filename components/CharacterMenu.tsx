import { useEffect, SyntheticEvent } from 'react';

const CharacterMenu = ({ char, emote, setChar, setEmote, setEmoteMenus }) => {

  const switchChar = (e: SyntheticEvent<HTMLSelectElement>) => {
    setChar((e.target as HTMLSelectElement).value);
    // Do we set the name here?
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
    return;
  }, [char]);

  return (
    <div className='menuDivs'>
      <div className='menuLabels'>Character</div>
      <select id='charMenu' className='menuOptions cursor' value={char} name='characters' onChange={switchChar}>
        <option value='Ai'>Ai Ebihara</option>
        <option value='Ayane'>Ayane Matsunaga</option>
        <option value='Chie'>Chie Satonaka</option>
        <option value='Chihiro'>Chihiro Fushimi</option>
        <option value='Daidara'>Daidara</option>
        <option value='Daisuke'>Daisuke Nagase</option>
        <option value='Edogawa'>Mr. Edogawa</option>
        <option value='Eri'>Eri Minami</option>
        <option value='Fox'>Fox</option>
        <option value='Hanako'>Hanako Ohtani</option>
        <option value='Hisano'>Hisano Kuroda</option>
        <option value='Igor'>Igor</option>
        <option value='Izanami'>Izanami</option>
        <option value='Kanji'>Kanji Tatsumi</option>
        <option value='Morooka'>Kinshiro Morooka</option>
        <option value='Kou'>Kou Ichijou</option>
        <option value='Margaret'>Margaret</option>
        <option value='Marie'>Marie</option>
        <option value='Mayumi'>Mayumi Yamano</option>
        <option value='Mitsuo'>Mitsuo Kubo</option>
        <option value='Nanako'>Nanako Dojima</option>
        <option value='Naoto'>Naoto Shirogane</option>
        <option value='Naoki'>Naoki Konishi</option>
        <option value='Kashiwagi'>Noriko Kashiwagi</option>
        <option value='Rise'>Rise Kujikawa</option>
        <option value='Dojima'>Ryotaro Dojima</option>
        <option value='Saki'>Saki Konishi</option>
        <option value='Shiroku'>Shiroku</option>
        <option value='Shu'>Shu Nakajima</option>
        <option value='Tanaka'>Tanaka</option>
        <option value='Namatame'>Taro Namatame</option>
        <option value='Teddie'>Teddie</option>
        <option value='Adachi'>Tohru Adachi</option>
        <option value='Sayoko'>Uehara Sayoko</option>
        <option value='Yosuke'>Yosuke Hanamura</option>
        <option value='Yukiko'>Yukiko Amagi</option>
        <option value='Yumi'>Yumi Ozawa</option>
        <option value='Yu'>Yu Narukami</option>
      </select>
    </div>
  );
};

export default CharacterMenu;