export default function SponsorsPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] bg-[#1a1c20] dark:bg-[#1a1c20] bg-white text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white dark:text-white text-gray-900 mb-6">
                Our <span className="text-purple-500">Partners</span>
            </h1>
            <p className="text-gray-400 dark:text-gray-400 text-gray-600 max-w-2xl text-lg mb-12">
                We are proud to be supported by leading organizations in the chess and tech world.
            </p>

            {/* Placeholder Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-32 h-16 bg-white/10 rounded-lg animate-pulse" />
                ))}
            </div>
        </div>
    );
}

