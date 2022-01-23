import React, { useEffect, useRef } from 'react';
import { simplePositions, findSpecialPosition } from '../utils/portraitPositions';

const ImageCanvas = ({ portrait, name, text, char, emote, costume, boxBack, boxFront }) => {
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

  useEffect(() => {
    // Initialize text canvas and clear current text
    tCtx = textCanvas.current.getContext('2d');
    tCtx.clearRect(0, 0, 1275, 900);
    tCtx.font = `22pt SkipStd-B`;
    
    // Draw or redraw name
    tCtx.fillStyle = '#4B2A14';
    tCtx.fillText(name, 65, 700);

    // Draw or redraw text
    tCtx.fillStyle = '#FFFFFF';
    const rows = text.split('\n');
    if (rows[1] === undefined) rows[1] = '';
    if (rows[2] === undefined) rows[2] = '';
    if (rows[0] && rows[1] && !rows[2]) {
      // Centers text in two-line dialogue boxes
      tCtx.fillText(rows[0], 500, 387);
      tCtx.fillText(rows[1], 500, 417);
      return;
    }
    tCtx.fillText(rows[0], 500, 373);
    tCtx.fillText(rows[1], 500, 403);
    tCtx.fillText(rows[2], 500, 433);
    return;
  }, [text, name]);

  const drawPortrait = (charImage: CanvasImageSource, portraitXY: number[], w: number, h: number) => {
    // Initialize portrait canvas and clear current portrait
    pCtx = portraitCanvas.current.getContext('2d');
    pCtx.clearRect(0, 0, 1275, 900);

    // Look up draw position for requested portrait and draw new portrait
    let x;
    let y;
    if (!simplePositions[char]) {
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
    const width: number = boxImage.width as number;
    const height: number = boxImage.height as number;
    bCtx.clearRect(0, 0, 1275, 900);
    bCtx.drawImage(boxImage, 53, 644, 1200, 256);
    return;
  };

  const drawBoxFront = (boxImage: CanvasImageSource) => {
    // Initialize box canvas, clear current box and draw new box
    bCtx = boxFrontCanvas.current.getContext('2d');
    const width: number = boxImage.width as number;
    const height: number = boxImage.height as number;
    bCtx.clearRect(0, 0, 1275, 900);
    bCtx.drawImage(boxImage, 32.5, 721, 1200, 169);
    return;
  };

  return (
    <main id='canvasDiv'>
      <canvas
        ref={boxBackCanvas}
        id='boxBackCanvas'
        width='1275'
        height='900'
      >
        Sorry! This generator requires a browser that supports HTML5!
      </canvas>
      <canvas 
        ref={portraitCanvas} 
        id='portraitCanvas'
        width='1275' 
        height='900' 
      >
        Sorry! This generator requires a browser that supports HTML5!
      </canvas>
      <canvas 
        ref={boxFrontCanvas} 
        id='boxFrontCanvas'
        width='1275' 
        height='900' 
      >
        Sorry! This generator requires a browser that supports HTML5!
      </canvas>
      <canvas 
        ref={textCanvas} 
        id='textCanvas'
        width='1275' 
        height='900' 
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
        onLoad={() => drawPortrait(character.current, simplePositions[char], 400, 449)}
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