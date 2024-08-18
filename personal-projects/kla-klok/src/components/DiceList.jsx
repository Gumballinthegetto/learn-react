import Dice from "./Dice";

export default function DiceList({ dices, gameStarted }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 justify-items-center py-2">
      {dices.map(dice => (
        <div key={dice.id} className="py-2">
          <Dice dice={dice.diceNumber} gameStarted={gameStarted} />
        </div>
      ))}
    </div>
  );
}