'use client';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState, use } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';

const dummyPosts = [
  { id: 1, title: '오늘 날씨 너무 좋다!', author: '익명', date: '2024-05-25', comments: 3, likes: 12, content: `밖에 나가고 싶은 날씨네요 ☀️\n오늘은 정말 하늘도 맑고 바람도 선선해서 산책하기 딱 좋은 날이에요.\n저는 이런 날엔 카페에 가서 커피 한 잔 하면서 책 읽는 걸 좋아해요.\n여러분은 어떤 하루 보내고 계신가요?\n\n저녁에는 친구들이랑 근처 공원에서 피크닉도 할 예정이에요!\n다들 오늘 하루도 행복하게 보내세요 :)` },
  { id: 2, title: '요즘 핫한 헤어스타일?', author: '익명', date: '2024-05-25', comments: 5, likes: 3, content: '여러분은 어떤 스타일이 좋으세요?' },
  { id: 3, title: '미용실 추천 좀 해주세요', author: '익명', date: '2024-05-24', comments: 2, likes: 0, content: '강남 쪽 괜찮은 미용실 있을까요?' },
  { id: 4, title: '염색하고 왔어요!', author: '익명', date: '2024-05-23', comments: 4, likes: 1, content: '처음 해보는 애쉬그레이 완전 만족!' },
  { id: 5, title: '머리 감는 꿀팁', author: '익명', date: '2024-05-22', comments: 1, likes: 0, content: '두피에 자극 덜 주는 방법 공유해요.' },
];

// 댓글 더미 데이터 (id=1번 글에만 3개, 나머지는 0개)
const dummyComments: Record<number, { author: string; content: string; date: string }[]> = {
  1: [
    { author: '익명1', content: '저도 오늘 산책했어요! 날씨 최고~', date: '2024-05-25' },
    { author: '익명2', content: '공원 피크닉 부럽네요 :)', date: '2024-05-25' },
    { author: '익명3', content: '저는 집에서 커피 마시며 쉬는 중이에요.', date: '2024-05-25' },
  ],
  2: [],
  3: [],
  4: [],
  5: [],
};

export default function CommunityPostDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const post = dummyPosts.find(p => p.id === Number(id));
  const comments = dummyComments[Number(id)] || [];
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post?.likes ?? 0);

  if (!post) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="bg-white/80 rounded-2xl shadow-lg px-8 py-16 text-center text-gray-400 text-xl font-semibold">
          존재하지 않는 게시글입니다.
        </div>
        <Link href="/community" className="mt-10 px-6 py-2 rounded-full bg-pink-100 text-pink-600 font-bold shadow hover:bg-pink-200 transition">목록으로</Link>
      </main>
    );
  }

  const handleLike = () => {
    setLiked(v => !v);
    setLikeCount(c => liked ? c - 1 : c + 1);
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-50 py-16">
      <div className="w-full max-w-2xl bg-white/70 backdrop-blur rounded-2xl shadow-xl p-10 md:p-14 flex flex-col gap-6">
        <div className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">{post.title}</div>
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <span>{post.author}</span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>댓글 {post.comments}</span>
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 px-3 py-1 rounded-full font-bold shadow-sm border transition-all duration-150
              ${liked ? 'bg-pink-100 border-pink-300 text-pink-500' : 'bg-white/80 border-gray-200 text-gray-400 hover:bg-pink-50 hover:text-pink-500'}`}
            aria-label="좋아요"
          >
            <FontAwesomeIcon icon={liked ? faSolidHeart : faRegularHeart} className={`text-lg ${liked ? 'text-pink-400' : 'text-gray-300'}`} />
            <span>{likeCount}</span>
          </button>
        </div>
        <div className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
          {post.content}
        </div>
        {/* 댓글 목록 */}
        <div className="mt-10">
          <div className="font-bold text-gray-700 mb-4 text-lg">댓글 {comments.length}</div>
          {comments.length === 0 ? (
            <div className="text-gray-400 text-base py-8 text-center bg-white/60 rounded-xl shadow-inner">아직 댓글이 없습니다.</div>
          ) : (
            <div className="flex flex-col gap-4">
              {comments.map((c, i) => (
                <div key={i} className="bg-white/90 rounded-xl shadow p-5 flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-sm text-pink-500 font-bold">
                    {c.author}
                    <span className="text-gray-300">·</span>
                    <span className="text-xs text-gray-400">{c.date}</span>
                  </div>
                  <div className="text-gray-700 text-base whitespace-pre-line">{c.content}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Link href="/community" className="mt-10 px-6 py-2 rounded-full bg-pink-100 text-pink-600 font-bold shadow hover:bg-pink-200 transition">목록으로</Link>
    </main>
  );
} 