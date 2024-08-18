import Dice from "./Dice";

interface DiceListProps {
  dices: { id: string, diceNumber: number, isFrozen: boolean }[],
  onDiceSelected: (id: string) => void,
  isGameStarted: boolean,
}

export default function DiceList({ dices, onDiceSelected, isGameStarted }: DiceListProps) {

  function handleOnDiceSelected(id: string) {
    if (isGameStarted) {
      onDiceSelected(id);
    }
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 justify-items-center py-5 border-2 sm:px-4 border-gray-100 rounded-lg mb-5">
      {dices.map(dice => {
        return (
          <button
            id={dice.id}
            className={`${ !dice.isFrozen ? 'bg-transparent' : 'bg-teal-green' } rounded-lg p-1 m-1 ${ !isGameStarted && 'cursor-not-allowed opacity-50' }`}
            key={dice.id}
            onClick={() => handleOnDiceSelected(dice.id)}>
            <Dice diceNumber={dice.diceNumber} />
          </button>
        );
      })}
    </div>
  );
}