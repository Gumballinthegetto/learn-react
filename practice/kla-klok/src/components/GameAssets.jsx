import { BriefcaseDollarIcon, CoinsDollarIcon } from "../assets/Asset";

export default function GameAssets({ yourBalance, houseBalance, time }) {
  return (
    <div className="flex flex-col py-1">
      <span>Timer: {time}s</span>
      <div className="flex items-center justify-between py-2 text-[0.9rem] border border-swarmy-green px-4 rounded-md mx-2 my-2 bg-gray-50">
        <div className="flex items-center space-x-2">
          <BriefcaseDollarIcon width={16} strokeWidth={2} />
          <span>${ houseBalance }</span>
        </div>
        <div className="flex items-center space-x-2">
          <CoinsDollarIcon width={16} strokeWidth={2} />
          <span>${ yourBalance }</span>
        </div>
      </div>
    </div>
  );
}