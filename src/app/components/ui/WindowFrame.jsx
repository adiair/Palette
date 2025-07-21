export default function WindowFrame({ title, children }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-6xl border border-gray-200">
      
      {/* Top bar with traffic light buttons */}
      <div className="bg-gray-50 sm:px-6 py-3 sm:py-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Traffic light buttons */}
          <div className="flex gap-1.5">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>

          {/* Title */}
          {title && (
            <span className="text-sm sm:text-base text-gray-600 font-medium truncate">
              {title}
            </span>
          )}
        </div>
      </div>

      {/* Main content */}
      <div>{children}</div>
    </div>
  );
}
