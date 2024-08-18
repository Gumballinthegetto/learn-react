export default function InstructionModal({ onBtnClicked }) {
  return (
    <div className="bg-white px-4 pt-6">
      <div className='flex items-center justify-center pt-4 space-x-2'>
        <span className='text-[1rem]'>Welcome to</span>
        <h1 className="text-center">Kla Klok!</h1>
      </div>
      <p className="py-4">Test your luck in "Kla Klok", a high-stakes dice game where every roll could either double your money or leave you with nothing. Bet wisely and see if the dice favor you!</p>
      <h4 className="underline font-[500] text-[1rem] text-start pb-3">Game Instruction:</h4>
      <div className="border-2 border-swarmy-green text-start px-4 py-4">
        <ul>
          <li>
            <h3>1. Starting Balance</h3>
            <p>You begin the game with $100. This is your initial bankroll to place bets and try your luck.</p>
          </li>
          <li>
            <h3>2. Placing Your Bets</h3>
            <p className='pb-2'>Choose how many of the 6 available dice you want to bet on. You can place bets on as many dice as you like.</p>
            <p>Each bet requires a minimum of $10. You can bet more if you're feeling confident, but remember, this amount will be deducted from your balance.</p>
          </li>
          <li>
            <h3>3. Rolling the Dice</h3>
            <p>After placing your bets, it's time to roll the dice. You will roll 3 dice, and the results will determine your winnings.</p>
          </li>
          <li>
            <h3>4. Winning Conditions</h3>
            <p className='pb-2'>If the outcome of the 3 dice matches any of the dice you bet on, you win an amount equal to your bet for each matching dice.</p>
            <p>For example, if you bet $50 on 'Klok' and 'Pkorng', and the rolled dice include a 'Klok' and a 'Pkorng', you win $50 for each match, totaling $100.</p>
          </li>
          <li>
            <h3>5. Losing Conditions</h3>
            <p>If none of the rolled dice match the ones you bet on, you lose the amount you bet, and it goes to the owner (the house).</p>
          </li>
          <li>
            <h3>6. Game Continuation</h3>
            <p>Continue betting and rolling until you decide to cash out or until you run out of money. The goal is to maximize your winnings while managing your risks.</p>
          </li>
          <li>
            <h3>7. Strategy Tips</h3>
            <p>Carefully consider how many dice to bet on and how much to wager. Betting on more dice increases your chances of a match but also increases your total bet amount.</p>
          </li>
        </ul>
      </div>
      <button className="text-center border rounded-md text-white py-2 w-[100px] bg-swarmy-green mt-6" type="button" onClick={() => onBtnClicked(prevState => !prevState)}>Got it!</button>
    </div>
  );
}