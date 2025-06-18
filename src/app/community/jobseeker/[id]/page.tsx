'use client';
import Link from 'next/link';

const jobSeekers = [
  {
    id: 1,
    name: '김미용',
    desired: '헤어디자이너',
    region: '서울 강남구',
    career: '신입',
    intro: '밝고 성실하게 일하겠습니다! 고객과 소통하며 성장하고 싶어요.',
  },
  {
    id: 2,
    name: '이네일',
    desired: '네일아티스트',
    region: '부산 해운대구',
    career: '경력 2년',
    intro: '고객 만족을 최우선으로 생각합니다. 트렌드에 민감하고 꼼꼼한 성격입니다.',
  },
];

export default function JobSeekerDetail({ params }: { params: { id: string } }) {
  const seeker = jobSeekers.find(s => s.id === Number(params.id));

  if (!seeker) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="bg-white/80 rounded-2xl shadow-lg px-8 py-16 text-center text-gray-400 text-xl font-semibold">
          존재하지 않는 구직자입니다.
        </div>
        <Link href="/community?tab=job" className="mt-10 px-6 py-2 rounded-full bg-pink-100 text-pink-600 font-bold shadow hover:bg-pink-200 transition">목록으로</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-50 py-16">
      <div className="w-full max-w-xl bg-white/80 backdrop-blur rounded-2xl shadow-xl p-10 md:p-14 flex flex-col gap-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center text-2xl font-bold text-blue-400 shadow-inner">
            {seeker.name[0]}
          </div>
          <div>
            <div className="text-2xl font-extrabold text-gray-800 mb-1">{seeker.name}</div>
            <div className="flex gap-2 text-sm text-gray-500">
              <span className="bg-gray-50 rounded px-2 py-0.5">{seeker.region}</span>
              <span className="bg-gray-50 rounded px-2 py-0.5">{seeker.desired}</span>
              <span className="bg-gray-50 rounded px-2 py-0.5">{seeker.career}</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow text-gray-700 whitespace-pre-line">
          <span className="font-bold text-lg text-blue-500">자기소개</span>
          <div className="mt-2 text-base">{seeker.intro}</div>
        </div>
        <Link href="/community?tab=job" className="mt-6 px-6 py-2 rounded-full bg-pink-100 text-pink-600 font-bold shadow hover:bg-pink-200 transition self-center">목록으로</Link>
      </div>
    </main>
  );
} 