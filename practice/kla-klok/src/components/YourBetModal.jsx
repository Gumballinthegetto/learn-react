import { AnimatePresence, delay, motion } from 'framer-motion';
import { Cancel02Icon } from "../assets/Asset";
import Dice from "./Dice";

export default function YourBetModal({ dices, yourBetBtnClicked, onCloseBtnClicked }) {
  const modalVariants = {
    initial: {
      height: 0,
    },
    drop: {
      height: "auto",
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      }
    },
  }

  const diceVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        ease: 'easeOut'
      }
    },
  }

  // caculate the total bet amount
  const totalBetAmount = dices.reduce((total, dice) => total + dice.betAmount, 0);

  return (
    <AnimatePresence mode='sync'>
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[92%] max-w-[400px] border border-t-0 border-swarmy-green rounded-b-xl px-6 pt-6 pb-4 bg-white z-[2] shadow-lg"
        initial="initial"
        animate="drop"
        exit="initial"
        variants={modalVariants}>
        <h1 className="text-lg underline pb-4 font-[400]">Your Bet</h1>
        <button onClick={onCloseBtnClicked} className="absolute right-4 top-4 text-gray-600 hover:text-red-600">
          <Cancel02Icon width={22} strokeWidth={2} />
        </button>
        <motion.div 
          className="grid grid-cols-2 gap-4 justify-items-center border rounded-xl border-swarmy-green py-4 bg-gray-50"
          variants={modalVariants}>
          {dices.map((dice, index) => (
            <motion.div 
              key={index} 
              className="flex items-center space-x-2 py-2" 
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={diceVariant}>
              <Dice dice={dice.diceNumber} yourBetBtnClicked={yourBetBtnClicked} />
              <p className="font-medium text-swarmy-green">x ${dice.betAmount}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="flex items-center justify-between py-4 text-sm font-medium text-gray-700">
        <span>Total Bet</span>
          <h2 className='no-underline text-[1.1rem]'>$ {totalBetAmount}</h2>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}