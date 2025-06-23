'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faStar, faMapMarkerAlt, faStore, faHeart as faSolidHeart, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useRouter, usePathname } from 'next/navigation';
import StickyHeader from '../components/StickyHeader';

// 타입 정의 추가
interface Post {
  id: number;
  title: string;
  preview: string;
  author: string;
  date: string;
  comments: number;
  likes?: number;
  content?: string;
}

interface Banner {
  title: string;
  desc: string;
  icon: any;
  bg: string;
  iconColor: string;
  ad?: boolean;
  link?: string;
}

const bannerData: Banner[] = [
  { title: '6월 신규회원 혜택!', desc: '가입만 해도 5,000P 증정', icon: faBullhorn, bg: 'bg-pink-50', iconColor: 'text-pink-400' },
  { title: '이번주 베스트 후기', desc: '실시간 인기글을 확인하세요', icon: faStar, bg: 'bg-purple-50', iconColor: 'text-purple-400' },
];

// 위치 기반 광고 더미 데이터
const locationAd: Banner = {
  title: '내 주변 프리미엄 헤어샵',
  desc: '지금 예약 시 20% 할인! (AD)',
  icon: faStore,
  bg: 'bg-yellow-50',
  iconColor: 'text-yellow-500',
  ad: true,
  link: '/ad/nearby',
};

const boardTabs = [
  { name: '자유수다', key: 'free', icon: faBullhorn },
  { name: '진짜 후기', key: 'review', icon: faStar },
  { name: '궁금해요', key: 'qna', icon: faMapMarkerAlt },
  { name: '하소연/썰', key: 'story', icon: faBullhorn },
  { name: '구인구직', key: 'job', icon: faStore },
];

const dummyPosts: Record<string, Post[]> = {
  free: [
    { id: 1, title: '오늘 날씨 너무 좋다!', preview: '밖에 나가고 싶은 날씨네요 ☀️', author: '익명', date: '2024-05-25', comments: 3, likes: 12, content: `밖에 나가고 싶은 날씨네요 ☀️\n오늘은 정말 하늘도 맑고 바람도 선선해서 산책하기 딱 좋은 날이에요.\n저는 이런 날엔 카페에 가서 커피 한 잔 하면서 책 읽는 걸 좋아해요.\n여러분은 어떤 하루 보내고 계신가요?\n\n저녁에는 친구들이랑 근처 공원에서 피크닉도 할 예정이에요!\n다들 오늘 하루도 행복하게 보내세요 :)` },
    { id: 2, title: '요즘 핫한 헤어스타일?', preview: '여러분은 어떤 스타일이 좋으세요?', author: '익명', date: '2024-05-25', comments: 5, likes: 3 },
    { id: 3, title: '미용실 추천 좀 해주세요', preview: '강남 쪽 괜찮은 미용실 있을까요?', author: '익명', date: '2024-05-24', comments: 2, likes: 0 },
    { id: 4, title: '염색하고 왔어요!', preview: '처음 해보는 애쉬그레이 완전 만족!', author: '익명', date: '2024-05-23', comments: 4, likes: 1 },
    { id: 5, title: '머리 감는 꿀팁', preview: '두피에 자극 덜 주는 방법 공유해요.', author: '익명', date: '2024-05-22', comments: 1, likes: 0 },
  ],
  review: [
    { id: 1, title: '강남 미용실 진짜 후기', preview: '가격도 괜찮고 디자이너님이 친절했어요!', author: '익명', date: '2024-05-24', comments: 2 },
    { id: 2, title: '네일샵 솔직 후기', preview: '깔끔하고 위생적이었어요!', author: '익명', date: '2024-05-23', comments: 1 },
  ],
  qna: [
    { id: 1, title: '염색 후 관리법?', preview: '색 빠짐 덜하게 하려면?', author: '익명', date: '2024-05-22', comments: 4 },
  ],
  job: [
    { id: 1, title: '강남 미용실 구인', preview: '경력 디자이너 구합니다.', author: '익명', date: '2024-05-21', comments: 0 },
  ],
  story: [
    { id: 1, title: '머리 망한 썰 ㅠㅠ', preview: '펌 망해서 눈물...', author: '익명', date: '2024-05-20', comments: 6 },
  ],
};

