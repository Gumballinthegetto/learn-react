import { useEffect, useState } from "react";
import DiceList from "../components/DiceList";
import { Timer02Icon } from "../assets/Time";
import { v4 as uuidv4 } from 'uuid';

interface Dice {
  id: string,
  diceNumber: number,
  isFrozen: boolean,
}

export default function Game() {
  const [dices, setDices] = useState<Dice[]>(
    Array.from({ length: 10 }, () => ({
      id: uuidv4(),
      diceNumber: Math.floor(Math.random() * 6) + 1,
      isFrozen: false,
    }))
  );
  const [hasWon, sethasWon] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [rollCount, setRollCount] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [lastFrozenDice, setLastFrozenDice] = useState<{ id: string, diceNumber: number } | null>(null);

  useEffect(() => {
    let timer: number;

    if (hasStarted && !hasWon) {
      timer = setInterval(() => {
        setTime(prevState => prevState + 1);
      }, 1000);
    } 
    return () => clearInterval(timer);
  }, [hasStarted, hasWon]);

  useEffect(() => {
    const allFrozen = dices.every(dice => dice.isFrozen);
    const allSameNumber = dices.every(dice => dice.diceNumber === dices[0]?.diceNumber);

    if (allFrozen && allSameNumber) {
      sethasWon(true);
    }
  }, [dices]);

  function freezeDice(id: string) {
    if (!hasStarted || hasWon) return;

    setDices(prevDices => {
      const updatedDices = prevDices.map(dice =>
        dice.id === id ? { ...dice, isFrozen: !dice.isFrozen } : dice
      )

      return updatedDices;
    });
  }

  function rollDice() {
    if (!hasStarted || hasWon) return;

    setDices(prevDices => 
      prevDices.map(dice => 
        dice.isFrozen ? dice : { ...dice, diceNumber: Math.floor(Math.random() * 6) + 1 }
      )
    )
    setRollCount(prevState => prevState + 1);
  }

  function handleStartGame() {
    setHasStarted(true);
    setRollCount(0);
    setTime(0);
    sethasWon(false);
    setScore(0); 
    setLastFrozenDice(null); 
    setDices(Array.from({ length: 10 }, () => ({
      id: uuidv4(),
      diceNumber: Math.floor(Math.random() * 6) + 1,
      isFrozen: false,
    })));
  }

  function resetGame() {
    handleStartGame();
  }

  return (
    <div className="text-center w-[85%] max-w-lg bg-white border-2 border-gray-200 rounded-xl py-6 px-8">
      <h1>Tenzies</h1>
      <h2 className="py-4">Roll untill all dice are the same. Click each dice to freeze it at its current value between rolls.</h2> 
      <div className="flex flex-row items-center justify-between border mb-2">
        <div className="flex space-x-2">
          <Timer02Icon />
          <h2>{ time } s</h2>
        </div>
        <div>
          <h2>{ `${score}/10` }</h2>
        </div>
      </div>
      <DiceList
        dices={dices}
        onDiceSelected={freezeDice}
        isGameStarted={hasStarted} />
      { (hasStarted && !hasWon) && (
        <button 
          type="button"
          className={`${ !hasStarted && 'opacity-20' } font-[400] w-[100px] py-2 border-2 rounded-lg border-sailor-moon-purple`}
          onClick={rollDice}
          >
          Roll
        </button>
      )}
      { hasWon && (
        <button 
          type="button"
          className={`font-[400] w-[100px] py-2 border-2 rounded-lg border-sailor-moon-purple`}
          onClick={resetGame}
          >
          Reset
        </button>
      )} 
      { (!hasStarted && !hasWon) && (
        <button 
          type="button"
          className={`font-[400] w-[100px] py-2 border-2 rounded-lg border-sailor-moon-purple`}
          onClick={handleStartGame}
          >
          Start
        </button>
      )}
    </div>
  );
}