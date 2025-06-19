"use client";
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import ReviewModal from '../components/ReviewModal';

const dummyReviews = [
  { user: "user01", content: "정말 친절하고 실력도 좋아요!", rating: 5, date: "2024-03-25" },
  { user: "user02", content: "가격도 합리적이고 만족스러웠어요.", rating: 4, date: "2024-03-24" },
  { user: "user03", content: "분위기가 좋아서 또 가고 싶어요.", rating: 5, date: "2024-03-23" },
];

// 카드와 동일한 별점 컴포넌트
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <FontAwesomeIcon
        key={star}
        icon={star <= rating ? faStarSolid : faStarRegular}
        className={star <= rating ? "text-yellow-400" : "text-gray-300"}
        style={{ fontSize: '14px', filter: 'url(#round)' }}
      />
    ))}
  </div>
);

export default function ReviewPage() {
  const searchParams = useSearchParams();
  const shop = searchParams.get("shop") || "알 수 없음";
  const [selectedReview, setSelectedReview] = useState<null | {
    nickname: string;
    text: string;
    rating: number;
    date: string;
  }>(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16">
      <div style={{ background: '#F7FAFC', borderRadius: '1rem', boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }} className="p-8 w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4 text-pink-600">{shop} 리뷰</h1>
        <ul className="space-y-4">
          {dummyReviews.map((review, idx) => (
            <li 
              key={idx} 
              className="border-b pb-4 cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
              onClick={() => setSelectedReview({
                nickname: review.user,
                text: review.content,
                rating: review.rating,
                date: review.date
              })}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-gray-700">{review.user}</span>
                <StarRating rating={review.rating} />
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <div className="text-gray-600">{review.content}</div>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <a href="/" className="text-pink-500 underline">메인으로 돌아가기</a>
        </div>
      </div>

      {/* SVG 필터 추가 - 별을 둥글게 만들기 위한 필터 */}
      <svg width="0" height="0" className="hidden">
        <defs>
          <filter id="round">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="round" />
            <feBlend in="SourceGraphic" in2="round" />
          </filter>
        </defs>
      </svg>

      {/* Review Modal */}
      {selectedReview && (
        <ReviewModal
          isOpen={!!selectedReview}
          onClose={() => setSelectedReview(null)}
          review={selectedReview}
          salonName={shop}
        />
      )}
    </div>
  );
} 