const POSTS_PER_PAGE = 5;

// 구인구직 카드 예시 데이터
const jobPosts: Array<{
  id: number;
  name: string;
  location: string;
  position: string;
  career: string;
  type: string;
  period: string;
  salary: string;
  benefit: string;
  premium: boolean;
  image?: string;
}> = [
  {
    id: 1,
    name: '엘더은살롱',
    location: '대구 수성구',
    position: '헤어디자이너',
    career: '경력 1~3년',
    type: '정규직',
    period: '근무기간 협의',
    salary: '추후협의',
    benefit: '4대보험, 식사제공, 교통비지원',
    premium: true,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&q=80',
  },
  {
    id: 2,
    name: '루미에르뷰티',
    location: '서울 강남구',
    position: '네일아티스트',
    career: '신입/경력',
    type: '계약직',
    period: '6개월~1년',
    salary: '월 250~300만원',
    benefit: '인센티브, 명절보너스, 자유휴가',
    premium: false,
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&q=80',
  },
];

// 구직자 카드 예시 데이터
const jobSeekers = [
  {
    id: 1,
    name: '김미용',
    desired: '헤어디자이너',
    region: '서울 강남구',
    career: '신입',
    intro: '밝고 성실하게 일하겠습니다!',
  },
  {
    id: 2,
    name: '이네일',
    desired: '네일아티스트',
    region: '부산 해운대구',
    career: '경력 2년',
    intro: '고객 만족을 최우선으로 생각합니다.',
  },
];

const cityOptions = ['지역', '서울', '부산', '대구'];
const districtOptions: Record<string, string[]> = {
  지역: ['구'],
  서울: ['구', '강남구', '강서구', '송파구', '마포구'],
  부산: ['구', '해운대구', '수영구', '동래구'],
  대구: ['구', '수성구', '중구', '달서구'],
};
const jobTypeOptions = ['직종', '헤어디자이너', '네일아티스트', '피부관리사', '메이크업아티스트', '에스테틱'];
const workPeriodOptions = ['근무기간', '주 3일', '주 4일', '주 5일', '주 6일', '풀타임', '파트타임', '협의'];
const employmentTypeOptions = ['고용형태', '정규직', '계약직', '인턴', '알바', '프리랜서'];
const experienceOptions = ['경력', '신입', '경력 1년 미만', '경력 1~3년', '경력 3~5년', '경력 5년 이상'];
const detailConditionOptions = ['상세조건', '4대보험', '식사제공', '교통비지원', '인센티브', '자유휴가', '교육지원'];

