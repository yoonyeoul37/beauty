'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faStar, faMapMarkerAlt, faStore } from '@fortawesome/free-solid-svg-icons';

// 타입 정의 추가
interface Post {
  id: number;
  title: string;
  preview: string;
  author: string;
  date: string;
  comments: number;
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
  { name: '구인구직', key: 'job', icon: faStore },
  { name: '하소연/썰', key: 'story', icon: faBullhorn },
];

const dummyPosts: Record<string, Post[]> = {
  free: [
    { id: 1, title: '오늘 날씨 너무 좋다!', preview: '밖에 나가고 싶은 날씨네요 ☀️', author: '익명', date: '2024-05-25', comments: 3, content: `밖에 나가고 싶은 날씨네요 ☀️\n오늘은 정말 하늘도 맑고 바람도 선선해서 산책하기 딱 좋은 날이에요.\n저는 이런 날엔 카페에 가서 커피 한 잔 하면서 책 읽는 걸 좋아해요.\n여러분은 어떤 하루 보내고 계신가요?\n\n저녁에는 친구들이랑 근처 공원에서 피크닉도 할 예정이에요!\n다들 오늘 하루도 행복하게 보내세요 :)` },
    { id: 2, title: '요즘 핫한 헤어스타일?', preview: '여러분은 어떤 스타일이 좋으세요?', author: '익명', date: '2024-05-25', comments: 5 },
    { id: 3, title: '미용실 추천 좀 해주세요', preview: '강남 쪽 괜찮은 미용실 있을까요?', author: '익명', date: '2024-05-24', comments: 2 },
    { id: 4, title: '염색하고 왔어요!', preview: '처음 해보는 애쉬그레이 완전 만족!', author: '익명', date: '2024-05-23', comments: 4 },
    { id: 5, title: '머리 감는 꿀팁', preview: '두피에 자극 덜 주는 방법 공유해요.', author: '익명', date: '2024-05-22', comments: 1 },
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

export default function CommunityMain() {
  const [activeTab, setActiveTab] = useState('free');
  const [page, setPage] = useState(1);
  const banners = [...bannerData, locationAd];

  // 페이지네이션용 게시글 슬라이스
  const posts = dummyPosts[activeTab] || [];
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const pagedPosts = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* 상단 카드형 배너 */}
      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {banners.map((banner, i) => (
          <Link href={banner.link || '#'} key={i} className="group">
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
        ))}
      </div>
      {/* 게시판 탭 */}
      <div className="max-w-3xl mx-auto flex gap-3 md:gap-6 mb-8 px-4">
        {boardTabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => { setActiveTab(tab.key); setPage(1); }}
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-bold shadow-sm transition-all duration-200 text-sm md:text-base
              ${activeTab === tab.key ? 'bg-pink-100 text-pink-600 scale-105' : 'bg-white/90 text-gray-700 hover:bg-pink-50'}`}
          >
            <FontAwesomeIcon icon={tab.icon} className={activeTab === tab.key ? 'text-pink-400' : 'text-gray-400'} />
            {tab.name}
          </button>
        ))}
      </div>
      {/* 게시글 리스트 */}
      <div className="max-w-3xl mx-auto px-4">
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
                    ${page === idx + 1 ? 'bg-pink-500 text-white border-pink-500 shadow' : 'bg-white text-gray-500 border-gray-200 hover:bg-pink-100 hover:text-pink-600'}`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
} 