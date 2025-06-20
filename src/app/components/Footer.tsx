export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 mt-16">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-sm text-zinc-400">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* 로고 및 기본 정보 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">태가나</h3>
            <div className="space-y-1">
              <p><strong>회사명:</strong> 태가나주식회사</p>
              <p><strong>대표:</strong> 윤여울</p>
              <p><strong>주소:</strong> 서울특별시 서초구 방방로6길 13 4층</p>
              <p><strong>고객센터:</strong> 1533-8237 (평일 10:00 - 18:00)</p>
            </div>
          </div>

          {/* 링크 */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="space-y-2">
              <h4 className="font-semibold text-zinc-200">고객지원</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white">공지사항</a></li>
                <li><a href="#" className="hover:text-white">자주 묻는 질문</a></li>
                <li><a href="#" className="hover:text-white">1:1 문의</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-zinc-200">회사소개</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white">테가나 팀</a></li>
                <li><a href="#" className="hover:text-white">채용</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-zinc-200">정책</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white">이용약관</a></li>
                <li><a href="#" className="hover:text-white font-bold">개인정보처리방침</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* 하단 저작권 */}
        <div className="mt-8 border-t border-zinc-700 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} TEGANA Corp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 