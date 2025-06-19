export default function AppDownloadSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1240px] mx-auto flex gap-5">
        {/* 왼쪽 카드 - 일반 사용자용 */}
        <div className="flex-1 bg-[#e6f7f7] rounded-3xl p-12 h-[800px] relative overflow-hidden">
          {/* 앱 정보 */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
              <img src="/app-icon.png" alt="App Icon" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold">스타일로그</h3>
              <p className="text-sm text-gray-600">Style Logs</p>
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
          <div className="flex gap-4">
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
          <div className="flex items-center gap-2 mb-8">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
              <img src="/business-icon.png" alt="Business Icon" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold">스타일로그 비즈니스</h3>
              <p className="text-sm text-gray-600">Style Logs Business</p>
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