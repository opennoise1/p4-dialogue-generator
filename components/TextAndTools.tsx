import { useEffect } from 'react';
import Menus from './Menus';

const TextAndTools = ({ char, setChar, emote, setEmote, costume, setCostume, setPortrait, name, setName,
  text, setText, version, setVersion, boxBack, setBack, boxFront, setFront }) => {

  const toolProps: any = {
    char,
    setChar,
    emote,
    setEmote,
    costume,
    setCostume,
    setPortrait,
    version,
    setVersion,
    boxBack,
    setBack,
    boxFront,
    setFront,
  }

  useEffect(() => {
    setBack(`../images/boxes/db-${version}-back.png`);
    setFront(`../images/boxes/db-${version}-front.png`);
  }, [version]);

  const downloadImage = (): void => {
    const downloadCanvas: HTMLCanvasElement = document.createElement('canvas');
    downloadCanvas.width = 1275;
    downloadCanvas.height = 500;

    const portraitCanvas: HTMLCanvasElement = 
      document.getElementById('portraitCanvas') as HTMLCanvasElement;
    const boxCanvas: HTMLCanvasElement = 
      document.getElementById('boxCanvas') as HTMLCanvasElement;
    const textCanvas: HTMLCanvasElement = 
      document.getElementById('textCanvas') as HTMLCanvasElement;
    
    const dCtx: CanvasRenderingContext2D = downloadCanvas.getContext('2d') as CanvasRenderingContext2D;
    dCtx.drawImage(portraitCanvas, 0, 0, 1275, 500);
    dCtx.drawImage(boxCanvas, 0, 0, 1275, 500);
    dCtx.drawImage(textCanvas, 0, 0, 1275, 500);
    const link: HTMLAnchorElement = document.createElement('a');
    link.download = `${char}-${text}.png`;
    link.href = downloadCanvas.toDataURL('image/png');
    link.click();
    return;
  };

  return (
    <div id='textAndTools'>
      <div id='textAndDownload'>
        <div id='enterName'>
          <div id='nameHeader'>Name</div>
          <textarea
            id='nameField'
            rows={1}
            cols={20}
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div id='enterDialogue'>
          <div id='dialogueHeader'>Dialogue</div>
          <textarea 
            id='textField' 
            placeholder='Attention Junes shoppers: Character portraits contain spoilers!'
            rows={3}
            cols={45}
            defaultValue={text}
            onChange={(e) => setText(e.target.value)} 
          />
        </div>
        <div 
          id='download'
          className='knife'
          onClick={downloadImage}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 24l-8-9h6v-15h4v15h6z"/>
          </svg>
          <div>Download</div>    
        </div>
      </div>
      <div id='menusAndBoxes'>
        <Menus {...toolProps} />
        <div id='versionDiv'>
          <div id='versionHeader'>Box Select</div>
          <div id='versionChoices'>
            <div 
              id='vanillaVersion' 
              className='selections skipDivs' 
              onClick={() => { setVersion('vanilla'); }}
            >
              Persona 4
            </div>
            <div 
              id='goldenVersion' 
              className='selections skipDivs' 
              onClick={() => { setVersion('golden'); }}
            >
              Persona 4 Golden
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default TextAndTools;