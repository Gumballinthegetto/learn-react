export default function Dice({ dice, gameStarted, yourBetBtnClicked }) {
  const gameCharacters = {
    1: 'Kdam',
    2: 'Kla',
    3: 'Klok',
    4: 'Morn',
    5: 'Pkorng',
    6: 'Trey',
  }

  switch (dice) {
    case 1:
      return (
        <div className="w-fit">
          {yourBetBtnClicked ? (
            <img className="max-w-full h-auto w-[60px]" src="/images/kdam.png" alt="Kdam image" />
          ) : (
            <div className="flex flex-col space-y-2">
              <button className={`${ gameStarted ? 'hover-dice' : 'cursor-not-allowed' }`} disabled={!gameStarted}>
                <img className="max-w-full h-auto w-[100px]" src="/images/kdam.png" alt="Kdam image" />
              </button>
              <span>{ gameCharacters[1] }</span>
            </div>
          )}
        </div>
      );
    case 2: 
      return (
        <div className="w-fit">
          {yourBetBtnClicked ? (
            <img className="max-w-full h-auto w-[60px]" src="/images/kla.png" alt="Kla image" />
          ) : (
            <div className="flex flex-col space-y-2">
              <button className={`${ gameStarted ? 'hover-dice' : 'cursor-not-allowed' }`} disabled={!gameStarted}>
                <img className="max-w-full h-auto w-[100px]" src="/images/kla.png" alt="Kla image" />
              </button>
              <span>{ gameCharacters[2] }</span>
            </div>
          )}
        </div>
      );
    case 3: 
      return (
        <div className="w-fit">
          {yourBetBtnClicked ? (
            <img className="max-w-full h-auto w-[60px]" src="/images/klok.png" alt="Klok image" />
          ) : (
            <div className="flex flex-col space-y-2">
              <button className={`${ gameStarted ? 'hover-dice' : 'cursor-not-allowed' }`} disabled={!gameStarted}>
                <img className="max-w-full h-auto w-[100px]" src="/images/klok.png" alt="Klok image" />
              </button>
              <span>{ gameCharacters[3] }</span>
            </div>
          )}
        </div>
      );
    case 4: 
      return (
        <div className="w-fit">
          {yourBetBtnClicked ? (
            <img className="max-w-full h-auto w-[60px]" src="/images/morn.png" alt="Morn image" />
          ) : (
            <div className="flex flex-col space-y-2">
              <button className={`${ gameStarted ? 'hover-dice' : 'cursor-not-allowed' }`} disabled={!gameStarted}>
                <img className="max-w-full h-auto w-[100px]" src="/images/morn.png" alt="Morn image" />
              </button>
              <span>{ gameCharacters[4] }</span>
            </div>
          )}
        </div>
      );
    case 5: 
      return (
        <div className="w-fit">
          {yourBetBtnClicked ? (
            <img className="max-w-full h-auto w-[60px]" src="/images/pkorng.png" alt="Pkorng image" />
          ) : (
            <div className="flex flex-col space-y-2">
              <button className={`${ gameStarted ? 'hover-dice' : 'cursor-not-allowed' }`} disabled={!gameStarted}>
                <img className="max-w-full h-auto w-[100px]" src="/images/pkorng.png" alt="Pkorng image" />
              </button>
              <span>{ gameCharacters[5] }</span>
            </div>
          )}
        </div>
      ); 
    case 6:
      return (
        <div className="w-fit">
          {yourBetBtnClicked ? (
            <img className="max-w-full h-auto w-[60px]" src="/images/trey.png" alt="Trey image" />
          ) : (
            <div className="flex flex-col space-y-2">
              <button className={`${ gameStarted ? 'hover-dice' : 'cursor-not-allowed' }`} disabled={!gameStarted}>
                <img className="max-w-full h-auto w-[100px]" src="/images/trey.png" alt="Trey image" />
              </button>
              <span>{ gameCharacters[6] }</span>
            </div>
          )}
        </div>
      );
    default:
      return <div>{dice}</div>
  }
}