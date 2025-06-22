import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSquarePlus } from '@fortawesome/free-solid-svg-icons';

// 간단한 로고 컴포넌트
const StyleLogAppLogo = () => (
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="#34495e"/>
    <path d="M 50 28 V 72 M 25 50 C 40 45, 60 45, 75 50" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


export default function AppDownloadSection() {
  return (
    <div className="bg-[#e6fcf5] rounded-3xl p-8 flex flex-col h-full">
      {/* 상단 로고 */}
      <div className="flex items-center gap-2 mb-4">
        <StyleLogAppLogo />
        <div>
          <p className="font-bold text-sm text-gray-800">스타일로그</p>
          <p className="text-xs text-gray-500">App</p>
        </div>
      </div>

      {/* 중앙 컨텐츠 */}
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
          당신의 스타일을<br/>더 쉽게 관리하세요
        </h3>
        <p className="text-sm text-gray-600 leading-6">
          예약부터 리뷰까지, 모든 뷰티 서비스를
          <br/>
          한 앱에서 편하게
        </p>
      </div>

      {/* 하단 버튼 */}
      <div className="flex items-center gap-3 mt-6">
        <a href="/search" className="flex items-center justify-center gap-2 bg-gray-800 text-white w-full py-3 rounded-lg hover:bg-black transition-colors text-sm font-medium">
          <FontAwesomeIcon icon={faSearch} className="text-base" />
          내 주변 뷰티샵 찾기
        </a>
        <a href="#" className="flex items-center justify-center gap-2 bg-gray-800 text-white w-full py-3 rounded-lg hover:bg-black transition-colors text-sm font-medium">
          <FontAwesomeIcon icon={faSquarePlus} className="text-base" />
          홈 화면에 추가
        </a>
      </div>

      {/* 이미지 플레이스홀더 (옵션) */}
      <div className="mt-8 text-center">
        <p className="text-xs text-gray-400">↘ App Screenshot</p>
      </div>
    </div>
  );
} 