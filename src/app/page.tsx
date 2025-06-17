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
        <h3 className="text-xl font-bold text-gray-800 w-[1280px] mx-auto mb-4">라뷰에서 인기 있는 업체</h3>
        <div className="w-[1280px] mx-auto grid grid-cols-5 gap-6">
          {popularSalons.map((salon, idx) => (
            <Link key={salon.name} href={salon.href} className="block bg-white rounded-lg shadow hover:shadow-lg p-4 transition w-[240px] h-[360px] hover:bg-[#dfe9fd]">
              <div className="w-48 h-48 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                {idx === 0 && (
                  <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMDZfMjQ4%2FMDAxNzQxMjMxNDEzMjA1.NMlLTOkPOOQ1bBLuJ1SoBpME8lOfwZ860k521zNXyMQg.zT73UtiPMXcmSG4kJ4U_5MsZBMIAJwSdR2YSuDkCQQMg.PNG%2F%25B9%25CC%25BF%25EB%25BD%25C7_%25C1%25B6%25B8%25ED_3.png&type=a340" alt="업체1" className="object-cover w-full h-full" />
                )}
                {idx === 1 && (
                  <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MDhfNDUg%2FMDAxNzQ0MTIzMDIyMjI1.GkH_xYwR5E6D3EpxQ-cWl2pjb-IEOYQrOv3dB4E0RQQg.slRzhIYyZbJUD5xLGUS101AtECex03LXD0T-bcT45Iog.JPEG%2FDSC08772.jpg&type=a340" alt="업체2" className="object-cover w-full h-full" />
                )}
                {idx === 2 && (
                  <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAyMTZfMTM2%2FMDAxNzM5NzEwNjcwNjI0.E2wdB1sfjz0CNvEOHMDR_dHL-CiJ4pKy2rLhaY1leLMg._CMjlTBkhwdeqRJlsLGn6Ctn-S_8Tl7gak5VrjQhwZYg.JPEG%2F900%25A3%25DF20250213%25A3%25DF181930.jpg&type=a340" alt="업체3" className="object-cover w-full h-full" />
                )}
                {idx === 3 && (
                  <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEyMTFfMTYg%2FMDAxNzMzOTA3MzQ3OTI2.lV6R8qiR_UgsOTRRhTag6W2Bc5UgS11RBvf_58-wSoMg.7TDP02bP98aFd2JQzh0cGeUbMiN1ocuMu6ApUM2wqqYg.JPEG%2F900%25A3%25DF20241211%25A3%25DF105615%25A3%25A80%25A3%25A9.jpg&type=a340" alt="업체4" className="object-cover w-full h-full" />
                )}
                {idx === 4 && (
                  <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMjRfMjc4%2FMDAxNzQyNzgxMDg5OTEy.CX9CWh323KrjA97EdgmkKX3MyuDyN1KMzszFp_NZVv8g.O8Y_EoFJZ2ljMyU0bsMkkyw4iS-avY6oWBiGHi8RXHcg.JPEG%2FIMG_0633.jpg&type=a340" alt="업체5" className="object-cover w-full h-full" />
                )}
              </div>
              <div className="font-semibold text-gray-700 text-center">{salon.name}</div>
              <div className="text-xs text-gray-500 text-center">{salon.location}</div>
              <div className="text-xs text-pink-500 mt-1 text-center">{salon.desc}</div>
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
