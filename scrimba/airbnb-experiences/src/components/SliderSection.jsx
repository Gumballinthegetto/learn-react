import Card from "./Card";
import data from '../data/data'

export default function SliderSection() {
    return (
        <div className="flex flex-row flex-wrap items-center justify-center space-y-6 sm:space-y-0 md:space-x-8 md:flex-row md:items-center px-4 pb-12">
            {data.map(item => {
                return (
                    <div key={item.id} className="w-full sm:w-1/2 sm:pb-8 md:w-auto flex items-center justify-center">
                        <Card
                            {...item} />
                    </div>
                )
            })}
        </div>
    )
}