export default function CommunityMain() {
  const [activeTab, setActiveTab] = useState('free');
  const [page, setPage] = useState(1);
  const [city, setCity] = useState('지역');
  const [district, setDistrict] = useState('구');
  const [jobType, setJobType] = useState('직종');
  const [workPeriod, setWorkPeriod] = useState('근무기간');
  const [employmentType, setEmploymentType] = useState('고용형태');
  const [experience, setExperience] = useState('경력');
  const [detailCondition, setDetailCondition] = useState('상세조건');
  const [activeJobTab, setActiveJobTab] = useState<'employer' | 'seeker'>('employer');
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const banners = [...bannerData, locationAd];

  // 페이지네이션용 게시글 슬라이스
  const posts = dummyPosts[activeTab] || [];
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const pagedPosts = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <main style={{ minHeight: '100vh', background: '#F7FAFC', paddingBottom: '5rem' }}>
      {/* Sticky Header */}
      <StickyHeader isVisible={isHeaderVisible} />
      
      {/* 상단 여백 */}
      <div className="h-6" />
      
      {/* 광고형 배너 3칸 복구 */}
      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {banners.map((banner, i) => (
          <div key={i} className="relative group">
            {/* 홈 아이콘 - 6월 신규회원 혜택 카드에만 표시 */}
            {banner.title === '6월 신규회원 혜택!' && (
              <Link 
                href="/"
                className="absolute -left-2 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-amber-500 hover:scale-110 transition-all duration-200"
                style={{ top: '-50px' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </Link>
            )}
            
            <Link href={banner.link || '#'} className="block">
              <div className={`rounded-2xl shadow-md ${banner.bg} p-7 flex flex-col items-center text-gray-800 relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                <span className={`mb-3 text-3xl drop-shadow-lg ${banner.iconColor}`}>
                  <FontAwesomeIcon icon={banner.icon} />
                </span>
                <div className="font-bold text-xl mb-1 tracking-tight flex items-center gap-2">
                  {banner.title}
                  {banner.ad && (
                    <span className="ml-1 px-2 py-0.5 text-xs font-bold bg-yellow-300 text-white rounded shadow">AD</span>
                  )}
                </div>
                <div className={`text-sm ${banner.ad ? 'text-yellow-700' : 'opacity-80'}`}>{banner.desc}</div>
                {banner.ad && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 text-yellow-500 text-xs font-semibold">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> 내 위치 기반
                  </div>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* 게시판 탭 + 글쓰기 버튼 */}
      <div className="max-w-5xl mx-auto flex items-center mb-8 px-4">
        <div className="flex gap-3 md:gap-6">
          {boardTabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setPage(1); }}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-bold shadow-sm transition-all duration-200 text-sm
                ${activeTab === tab.key ? 'bg-gray-200 text-gray-800 scale-105' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              <FontAwesomeIcon icon={tab.icon} className={activeTab === tab.key ? 'text-gray-700' : 'text-gray-400'} />
              {tab.name}
            </button>
          ))}
        </div>
        {/* 글쓰기/공고등록 버튼: 구인구직 탭이 아닐 때만 노출 */}
        {activeTab !== 'job' && (
          <button
            className="ml-auto px-5 py-2 rounded-full bg-gray-200 text-gray-800 font-bold shadow hover:bg-gray-300 transition text-sm"
            onClick={() => {
              router.push(`/community/write?tab=${activeTab}`);
            }}
          >
            글쓰기
          </button>
        )}
      </div>
      {/* 게시글 리스트 */}
      <div className="max-w-5xl mx-auto px-4">
        {activeTab === 'job' ? (
          <>
            {/* 구인/구직 서브탭 */}
            <div className="flex gap-2 md:gap-4 mb-6">
              <button
                onClick={() => setActiveJobTab('employer')}
                className="px-5 py-2 rounded-full font-bold shadow-sm transition-all duration-200 text-sm"
                style={{
                  background: activeJobTab === 'employer' ? '#334155' : '#F3F4F6',
                  color: activeJobTab === 'employer' ? '#fff' : '#374151',
                  fontWeight: 700,
                  border: activeJobTab === 'employer' ? 'none' : '1.5px solid #E5E7EB'
                }}
              >구인공고</button>
              <button
                onClick={() => setActiveJobTab('seeker')}
                className="px-5 py-2 rounded-full font-bold shadow-sm transition-all duration-200 text-sm"
                style={{
                  background: activeJobTab === 'seeker' ? '#334155' : '#F3F4F6',
                  color: activeJobTab === 'seeker' ? '#fff' : '#374151',
                  fontWeight: 700,
                  border: activeJobTab === 'seeker' ? 'none' : '1.5px solid #E5E7EB'
                }}
              >구직자</button>
            </div>
            {/* 필터 바 + 등록 버튼 */}
            <div className="flex flex-wrap gap-4 items-center mb-6 p-4 bg-white rounded-xl shadow-sm border border-slate-200">
              {/* 지역 드롭다운 */}
              <div className="relative w-32">
                <select
                  className="w-full appearance-none bg-white border border-slate-300 rounded-lg py-2 pl-3 pr-8 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                  value={city}
                  onChange={e => {
                    setCity(e.target.value);
                    setDistrict('구');
                  }}
                >
                  {cityOptions.map((opt, idx) => <option key={opt + idx} value={opt}>{opt}</option>)}
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
              </div>
              {/* 구/군 드롭다운 */}
              <div className="relative w-32">
                <select
                  className="w-full appearance-none bg-white border border-slate-300 rounded-lg py-2 pl-3 pr-8 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                  value={district}
                  onChange={e => setDistrict(e.target.value)}
                >
                  {(districtOptions[city] || ['구']).map((opt, idx) => <option key={opt + idx} value={opt}>{opt}</option>)}
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
              </div>
              {/* 직종 드롭다운 */}
              <div className="relative w-32">
                <select
                  className="w-full appearance-none bg-white border border-slate-300 rounded-lg py-2 pl-3 pr-8 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                  value={jobType}
                  onChange={e => setJobType(e.target.value)}
                >
                  {jobTypeOptions.map((opt, idx) => <option key={opt + idx} value={opt}>{opt}</option>)}
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
              </div>
              {/* 근무기간 드롭다운 */}
              <div className="relative w-32">
                <select
                  className="w-full appearance-none bg-white border border-slate-300 rounded-lg py-2 pl-3 pr-8 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                  value={workPeriod}
                  onChange={e => setWorkPeriod(e.target.value)}
                >
                  {workPeriodOptions.map((opt, idx) => <option key={opt + idx} value={opt}>{opt}</option>)}
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
              </div>
              {/* 고용형태 드롭다운 */}
              <div className="relative w-32">
                <select
                  className="w-full appearance-none bg-white border border-slate-300 rounded-lg py-2 pl-3 pr-8 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                  value={employmentType}
                  onChange={e => setEmploymentType(e.target.value)}
                >
                  {employmentTypeOptions.map((opt, idx) => <option key={opt + idx} value={opt}>{opt}</option>)}
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
              </div>
              {/* 경력 드롭다운 */}
              <div className="relative w-32">
                <select
                  className="w-full appearance-none bg-white border border-slate-300 rounded-lg py-2 pl-3 pr-8 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                  value={experience}
                  onChange={e => setExperience(e.target.value)}
                >
                  {experienceOptions.map((opt, idx) => <option key={opt + idx} value={opt}>{opt}</option>)}
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
              </div>
              {/* 상세조건 드롭다운 */}
              <div className="relative flex-1 min-w-[128px]">
                <select
                  className="w-full appearance-none bg-white border border-slate-300 rounded-lg py-2 pl-3 pr-8 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                  value={detailCondition}
                  onChange={e => setDetailCondition(e.target.value)}
                >
                  {detailConditionOptions.map((opt, idx) => <option key={opt + idx} value={opt}>{opt}</option>)}
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
              </div>
              {/* 등록 버튼 */}
              <button
                className="ml-auto px-5 py-2 rounded-lg font-bold shadow-sm hover:bg-slate-900 transition text-sm bg-slate-800 text-white"
                onClick={() => {
                  if (activeJobTab === 'employer') {
                    router.push('/community/job/write');
                  } else {
                    router.push('/community/jobseeker/write');
                  }
                }}
              >
                {activeJobTab === 'employer' ? '공고 등록' : '구직 등록'}
              </button>
            </div>
            {/* 구인/구직 리스트 */}
            {activeJobTab === 'employer' ? (
              <div className="space-y-6">
                {jobPosts.filter(job =>
                  (city === '지역' || job.location.includes(city)) &&
                  (district === '구' || job.location.includes(district)) &&
                  (jobType === '직종' || job.position === jobType) &&
                  (employmentType === '고용형태' || job.type === employmentType)
                ).map(job => (
                  <div key={job.id} className="rounded-2xl bg-white shadow-md hover:shadow-xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6 transition-all duration-300 border hover:border-amber-400">
                    {/* 이미지 or 이니셜 */}
                    <div className="flex-shrink-0">
                      {job.image ? (
                        <img
                          src={job.image}
                          alt={job.name}
                          className="w-20 h-20 object-cover rounded-full shadow-lg"
                        />
                      ) : (
                        <div className="w-20 h-20 flex items-center justify-center text-3xl font-bold text-slate-700 bg-slate-100 rounded-full shadow-inner select-none">
                          {job.name[0]}
                        </div>
                      )}
                    </div>

                    {/* 메인 정보 */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-extrabold text-slate-800">{job.name}</h3>
                        {job.premium && <span className="px-3 py-1 text-xs font-bold bg-amber-400 text-white rounded-full shadow-sm">프리미엄</span>}
                      </div>
                      <div className="flex flex-wrap items-center divide-x divide-slate-200 text-sm text-slate-500 mb-3">
                        <span className="pr-3 font-medium text-slate-700">{job.location}</span>
                        <span className="px-3">{job.position}</span>
                        <span className="px-3">{job.career}</span>
                        <span className="px-3">{job.type}</span>
                      </div>
                      <div className="flex flex-col gap-1.5 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-800">💰 급여: {job.salary}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-600">✨ 복지: {job.benefit}</span>
                        </div>
                      </div>
                    </div>

                    {/* 상세보기 버튼 */}
                    <div className="w-full md:w-auto mt-4 md:mt-0 self-center">
                      <Link 
                        href={`/community/job/${job.id}`} 
                        className="w-full block text-center px-6 py-3 rounded-xl bg-slate-800 text-white font-bold shadow-md hover:bg-slate-900 transition-colors text-sm cursor-pointer transform hover:-translate-y-0.5"
                      >
                        상세보기
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {jobSeekers.map((seeker, idx) => (
                  <Link href={`/community/jobseeker/${seeker.id}`} key={seeker.id} className="block group">
                    <div className="rounded-2xl bg-white shadow-md hover:shadow-lg border border-[#334155]/20 hover:border-[#334155] p-6 flex flex-col md:flex-row items-stretch gap-6 transition-all duration-200 group-hover:scale-[1.01] cursor-pointer relative h-[120px] min-h-[120px]">
                      <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center text-2xl font-bold text-blue-400 shadow-inner">
                        {seeker.name[0]}
                      </div>
                      <div className="flex-1 flex flex-col gap-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg font-extrabold text-gray-800 group-hover:underline">{seeker.name}</span>
                          <span className="ml-2 px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">구직자</span>
                        </div>
                        <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-1">
                          <span key={seeker.id + '-region'} className="bg-gray-50 rounded px-2 py-0.5">{seeker.region}</span>
                          <span key={seeker.id + '-desired'} className="bg-gray-50 rounded px-2 py-0.5">{seeker.desired}</span>
                          <span key={seeker.id + '-career'} className="bg-gray-50 rounded px-2 py-0.5">{seeker.career}</span>
                        </div>
                        <div className="text-gray-700 text-sm">{seeker.intro}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            {posts.length === 0 ? (
              <div className="text-center text-gray-400 py-20 text-lg">아직 게시글이 없습니다.</div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-5">
                  {pagedPosts.map((post: Post) => (
                    <Link href={`/community/${post.id}`} key={post.id} className="block">
                      <div className="rounded-xl bg-white shadow-sm p-6 flex flex-col hover:scale-[1.01] hover:shadow-md transition-all duration-200 cursor-pointer">
                        <div className="font-bold text-lg mb-1 text-gray-800 truncate">{post.title}</div>
                        <div className="text-gray-500 text-base mb-2 line-clamp-3" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{post.preview.repeat(6)}</div>
                        <div className="flex items-center gap-3 text-xs text-gray-400 mt-auto">
                          <span>{post.author}</span>
                          <span>·</span>
                          <span>{post.date}</span>
                          <span>·</span>
                          <span>댓글 {post.comments}</span>
                          <span className="flex items-center gap-1 ml-2 text-pink-400 font-semibold">
                            <FontAwesomeIcon icon={faSolidHeart} className="text-xs" />
                            <span>{post.likes ?? 0}</span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                {/* 페이지네이션 */}
                <div className="flex justify-center gap-2 mt-10">
                  {[...Array(totalPages)].map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setPage(idx + 1)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold border transition-all duration-150
                        ${page === idx + 1 ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white border-gray-700 shadow-lg' : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:text-gray-700 hover:border-gray-300'}`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </main>
  );
}
