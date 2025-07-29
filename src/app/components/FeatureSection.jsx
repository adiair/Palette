import { Redo } from 'lucide-react'


export default function FeatureSection() {
  return (
    <div className="mt-10 text-center max-w-5xl mx-auto px-4 sm:px-6">

      {/* Responsive Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="flex items-start gap-3 p-3 bg-white bg-opacity-10 backdrop-blur-md border border-white/20 rounded-md shadow-md hover:shadow-2xl transition">
          <div className="bg-purple-100 p-2 rounded-md">
            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16h.01M12 12h.01M16 8h.01M9 9h.01M15 15h.01M19 5h.01M5 19h.01M12 3v.01M21 12h.01M3 12h.01M12 21v.01" />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="text-sm sm:text-base font-semibold text-gray-900">One-Click Copy</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-snug">Use Hex to Color</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start gap-3 p-3 bg-white bg-opacity-10 backdrop-blur-md border border-white/20 rounded-md shadow-md hover:shadow-2xl transition">
          <div className="bg-pink-100 p-2 rounded-md">
            <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="text-sm sm:text-base font-semibold text-gray-900">Live Preview</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-snug">See in Action</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-start gap-3 p-3 bg-white bg-opacity-10 backdrop-blur-md border border-white/20 rounded-md shadow-md hover:shadow-2xl transition">
          <div className="bg-blue-100 p-2 rounded-md">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h2l1 2h13l1-2h2M4 10l1 9h14l1-9M6 21a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="text-sm sm:text-base font-semibold text-gray-900">All Colors</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-snug">CSS For Developers</p>
          </div>
        </div>
      </div>
      <Redo className="absolute rotate-45 hidden sm:block md:h-40 md:w-40" />

      <p className="font-medium text-black text-sm sm:text-base opacity-75 mb-5 mt-14">
        Press Spacebar to generate
      </p>
    </div>
  )
}
