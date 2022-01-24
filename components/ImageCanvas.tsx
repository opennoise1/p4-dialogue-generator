import React, { useEffect, useRef } from 'react';
import { goldenPositions, vanillaPositions, findSpecialPosition } from '../utils/portraitPositions';

const ImageCanvas = ({ portrait, name, text, char, emote, costume, boxBack, boxFront, version }) => {
  const portraitCanvas: React.MutableRefObject<any> = useRef(null);
  const boxBackCanvas: React.MutableRefObject<any> = useRef(null);
  const boxFrontCanvas: React.MutableRefObject<any> = useRef(null);
  const textCanvas: React.MutableRefObject<any> = useRef(null);
  const character: React.MutableRefObject<any> = useRef(null);
  const dialogueBoxBack: React.MutableRefObject<any> = useRef(null);
  const dialogueBoxFront: React.MutableRefObject<any> = useRef(null);
  let pCtx: CanvasRenderingContext2D;
  let bCtx: CanvasRenderingContext2D;
  let tCtx: CanvasRenderingContext2D;

  const boxPositions = {
    goldenBack: [63, 544, 1200, 256],
    goldenFront: [42.5, 621, 1200, 171],
    vanillaBack: [63, 524, 1225, 274],
    vanillaFront: [75, 600, 1200, 175],
  };

  useEffect(() => {
    // Initialize text canvas and clear current text
    tCtx = textCanvas.current.getContext('2d');
    tCtx.clearRect(0, 0, 1275, 800);
    tCtx.font = `28pt SkipStd-B`;
    
    // Draw or redraw name
    tCtx.fillStyle = '#4B2A14';
    tCtx.fillText(name, 82, 615);

    // Draw or redraw text
    tCtx.fillStyle = '#FFFFFF';
    const rows = text.split('\n');
    if (rows[1] === undefined) rows[1] = '';
    if (rows[2] === undefined) rows[2] = '';

    tCtx.fillText(rows[0], 95, 670);
    tCtx.fillText(rows[1], 95, 715);
    tCtx.fillText(rows[2], 95, 760);
    return;
  }, [text, name]);

  const drawPortrait = (charImage: CanvasImageSource, portraitXY: number[], w: number, h: number) => {
    // Initialize portrait canvas and clear current portrait
    pCtx = portraitCanvas.current.getContext('2d');
    pCtx.clearRect(0, 0, 1275, 800);

    // Look up draw position for requested portrait and draw new portrait
    let x: number;
    let y: number;
    if (!goldenPositions[char]) {
      const specialPosition = findSpecialPosition(char, emote, costume);
      x = specialPosition[0];
      y = specialPosition[1];
    } else {
      x = portraitXY[0];
      y = portraitXY[1];
    }
    pCtx.drawImage(charImage, x, y, w, h);
    return;
  };

  const drawBoxBack = (boxImage: CanvasImageSource) => {
    // Initialize box canvas, clear current box and draw new box
    bCtx = boxBackCanvas.current.getContext('2d');
    bCtx.clearRect(0, 0, 1275, 800);
    
    if (version === 'golden') {
      bCtx.drawImage(boxImage, boxPositions.goldenBack[0], boxPositions.goldenBack[1], boxPositions.goldenBack[2], boxPositions.goldenBack[3]);
    } else {
      bCtx.drawImage(boxImage, boxPositions.vanillaBack[0], boxPositions.vanillaBack[1], boxPositions.vanillaBack[2], boxPositions.vanillaBack[3]);
    }
    
    return;
  };

  const drawBoxFront = (boxImage: CanvasImageSource) => {
    // Initialize box canvas, clear current box and draw new box
    bCtx = boxFrontCanvas.current.getContext('2d');
    bCtx.clearRect(0, 0, 1275, 800);

    if (version === 'golden') {
      bCtx.drawImage(boxImage, boxPositions.goldenFront[0], boxPositions.goldenFront[1], boxPositions.goldenFront[2], boxPositions.goldenFront[3]);
    } else {
      bCtx.drawImage(boxImage, boxPositions.vanillaFront[0], boxPositions.vanillaFront[1], boxPositions.vanillaFront[2], boxPositions.vanillaFront[3]);
    }
    return;
  };

  return (
    <main id='canvasDiv'>
      <canvas
        ref={boxBackCanvas}
        id='boxBackCanvas'
        width='1275'
        height='800'
      >
        Sorry! This generator requires a browser that supports HTML5!
      </canvas>
      <canvas 
        ref={portraitCanvas} 
        id='portraitCanvas'
        width='1275' 
        height='800' 
      >
        Sorry! This generator requires a browser that supports HTML5!
      </canvas>
      <canvas 
        ref={boxFrontCanvas} 
        id='boxFrontCanvas'
        width='1275' 
        height='800' 
      >
        Sorry! This generator requires a browser that supports HTML5!
      </canvas>
      <canvas 
        ref={textCanvas} 
        id='textCanvas'
        width='1275' 
        height='800' 
      >
        Sorry! This generator requires a browser that supports HTML5!
      </canvas>
      {/* NOTE: We're rendering portrait and box img tags so they can be referenced for the canvas.
      They will be hidden via the stylesheet */}
      <img
        alt='Dialogue box back'
        ref={dialogueBoxBack}
        id='boxBack'
        className='hidden'
        src={boxBack}
        crossOrigin="anonymous"
        onLoad={() => drawBoxBack(dialogueBoxBack.current)}
      />
      <img
        alt='Potrait'
        ref={character}
        id='portrait'
        className='hidden'
        src={portrait}
        crossOrigin="anonymous"
        onLoad={() => drawPortrait(character.current, goldenPositions[char], 400, 449)}
      />
      <img
        alt='Dialogue box front'
        ref={dialogueBoxFront}
        id='boxFront'
        className='hidden'
        src={boxFront}
        crossOrigin="anonymous"
        onLoad={() => drawBoxFront(dialogueBoxFront.current)}
      />
    </main>
  );
};

export default ImageCanvas;