import React, { useEffect, useRef, useState } from 'react';

const ImageCanvas = ({ portrait, text, font }) => {
  const [isBoxLoaded, setBoxLoaded] = useState<boolean>(false);
  const portraitCanvas: React.MutableRefObject<any> = useRef(null);
  const textCanvas: React.MutableRefObject<any> = useRef(null);
  const character: React.MutableRefObject<any> = useRef(null);
  const box: React.MutableRefObject<any> = useRef(null);
  let pCtx: CanvasRenderingContext2D;
  let tCtx: CanvasRenderingContext2D;

  // preps the canvases upon each render by creating a 2D "drawing context" for it
  useEffect(() => {
    pCtx = portraitCanvas.current.getContext('2d');
    tCtx = textCanvas.current.getContext('2d');
    tCtx.fillStyle = '#FFFFFF';
    return tCtx.font = font;
  });

  useEffect(() => {
    tCtx.clearRect(0, 0, 1300, 500);
    const rows = text.split('\n');
    if (!rows[1]) rows[1] = '';
    if (!rows[2]) rows[2] = '';
    tCtx.fillText(rows[0], 475, 375);
    tCtx.fillText(rows[1], 475, 400);
    return tCtx.fillText(rows[2], 475, 425);
  }, [text]);

  const draw = (image, x, y, w, h) => {
    // Hacky way of preserving aspect ratios -- refactor this so it's more dynamic!
    const boxHeight: number = 250;
    const boxRatio: number = 800 / 226;
    const boxWidth: number = boxHeight * boxRatio;
    pCtx.clearRect(x, y, w, h);
    pCtx.drawImage(image, x, y, w, h);
    return isBoxLoaded ? pCtx.drawImage(box.current, 320, 250, boxWidth, boxHeight) : null;
  };

  return (
    <div id='canvasDiv'>
      <canvas 
        ref={portraitCanvas} 
        id='portraitCanvas'
        width='1300' 
        height='500' 
      >
        Sorry! This generator requires a browser that supports HTML5!
      </canvas>
      <canvas 
        ref={textCanvas} 
        id='textCanvas'
        width='1300' 
        height='500' 
      >
        Sorry! This generator requires a browser that supports HTML5!
      </canvas>
      {/* NOTE: We're rendering portrait and box img tags so they can be referenced for the canvas.
      They will be hidden via the stylesheet */}
      <img 
        ref={character} 
        id='portrait' 
        onLoad={() => draw(character.current, 0, 0, 500, 500)} 
        src={portrait} 
        className='hidden' 
      />
      <img ref={box} 
        id='box'
        src={'../images/dialoguebox.png'} 
        // Ensure box is loaded so we know it can be drawn on top of portrait
        onLoad={(() => setBoxLoaded(true))}
        className='hidden' 
      />
    </div>
  )
}

export default ImageCanvas;