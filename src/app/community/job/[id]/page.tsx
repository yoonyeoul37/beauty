'use client';
import Link from 'next/link';
import Image from 'next/image';

// 더미 데이터 예시
const jobDetail = {
  id: 1,
  title: '시지 엘더은살롱에서 디자이너 선생님을 모십니다!',
  name: '엘더은살롱',
  logo: 'https://images.unsplash.com/photo-1540555744935-1a5238f80479?q=80&w=2070&auto=format&fit=crop',
  address: '대구 수성구 노변동 737 1층',
  대표: '이지은',
  채용담당자: '이지은',
  연락처: '010-4794-6936',
  모집마감: '상시채용',
  모집인원: '2명',
  모집분야: '헤어디자이너',
  경력: '1~3년',
  우대사항: '해당직무 전공계열, 해당직무 근무경험, 인근거주자, 해당직무 자격증 소지자',
  학력: '학력무관',
  연령: '20~25',
  직무: '경력',
  성별: '성별무관',
  지역: '대구 수성구',
  직종: '헤어디자이너',
  근무기간: '협의',
  고용형태: '정규직',
  급여: '추후협의',
  휴무일: '협의',
  복지: '4대보험, 자율휴무, 명절휴가, 외부교육, 점심제공, 교통비지원',
  상세설명: `안녕하세요! 이번 시지 노변동 알파시티에서 운영중이던 엘더은살롱 미용실이 확장하게 되어 보다 쾌적하게 운영할수있도록 확장하여\n\n채용정보에 관심 가져주셔서 감사합니다.\n상세 확인 후 입사지원 부탁드립니다.\n자세한 사항은 전화로 연락주시면 감사하겠습니다^^ 전화연결이 안될시 업무 중이오니 문자 주시면 주시면 됩니다~`,
};

