import Link from 'next/link'

const haircutData = [
  {
    name: "헤어살롱 가",
    location: "강남",
    mensCut: "30,000원",
    womensCut: "35,000원",
    rating: 4.9,
    reviews: 210
  },
  {
    name: "스타일 나",
    location: "홍대",
    mensCut: "28,000원",
    womensCut: "32,000원",
    rating: 4.7,
    reviews: 150
  },
  {
    name: "뷰티 다",
    location: "이태원",
    mensCut: "35,000원",
    womensCut: "40,000원",
    rating: 4.8,
    reviews: 188
  }
]

export default function HaircutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            ← 홈으로
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          헤어컷 가격 비교
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">미용실</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">위치</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">남성 컷</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">여성 컷</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">평점</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">리뷰</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {haircutData.map((salon, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{salon.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{salon.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{salon.mensCut}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{salon.womensCut}</td>
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