import TopCard from "./TopCard"
import BottomCard from "./BottomCard"

export default function Card() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-yellow">
            <div className="border border-black rounded-xl px-6 pt-6 shadow-right max-w-[380px] shrink bg-white">
                <TopCard />
                <BottomCard />
            </div>
        </div>
    )
}