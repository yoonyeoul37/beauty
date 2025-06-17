import Link from 'next/link'

const categories = [
  { name: '커트', href: '/haircut', icon: '💇‍♂️' },
  { name: '염색', href: '/coloring', icon: '🎨' },
  { name: '펌', href: '/perm', icon: '🌀' },
  { name: '클리닉', href: '#', icon: '💆‍♀️' },
  { name: '메이크업', href: '#', icon: '💄' },
  { name: '왁싱', href: '#', icon: '🧖‍♀️' },
  { name: '네일', href: '#', icon: '💅' },
  { name: '속눈썹', href: '#', icon: '👁️' },
];

const popularSalons = [
  { name: '스타일리스트 A', location: '강남', desc: '합리적 가격, 높은 평점', href: '/haircut' },
  { name: '스타일리스트 B', location: '홍대', desc: '트렌디한 스타일', href: '/coloring' },
  { name: '스타일리스트 C', location: '신촌', desc: '친절한 서비스', href: '/perm' },
  { name: '스타일리스트 D', location: '건대', desc: '예약 필수 인기샵', href: '#' },
  { name: '스타일리스트 E', location: '잠실', desc: '합리적 가격, 최신 트렌드', href: '#' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col">
      {/* 헤더 */}
      <header className="w-full" style={{ height: 100, minHeight: 100 }}>
        <div className="h-full flex items-center justify-between px-4 bg-[#800020] shadow">
          <div className="flex items-center gap-2" style={{ marginLeft: 120 }}>
            <span className="text-3xl font-extrabold text-white tracking-wide">라뷰</span>
          </div>
          <div className="flex-1 mx-4 max-w-xl">
            <input
              type="text"
              placeholder=""
              className="w-full rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
        </div>
      </header>

      {/* 카테고리 */}
      <nav className="w-full bg-white shadow-sm py-3 px-2 flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <Link key={cat.name} href={cat.href} className="flex flex-col items-center w-16 hover:text-pink-500">
            <span className="text-2xl mb-1">{cat.icon}</span>
            <span className="text-xs font-medium">{cat.name}</span>
          </Link>
        ))}
      </nav>

      {/* 추천 배너 */}
      <section className="w-full flex justify-center py-6 bg-gradient-to-r from-pink-100 to-blue-100">
        <div className="w-full max-w-2xl rounded-xl bg-white shadow p-6 flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1">
            <h2 className="text-lg font-bold text-pink-600 mb-2">WELL&COME 이벤트</h2>
            <p className="text-gray-600 text-sm mb-2">신규 회원 최대 50% 할인 쿠폰 증정!</p>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition">이벤트 보기</button>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-32 h-20 bg-pink-200 rounded-lg flex items-center justify-center text-3xl">🎁</div>
          </div>
        </div>
      </section>

      {/* 인기 미용실 */}
      <section className="container mx-auto px-4 py-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">라뷰에서 인기 있는 업체</h3>
        <div className="w-[1280px] mx-auto grid grid-cols-5 gap-6">
          {popularSalons.map((salon) => (
            <Link key={salon.name} href={salon.href} className="block bg-white rounded-lg shadow hover:shadow-lg p-4 transition w-[240px] h-[360px]">
              <div className="w-full h-24 bg-gray-100 rounded mb-2 flex items-center justify-center text-3xl">🏢</div>
              <div className="font-semibold text-gray-700">{salon.name}</div>
              <div className="text-xs text-gray-500">{salon.location}</div>
              <div className="text-xs text-pink-500 mt-1">{salon.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* 더 많은 섹션/이벤트/추천 등은 필요에 따라 추가 가능 */}

      {/* 푸터 */}
      <footer className="w-full bg-gray-100 py-6 mt-auto text-center text-xs text-gray-500">
        <div>© 2024 라뷰 | 미용 가격 비교 서비스</div>
        <div className="mt-1">문의: help@labview.kr</div>
      </footer>
    </div>
  )
}
