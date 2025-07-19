export default function WindowFrame({ title, children }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-6xl">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center gap-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-gray-600 font-medium">{title}</span>
      </div>
      {children}
    </div>
  )
}
