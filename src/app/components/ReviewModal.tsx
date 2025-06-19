"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';
import { useState } from 'react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  salonName: string;
  reviews: Array<{
    nickname: string;
    text: string;
    rating: number;
  }>;
  address?: string;
  totalReviews?: number;
  averageRating?: number;
}

export default function ReviewModal({ 
  isOpen, 
  onClose, 
  salonName, 
  reviews,
  address = "강남구 신사동",
  totalReviews = 0,
  averageRating = 5
}: ReviewModalProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(reviews.length / 5);

  if (!isOpen) return null;

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FontAwesomeIcon
          key={star}
          icon={star <= rating ? faStarSolid : faStarRegular}
          className={star <= rating ? "text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-2xl w-full max-w-lg relative transform transition-all"
        style={{
          maxHeight: 'calc(100vh - 2rem)',
          overflowY: 'auto'
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 w-8 h-8 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full flex items-center justify-center transition-all z-10"
        >
          <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
        </button>

        {/* Header Image */}
        <div className="relative h-48 w-full">
          <Image
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMDZfMjQ4%2FMDAxNzQxMjMxNDEzMjA1.NMlLTOkPOOQ1bBLuJ1SoBpME8lOfwZ860k521zNXyMQg.zT73UtiPMXcmSG4kJ4U_5MsZBMIAJwSdR2YSuDkCQQMg.PNG%2F%25B9%25CC%25BF%25EB%25BD%25C7_%25C1%25B6%25B8%25ED_3.png&type=a340"
            alt={salonName}
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            priority
          />
        </div>

        <div className="p-6">
          {/* Salon Info */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">{salonName}</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <StarRating rating={averageRating} />
              <span className="text-gray-600">{averageRating} ({totalReviews}개의 리뷰)</span>
            </div>
            <p className="text-gray-500">{address}</p>
          </div>

          {/* Reviews Section */}
          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4">고객 리뷰</h3>
            <div className="space-y-6">
              {reviews.slice((currentPage - 1) * 5, currentPage * 5).map((review, idx) => (
                <div key={idx} className="pb-4 border-b last:border-b-0">
                  <div className="flex items-center gap-2 mb-2">
                    <StarRating rating={review.rating} />
                    <span className="font-medium">{review.nickname}</span>
                  </div>
                  <p className="text-gray-600">{review.text}</p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-6">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
                >
                  이전
                </button>
                <span className="text-gray-600">{currentPage} / {totalPages}</span>
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
                >
                  다음
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 