export default function AppDownloadSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1240px] mx-auto flex gap-5">
        {/* 왼쪽 카드 - 일반 사용자용 */}
        <div className="flex-1 bg-[#e6f7f7] rounded-3xl p-12 h-[800px] relative overflow-hidden">
          {/* 앱 정보 */}
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center">
              {/* 아이콘/로고 */}
            </div>
            <div>
              <h3 className="text-xl font-bold">스타일로그</h3>
              <p className="text-gray-500">고객용 앱</p>
            </div>
          </div>
          {/* 앱 설명 */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-6">
              당신의 스타일을<br />
              더 쉽게 관리하세요
            </h2>
            <p className="text-lg text-gray-700">
              예약부터 리뷰까지, 모든 뷰티 서비스를<br />
              한 앱에서 편리하게
            </p>
          </div>
          {/* 다운로드 버튼 */}
          <div className="flex gap-2">
            <button className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-colors">
              App Store
            </button>
            <button className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-colors">
              Google Play
            </button>
          </div>
          {/* 앱 스크린샷 */}
          <div className="absolute bottom-0 right-0 w-[400px]">
            <img src="/app-screenshot.png" alt="App Screenshot" className="w-full" />
          </div>
        </div>

        {/* 오른쪽 카드 - 비즈니스용 */}
        <div className="flex-1 bg-[#f7e6f7] rounded-3xl p-12 h-[800px] relative overflow-hidden">
          {/* 앱 정보 */}
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center">
              {/* 아이콘/로고 */}
            </div>
            <div>
              <h3 className="text-xl font-bold">스타일로그 비즈니스</h3>
              <p className="text-gray-500">사장님용 앱</p>
            </div>
          </div>
          {/* 앱 설명 */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-6">
              비즈니스를<br />
              더 스마트하게
            </h2>
            <p className="text-lg text-gray-700">
              예약 관리, 고객 관리, 매출 분석까지<br />
              한 번에 해결하세요
            </p>
          </div>
          {/* 가입 버튼 */}
          <button className="bg-black text-white px-12 py-4 rounded-xl hover:bg-gray-900 transition-colors">
            비즈니스 시작하기
          </button>
          {/* 앱 스크린샷 */}
          <div className="absolute bottom-0 right-0 w-[400px]">
            <img src="/business-screenshot.png" alt="Business Screenshot" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
} 