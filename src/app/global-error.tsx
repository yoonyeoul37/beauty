'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">🚨</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">심각한 오류가 발생했습니다</h2>
            <p className="text-gray-600 mb-6">
              애플리케이션에서 심각한 오류가 발생했습니다. 페이지를 새로고침해주세요.
            </p>
            <button
              onClick={reset}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              다시 시도
            </button>
          </div>
        </div>
      </body>
    </html>
  )
} 