export default function HeroSection() {
    return (
        <div>
            <div className="px-5 flex items-center justify-center flex-col">
                <div className="px-7 py-5 flex items-center justify-center max-w-lg">
                    <img className="max-w-full w-full" src="../../src/assets/photo-grid.png" alt="Hero section image" />
                </div>
            </div>
            <div className="sm:flex sm:flex-col sm:items-center sm:justify-center">
                <div className="max-w-sm sm:max-w-lg py-5 px-4 sm:w-full sm:px-8 space-y-3 sm:flex sm:flex-col sm:items-center sm:justify-center sm:text-center">
                    <h1 className="text-xl sm:text-3xl md:text-3xl lg:text-4xl font-[500]">Online Experiences</h1>
                    <p className="text-[10px] sm:text-sm text-gray-500 font-[300]">
                        Join Unique interactive activities led by one-of-a-kind hosts--all without leaving home.
                    </p>
                </div>
                <div className="sm:border-t sm:border-black sm:p-4 sm:w-1/5"></div>
            </div>
        </div>
    )
}