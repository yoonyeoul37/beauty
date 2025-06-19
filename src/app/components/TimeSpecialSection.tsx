import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import StarRating from './StarRating';
import { timeSpecialReviews } from '../data/reviews';
import { useState } from 'react';
import ReviewModal from './ReviewModal';
import TestDropdown from './TestDropdown';

interface TimeSpecialSectionProps {
  randomSalonIndex: number;
  bigCardIdx: number;
  setBigCardIdx: (index: number) => void;
  clickedCard: number;
  setClickedCard: (index: number) => void;
}

// 가격 데이터
const salonPrices = [
  { original: 150000, special: 105000 },
  { original: 130000, special: 91000 },
  { original: 140000, special: 98000 },
  { original: 160000, special: 112000 },
  { original: 120000, special: 84000 },
  { original: 170000, special: 119000 },
];

// 이미지 데이터
const salonImages = [
  "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1920",  // 모던한 화이트 인테리어
  "https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=1920",  // 고급스러운 스타일링 공간
  "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=1920",  // 세련된 미용실 인테리어
  "https://images.pexels.com/photos/3985298/pexels-photo-3985298.jpeg?auto=compress&cs=tinysrgb&w=1920",  // 밝은 조명의 미용실
  "https://images.pexels.com/photos/3985320/pexels-photo-3985320.jpeg?auto=compress&cs=tinysrgb&w=1920",  // 깔끔한 화이트 인테리어
  "https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=1920"   // 모던한 스타일링 공간
];

export default function TimeSpecialSection({
  randomSalonIndex,
  bigCardIdx,
  setBigCardIdx,
  clickedCard,
  setClickedCard
}: TimeSpecialSectionProps) {
  const salonNames = Object.keys(timeSpecialReviews);
  const [selectedSalon, setSelectedSalon] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortType, setSortType] = useState<'distance' | 'review' | 'price'>('distance');

  const handleSort = (type: string) => {
    setSortType(type as 'distance' | 'review' | 'price');
    // 여기에 정렬 로직 추가
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1240px] mx-auto">
        {/* 섹션 헤더 */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">타임스페셜</h2>
            <p className="text-gray-600">지금 바로 예약하고 특별한 혜택을 받으세요</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                {sortType === 'distance' && '거리순'}
                {sortType === 'review' && '리뷰순'}
                {sortType === 'price' && '가격순'}
                <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
              </button>
              <TestDropdown 
                isOpen={isDropdownOpen}
                onClose={() => setIsDropdownOpen(false)}
                onSort={handleSort}
              />
            </div>
            <button className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              전체보기
            </button>
          </div>
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {salonNames.slice(0, 6).map((salonName, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
                clickedCard === idx ? 'transform scale-[1.02]' : ''
              }`}
              style={{
                boxShadow: clickedCard === idx
                  ? '0 10px 40px rgba(0,0,0,0.12)'
                  : '0 4px 20px rgba(0,0,0,0.08)'
              }}
              onClick={() => setClickedCard(idx === clickedCard ? -1 : idx)}
            >
              {/* 이미지 */}
              <div className="relative h-48">
                <div className="relative w-full h-full">
                  <Image
                    src={salonImages[idx]}
                    alt={salonName}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={90}
                    priority={idx < 3}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,...`}
                  />
                </div>
                <button 
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setBigCardIdx(idx === bigCardIdx ? -1 : idx);
                  }}
                >
                  <FontAwesomeIcon
                    icon={idx === bigCardIdx ? faHeartSolid : faHeartRegular}
                    className={idx === bigCardIdx ? "text-red-500" : "text-gray-400"}
                  />
                </button>
              </div>

              {/* 컨텐츠 */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{salonName}</h3>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      <span>강남구 신사동</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <StarRating rating={4.5} />
                    <button 
                      className="text-sm text-gray-500 mt-1 hover:text-pink-500 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (timeSpecialReviews[salonName]?.length > 0) {
                          setSelectedSalon(salonName);
                        }
                      }}
                    >
                      {timeSpecialReviews[salonName]?.length || 0} 리뷰
                    </button>
                  </div>
                </div>

                {/* 타임 스페셜 정보 */}
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <FontAwesomeIcon icon={faClock} className="text-gray-400" />
                    <span className="text-sm">오늘 17:00 - 19:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500 line-through">₩{salonPrices[idx].original.toLocaleString()}</span>
                      <span className="text-lg font-bold ml-2">₩{salonPrices[idx].special.toLocaleString()}</span>
                    </div>
                    <span className="text-red-500 font-bold">30% OFF</span>
                  </div>
                </div>

                {/* 예약 버튼 */}
                <button 
                  className="w-full py-3 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    // 예약 로직
                  }}
                >
                  예약하기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Modal */}
      {selectedSalon && (
        <ReviewModal
          isOpen={!!selectedSalon}
          onClose={() => setSelectedSalon(null)}
          salonName={selectedSalon}
          reviews={timeSpecialReviews[selectedSalon].map(review => ({
            nickname: review.nickname,
            text: review.text,
            rating: 5 // 기본값으로 5점 설정
          }))}
          totalReviews={timeSpecialReviews[selectedSalon].length}
          averageRating={4.5} // 기본값으로 4.5점 설정
        />
      )}
    </section>
  );
} 