import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import DiceList from "./components/DiceList";
import { motion } from "framer-motion";
import { IdeaIcon, Idea01Icon, Lamp02Icon, Logout04Icon } from "./assets/Asset";
import InstructionModal from "./components/InstructionModal";
import YourBetModal from "./components/YourBetModal";
import GameAssets from "./components/GameAssets";

export default function Game() {
  // game states
  const [dices, setDices] = useState(Array.from({ length: 6 }, (_, index) => ({
    id: uuidv4(),
    diceNumber: index + 1,
    betAmount: 0,
  })));
  const [yourDices, setYourDices] = useState([{
    id: '',
    diceNumber: null,
  }]);
  const [time, setTime] = useState(0);
  const [houseBalance, setHouseBalance] = useState(0);
  const [yourBalance, setYourBalance] = useState(100);
  const [hasWon, setHasWon] = useState(false);
  const [hasBet, setHasBet] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [instructionBtnClicked, setInstructionBtnClicked] = useState(false);
  const [yourBetBtnClicked, setYourBetBtnClicked] = useState(false);
  const [closeBtnClicked, setCloseBtnClicked] = useState(false);

  function handleCloseYourBetModal() {
    setYourBetBtnClicked(false);
  }

  function handleYourBetBtnClicked() {
    setYourBetBtnClicked(true);
    setCloseBtnClicked(false);
  }

  // function to when the player clicks the start button
  function startGame() {
    setIsGameStarted(prevState => !prevState);
  }
  
  return (
    // game interface
    <motion.div className="relative border-2 px-4 pb-6 text-center text-black border-swarmy-green bg-white w-[90%] max-w-lg text-[0.8rem] z-[1]">
      {/* toggle button to show game instruction */}
      { !isGameStarted && (
        <motion.button className="absolute top-2 left-4 flex items-center space-x-1" onClick={ () => setInstructionBtnClicked(prevState => !prevState) }>
          { !instructionBtnClicked ? (
            <IdeaIcon />
          ) : (
            <Idea01Icon />
          )}
          <span className="text-[0.7rem] underline">{ !instructionBtnClicked ? "Click me" : "Go Back" }</span>
        </motion.button>
      )}
      {/* show game instruciton when button is clicked */}
      { instructionBtnClicked && (
        <InstructionModal onBtnClicked={setInstructionBtnClicked} />
      )}
      {/* show your bet button only when the game started and you hasn't won yet  */}
      { (isGameStarted && !hasWon && !yourBetBtnClicked && !closeBtnClicked) && (
        <motion.button className="absolute top-0 left-4" onClick={handleYourBetBtnClicked}>
          <Lamp02Icon />
        </motion.button>
      )}
      {/* button to exit game early */}
      {(isGameStarted) && (
        <motion.button className="absolute top-2 right-6 flex items-center space-x-2" onClick={() => setIsGameStarted(false)}>
          <Logout04Icon width={15} strokeWidth={2.5}/>
          <span className="text-[0.7rem] underline">Exit</span>
        </motion.button>
      )}
      {/* show your bet modal when the your bet button got clicked */}
      { (yourBetBtnClicked && !closeBtnClicked) && (
        <YourBetModal
          dices={dices}
          yourBetBtnClicked={yourBetBtnClicked}
          onCloseBtnClicked={handleCloseYourBetModal} />
      )}
      {/* hide game interface when instruction button is clicked */}
      <motion.div className={ instructionBtnClicked ? "hidden" : "visible"}>
        <h1 className="pb-2 pt-6">Kla Klok</h1>
        <p>Bet your luck with your desired character and gain a fortune!</p>
        <p className="py-2"><span className="font-[500] underline">Rule:</span> Start with $100. Bet on up to 6 dice, with a minimum bet of $10 per dice. Roll 3 dice. If any rolled dice match the ones you bet on, you win that amount. If none match, you lose your bet.</p>
        {/* only show game asset when the game is started */}
        { isGameStarted && (
          <GameAssets
            time={time}
            houseBalance={houseBalance}
            yourBalance={yourBalance} />
        )}
        {/* display dice list component */}
        <DiceList dices={dices} gameStarted={isGameStarted} yourBetBtnClicked={yourBetBtnClicked} />
        {/* show start button when the game hasn't started yet */}
        { (!isGameStarted && !hasWon) && (
          <motion.button 
            type="button" 
            className="w-[120px] rounded-md shadow-sm bg-swarmy-green text-white text-[0.9rem] py-2 game-btn"
            onClick={startGame}
            transition={{ duration: 0.25, ease: 'backInOut' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            Start
          </motion.button> 
        )}
        {/* roll the dice button only work when you bet on any dices */}
        { (isGameStarted && !hasWon) && (
          <motion.button type="button" disabled={!hasBet} className={`${ !hasBet && 'opacity-30' } w-[120px] rounded-md shadow-sm bg-swarmy-green text-white text-[0.9rem] py-2 game-btn`}>
            Roll the dice!
          </motion.button> 
        )}
        {/* you can play again when you win a total of $1000 */}
        { hasWon && (
          <motion.button type="button" className="w-[120px] rounded-md shadow-sm bg-swarmy-green text-white text-[0.9rem] py-2 game-btn">
            Play Again
          </motion.button> 
        )}
      </motion.div>
    </motion.div>
  );
}