export default function JobDetailPage() {
  return (
    <main className="min-h-screen bg-stone-50 pt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10">
        
        <div className="flex-1 max-w-4xl mx-auto w-full space-y-10">
            <section id="main-visual">
              <div className="p-8 bg-white border border-gray-200 rounded-lg">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{jobDetail.title}</h1>
                <p className="text-md text-gray-500 mb-6">{jobDetail.name}</p>
                <div className="relative h-96 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image 
                    src={jobDetail.logo} 
                    alt={`${jobDetail.name} logo`} 
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
              </div>
            </section>

            <div className="flex items-center justify-center gap-3">
                <button className="flex items-center justify-center gap-2 w-full sm:w-auto flex-1 sm:flex-none sm:px-12 py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-black transition-colors text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>
                    <span>온라인 지원하기</span>
                </button>
                <button className="flex items-center justify-center gap-2 w-full sm:w-auto flex-1 sm:flex-none sm:px-12 py-3 bg-stone-200 text-stone-700 font-bold rounded-lg hover:bg-stone-300 transition-colors text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976-2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                    <span>스크랩하기</span>
                </button>
            </div>

            {/* 근무지역 및 지도 */}
            <section id="location">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">근무지역</h2>
              <p className="text-gray-600 mb-4">{jobDetail.address}</p>
              <div className="aspect-w-16 aspect-h-7 bg-gray-200 rounded-lg flex items-center justify-center border">
                <p className="text-gray-500">지도 영역 (API 연동 필요)</p>
              </div>
            </section>

            {/* 상세요강 */}
            <section id="description">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">상세요강</h2>
              <div className="p-8 border border-gray-200 rounded-lg bg-white">
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {jobDetail.상세설명}
                </p>
              </div>
            </section>

            {/* 근무조건 */}
            <section id="conditions">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">근무조건</h2>
              <div className="p-8 border border-gray-200 rounded-lg bg-white">
                {/* Icon Summary */}
                <div className="flex justify-around items-center flex-wrap gap-4 mb-8">
                  <div className="text-center w-24">
                    <div className="w-16 h-16 bg-stone-100 rounded-full mx-auto flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <span className="text-sm text-gray-500">지역</span>
                    <p className="font-semibold text-gray-800">{jobDetail.지역}</p>
                  </div>
                  <div className="text-center w-24">
                    <div className="w-16 h-16 bg-stone-100 rounded-full mx-auto flex items-center justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                    </div>
                    <span className="text-sm text-gray-500">직종</span>
                    <p className="font-semibold text-gray-800">{jobDetail.직종}</p>
                  </div>
                  <div className="text-center w-24">
                    <div className="w-16 h-16 bg-stone-100 rounded-full mx-auto flex items-center justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                    <span className="text-sm text-gray-500">근무기간</span>
                    <p className="font-semibold text-gray-800">{jobDetail.근무기간}</p>
                  </div>
                  <div className="text-center w-24">
                    <div className="w-16 h-16 bg-stone-100 rounded-full mx-auto flex items-center justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z" /></svg>
                    </div>
                    <span className="text-sm text-gray-500">고용형태</span>
                    <p className="font-semibold text-gray-800">{jobDetail.고용형태}</p>
                  </div>
                  <div className="text-center w-24">
                    <div className="w-16 h-16 bg-stone-100 rounded-full mx-auto flex items-center justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 012-2h4a2 2 0 012 2v1m-4 0h4M5 15a1 1 0 001 1h8a1 1 0 001-1v-2a1 1 0 00-1-1H6a1 1 0 00-1 1v2zm13-2a2 2 0 100-4 2 2 0 000 4z" /></svg>
                    </div>
                    <span className="text-sm text-gray-500">직무</span>
                    <p className="font-semibold text-gray-800">{jobDetail.직무}</p>
                  </div>
                </div>
                
                <hr className="my-8 border-gray-200" />
                
                {/* Detailed Grid */}
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-base">
                    <div className="flex"><dt className="w-24 font-medium text-gray-500 flex-shrink-0">업직종</dt><dd className="text-gray-800">{jobDetail.모집분야}</dd></div>
                    <div className="flex"><dt className="w-24 font-medium text-gray-500 flex-shrink-0">업체명</dt><dd className="text-gray-800">{jobDetail.name}</dd></div>
                    <div className="flex"><dt className="w-24 font-medium text-gray-500 flex-shrink-0">근무기간</dt><dd className="text-gray-800">{jobDetail.근무기간}</dd></div>
                    <div className="flex"><dt className="w-24 font-medium text-gray-500 flex-shrink-0">휴무일</dt><dd className="text-gray-800">{jobDetail.휴무일}</dd></div>
                    <div className="flex"><dt className="w-24 font-medium text-gray-500 flex-shrink-0">고용형태</dt><dd className="text-gray-800">{jobDetail.고용형태}</dd></div>
                    <div className="flex"><dt className="w-24 font-medium text-gray-500 flex-shrink-0">경력</dt><dd className="text-gray-800">{jobDetail.경력}</dd></div>
                    <div className="flex"><dt className="w-24 font-medium text-gray-500 flex-shrink-0">급여</dt><dd className="text-gray-800">{jobDetail.급여}</dd></div>
                    <div className="flex md:col-span-2"><dt className="w-24 font-medium text-gray-500 flex-shrink-0">복지정책</dt><dd className="text-gray-800">{jobDetail.복지}</dd></div>
                </dl>
              </div>
            </section>

            {/* 모집요강 */}
            <section id="details">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">모집요강</h2>
                <div className="p-8 border border-gray-200 rounded-lg bg-white">
                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-base">
                        <div className="flex"><dt className="w-24 font-medium text-gray-500 flex-shrink-0">모집마감</dt><dd className="text-gray-800">{jobDetail.모집마감}</dd></div>
                        <div className="flex"><dt className="w-24 font-medium text-gray-500 flex-shrink-0">학력</dt><dd className="text-gray-800">{jobDetail.학력}</dd></div>
                        <div className="flex"><dt className="w-24 font-medium text-gray-500 flex-shrink-0">모집인원</dt><dd className="text-gray-800">{jobDetail.모집인원}</dd></div>
                        <div className="flex"><dt className="w-24 font-medium text-gray-500 flex-shrink-0">연령</dt><dd className="text-gray-800">{jobDetail.연령}</dd></div>
                        <div className="flex"><dt className="w-24 font-medium text-gray-500 flex-shrink-0">모집분야</dt><dd className="text-gray-800">{jobDetail.모집분야}</dd></div>
                        <div className="flex"><dt className="w-24 font-medium text-gray-500 flex-shrink-0">직무</dt><dd className="text-gray-800">{jobDetail.직무}</dd></div>
                        <div className="flex"><dt className="w-24 font-medium text-gray-500 flex-shrink-0">경력</dt><dd className="text-gray-800">{jobDetail.경력}</dd></div>
                        <div className="flex"><dt className="w-24 font-medium text-gray-500 flex-shrink-0">성별</dt><dd className="text-gray-800">{jobDetail.성별}</dd></div>
                        <div className="flex md:col-span-2"><dt className="w-24 font-medium text-gray-500 flex-shrink-0">우대사항</dt><dd className="text-gray-800">{jobDetail.우대사항}</dd></div>
                    </dl>
                </div>
            </section>

            {/* 지원 버튼 */}
            <div className="text-center pt-8">
                <button className="w-full max-w-sm px-8 py-4 bg-gray-800 text-white font-bold rounded-lg hover:bg-black transition-colors text-lg">
                    온라인 지원
                </button>
            </div>
        </div>

        <aside className="hidden lg:block w-80 flex-shrink-0">
          <div className="sticky top-28 space-y-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg text-gray-800">채용속보</h3>
                <button className="text-gray-400 hover:text-gray-600">···</button>
              </div>
              <ul className="space-y-3.5">
                <li className="flex items-center gap-3 text-sm border-b border-gray-100 pb-3.5">
                  <span className="border border-amber-600 text-amber-700 rounded-full px-3 py-0.5 text-xs font-semibold">경기</span>
                  <a href="#" className="truncate hover:underline">최고의 인재로 최고의 시...</a>
                </li>
                <li className="flex items-center gap-3 text-sm border-b border-gray-100 pb-3.5">
                  <span className="border border-amber-600 text-amber-700 rounded-full px-3 py-0.5 text-xs font-semibold">인천</span>
                  <a href="#" className="truncate hover:underline">고정현헤어 인천논현점에...</a>
                </li>
                <li className="flex items-center gap-3 text-sm border-b border-gray-100 pb-3.5">
                  <span className="border border-amber-600 text-amber-700 rounded-full px-3 py-0.5 text-xs font-semibold">부산</span>
                  <a href="#" className="truncate hover:underline">남포동 네일샵 직원모집</a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="border border-amber-600 text-amber-700 rounded-full px-3 py-0.5 text-xs font-semibold">서울</span>
                  <a href="#" className="truncate hover:underline">정착지원금 최대 350원 ...</a>
                </li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg text-gray-800">인재속보</h3>
                <button className="text-gray-400 hover:text-gray-600">···</button>
              </div>
              <ul className="space-y-3.5">
                 <li className="flex items-center gap-3 text-sm border-b border-gray-100 pb-3.5">
                  <span className="border border-amber-600 text-amber-700 rounded-full px-3 py-0.5 text-xs font-semibold">경기</span>
                  <a href="#" className="truncate hover:underline">캐나다 출신 염색전문가(...</a>
                </li>
                <li className="flex items-center gap-3 text-sm border-b border-gray-100 pb-3.5">
                  <span className="border border-amber-600 text-amber-700 rounded-full px-3 py-0.5 text-xs font-semibold">서울</span>
                  <a href="#" className="truncate hover:underline">늦은나이지만 최선을 다...</a>
                </li>
                <li className="flex items-center gap-3 text-sm border-b border-gray-100 pb-3.5">
                  <span className="border border-amber-600 text-amber-700 rounded-full px-3 py-0.5 text-xs font-semibold">경기</span>
                  <a href="#" className="truncate hover:underline">뭐든지 잘 할 수 있는 사람...</a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="border border-amber-600 text-amber-700 rounded-full px-3 py-0.5 text-xs font-semibold">인천</span>
                  <a href="#" className="truncate hover:underline">안녕하세요!우슬기입니다</a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
} 