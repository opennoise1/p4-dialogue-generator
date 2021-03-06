const Header = () => {

  return (
    <header id='header'>
      <div id='title'>
        <img alt='Persona 4 logo' id='p4logo' src='../images/persona4logo.png' />
        <div className='generatorTitles'>
          <div id='titleKRSM' className='KRSMDivs'>DIALOGUE GENERATOR</div>
          <div id='titleSlump' className='slumpDivs' lang='ja'>対話ジェネレータ</div>
        </div>
        <div id='mobileMessage' className='hidden'>
            <div>
              Because of the width of the dialogue boxes, this website isn't meant to be viewed vertically on mobile devices. 
            </div>
            <br></br>
            <div>
              Please turn your phone on its side, or use another screen at least 550px in width. Thanks!
            </div>
          </div>
      </div>
      <div id='subhead'>
        <p id='credits'>
          <a href='https://github.com/opennoise1/p4-dialogue-generator' target='_blank'>Code</a> by <a href='https://twitter.com/opennoise' target='_blank'>@opennoise</a>.
          <br></br>
          All artwork by <a href='https://twitter.com/Atlus_West' target='_blank'>Atlus</a>, displayed here under fair use.
        </p>
      </div>
    </header>
  );
};

export default Header;