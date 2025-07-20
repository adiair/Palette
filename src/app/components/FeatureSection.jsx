export default function FeatureSection() {
  return (
    <div className="mt-10 text-center max-w-5xl mx-auto">

      <div className="grid md:grid-cols-3 gap-3">
    {/* Card 1 */}
    <div className="flex bg-white bg-opacity-10 backdrop-blur-md border border-white/20 items-start gap-2 p-2.5 bg-white rounded-md shadow-md hover:shadow-2xl transition">
      <div className="bg-purple-100 p-1.5 rounded-md">
        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 16h.01M12 12h.01M16 8h.01M9 9h.01M15 15h.01M19 5h.01M5 19h.01M12 3v.01M21 12h.01M3 12h.01M12 21v.01" />
        </svg>
      </div>
      <div className="text-left ">
        <h3 className="text-sm font-semibold text-gray-900">One-Click Copy</h3>
        <p className="text-xs text-gray-500 leading-snug">Use Hex to Color</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex bg-white bg-opacity-10 backdrop-blur-md border border-white/20 items-start gap-2 p-2.5 bg-white rounded-md shadow-md hover:shadow-2xl transition">
      <div className="bg-pink-100 p-1.5 rounded-md">
        <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
      <div className="text-left">
        <h3 className="text-sm font-semibold text-gray-900">Live Preview</h3>
        <p className="text-xs text-gray-500 leading-snug">Apply During Selection</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="flex bg-white bg-opacity-10 backdrop-blur-md border border-white/20 items-start gap-2 p-2.5 bg-white rounded-md shadow-md hover:shadow-2xl transition">
      <div className="bg-blue-100 p-1.5 rounded-md">
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h2l1 2h13l1-2h2M4 10l1 9h14l1-9M6 21a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      </div>
      <div className="text-left">
        <h3 className="text-sm font-semibold text-gray-900">All Colors</h3>
        <p className="text-xs text-gray-500 leading-snug">CSS For Developers</p>
      </div>
    </div>
  </div>

      <div
          className={`flex items-center justify-center gap-6 sm:gap-8 md:gap-12 mt-7 mb-14 pt-6 sm:pt-8 border-t transition-all duration-300 `}
        >
          <div className="text-center">
            <div
              className={`text-xl sm:text-2xl font-bold transition-colors duration-300 `}
            >
              Explore
            </div>
            <div
              className={`text-xs sm:text-sm transition-colors duration-300 `}
            >
              Colors
            </div>
          </div>
          <div className="text-center">
            <div
              className={`text-xl sm:text-2xl font-bold transition-colors duration-300`}
            >
              Make
            </div>
            <div
              className={`text-xs sm:text-sm transition-colors duration-300 `}
            >
              Palette
            </div>
          </div>
          <div className="text-center">
            <div
              className={`text-xl sm:text-2xl font-bold transition-colors duration-300 `}
            >
              Next.js
            </div>
            <div
              className={`text-xs sm:text-sm transition-colors duration-300 `}
            >
              & Tailwind
            </div>
          </div>
        </div>

      <p className="font-medium text-black mb-5 mt-4 opacity-75">
        Press Spacebar to generate
      </p>

    </div>

  )
}
