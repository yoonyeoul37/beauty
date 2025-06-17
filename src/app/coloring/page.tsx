import Link from 'next/link'

const coloringData = [
  {
    name: "스타일리스트 A",
    location: "강남",
    fullColor: "80,000원",
    highlight: "120,000원",
    balayage: "150,000원",
    rating: 4.8,
    reviews: 128
  },
  {
    name: "스타일리스트 B",
    location: "홍대",
    fullColor: "75,000원",
    highlight: "110,000원",
    balayage: "140,000원",
    rating: 4.6,
    reviews: 95
  },
  {
    name: "스타일리스트 C",
    location: "신촌",
    fullColor: "78,000원",
    highlight: "115,000원",
    balayage: "145,000원",
    rating: 4.7,
    reviews: 156
  }
]

export default function ColoringPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center mb-8">
          <Link href="/" className="text-pink-600 hover:text-pink-700">
            ← 홈으로
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          염색 가격 비교
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-pink-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">미용실</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">위치</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">전체 염색</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">하이라이트</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">발레아쥬</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">평점</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">리뷰</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {coloringData.map((salon, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{salon.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{salon.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{salon.fullColor}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{salon.highlight}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{salon.balayage}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{salon.rating}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{salon.reviews}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
} 