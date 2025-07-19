export default function FeatureSection() {
  return (
    <div className="mt-16 text-center text-white max-w-4xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Built for Developers</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl">
          <div className="text-3xl mb-4">🎨</div>
          <h3 className="text-lg font-semibold mb-2 text-yellow-300">Ready to Use</h3>
          <p className="text-sm opacity-90">
            Click any color to copy hex code instantly. Perfect for quick development.
          </p>
        </div>
        
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl">
          <div className="text-3xl mb-4">⚡</div>
          <h3 className="text-lg font-semibold mb-2 text-yellow-300">Export Ready</h3>
          <p className="text-sm opacity-90">
            CSS variables, JSON, and SCSS formats. Semantic naming for better code.
          </p>
        </div>
        
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl">
          <div className="text-3xl mb-4">🚀</div>
          <h3 className="text-lg font-semibold mb-2 text-yellow-300">Modern Tech</h3>
          <p className="text-sm opacity-90">
            Built with Next.js, React, and Tailwind CSS. Production-ready code.
          </p>
        </div>
      </div>
    </div>
  )
}
