import { DiceFaces01Icon, DiceFaces02Icon, DiceFaces03Icon, DiceFaces04Icon, DiceFaces05Icon, DiceFaces06Icon } from "../assets/Dices";

interface DiceProps {
  diceNumber: number,
};

export default function Dice({ diceNumber }: DiceProps) {
  switch (diceNumber) {
    case 1:
      return <DiceFaces01Icon />;
    case 2:
      return <DiceFaces02Icon />
    case 3:
      return <DiceFaces03Icon />
    case 4:
      return <DiceFaces04Icon />
    case 5:
      return <DiceFaces05Icon />
    case 6:
      return <DiceFaces06Icon />
    default:
      return <div>{diceNumber}</div>
  }
}