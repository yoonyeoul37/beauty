'use client';
import Link from 'next/link';

// 더미 데이터 예시
const jobDetail = {
  id: 1,
  name: '엘더은살롱',
  logo: '',
  모집인원: '2명',
  모집분야: '헤어디자이너',
  경력: '1~3년',
  우대사항: '해당직무 근무경험, 자격증 소지자',
  학력: '학력무관',
  연령: '20~25',
  직무: '경력',
  성별: '성별무관',
  지역: '대구 수성구',
  직종: '헤어디자이너',
  근무기간: '협의',
  고용형태: '정규직',
  급여: '추후협의',
  복지: '4대보험, 자율휴무, 명절휴가, 외부교육, 점심제공, 교통비지원',
  상세설명: `엘더은살롱에서 함께할 헤어디자이너를 모집합니다.\n\n- 경력 1~3년 우대\n- 자유로운 분위기, 다양한 복지 제공\n- 근무시간/급여 협의 가능\n\n많은 지원 바랍니다!`,
};

export default function JobDetailPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-50 py-16">
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur rounded-2xl shadow-xl p-10 md:p-14 flex flex-col gap-8">
        {/* 상단 업체명/로고 */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-xl bg-pink-50 flex items-center justify-center text-2xl font-bold text-pink-400 shadow-inner">
            {jobDetail.name[0]}
          </div>
          <div>
            <div className="text-2xl font-extrabold text-gray-800 mb-1">{jobDetail.name}</div>
            <div className="flex gap-2 text-sm text-gray-500">
              <span className="bg-gray-50 rounded px-2 py-0.5">{jobDetail.지역}</span>
              <span className="bg-gray-50 rounded px-2 py-0.5">{jobDetail.직종}</span>
              <span className="bg-gray-50 rounded px-2 py-0.5">{jobDetail.경력}</span>
              <span className="bg-gray-50 rounded px-2 py-0.5">{jobDetail.고용형태}</span>
            </div>
          </div>
        </div>
        {/* 모집 요약 */}
        <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-xl p-6 text-sm text-gray-700">
          <div><span className="font-bold">모집인원</span><br />{jobDetail.모집인원}</div>
          <div><span className="font-bold">모집분야</span><br />{jobDetail.모집분야}</div>
          <div><span className="font-bold">경력</span><br />{jobDetail.경력}</div>
          <div><span className="font-bold">우대사항</span><br />{jobDetail.우대사항}</div>
          <div><span className="font-bold">학력</span><br />{jobDetail.학력}</div>
          <div><span className="font-bold">연령</span><br />{jobDetail.연령}</div>
          <div><span className="font-bold">직무</span><br />{jobDetail.직무}</div>
          <div><span className="font-bold">성별</span><br />{jobDetail.성별}</div>
        </div>
        {/* 근무조건 */}
        <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-700">
          <div className="flex flex-wrap gap-4 mb-2">
            <span><span className="font-bold">근무기간</span> {jobDetail.근무기간}</span>
            <span><span className="font-bold">고용형태</span> {jobDetail.고용형태}</span>
            <span><span className="font-bold">급여</span> {jobDetail.급여}</span>
          </div>
          <div><span className="font-bold">복지</span>: {jobDetail.복지}</div>
        </div>
        {/* 상세설명 */}
        <div className="bg-white rounded-xl p-6 shadow text-gray-700 whitespace-pre-line">
          {jobDetail.상세설명}
        </div>
        <button className="px-5 py-2 rounded-full bg-[#1E293B] text-white font-bold shadow hover:bg-gray-800 transition text-sm self-center">지원하기</button>
        <Link href="/community?tab=job" className="mt-6 px-6 py-2 rounded-full bg-pink-100 text-pink-600 font-bold shadow hover:bg-pink-200 transition self-center">목록으로</Link>
      </div>
    </main>
  );
} 