export default function WIPDiscord() {

    const progress = 70;

    return (
        <main>
            <h1 className="text-6xl font-bold text-white p-12 pl-0 pb-0">Under Construction!</h1>
            <div className="flex items-center">
                    <p className="text-xl text-bold">
                        This page is currently being built! Check back later.
                    </p>
            </div>

            <div className="min-h-[70vh] flex flex-col items-center justify-center w-full">
                <div className="w-3/4 md:w-1/2">
                <div className="flex justify-between mb-2 w-full">
                    <span className="text-zinc-400">Development Progress:</span>

                    <span className="text-zinc-400">
                        {progress}%
                    </span>
                </div>

                <div className="h-4 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-red-400 transition-all duration-500"
                        style = {{ width: `${progress}%`}}>
                        </div>
                </div>
            </div>
            </div>
        </main>
    )
}