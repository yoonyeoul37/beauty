import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';
import StarRating from './StarRating';
import { timeSpecialReviews } from '../data/reviews';

interface TimeSpecialSectionProps {
  randomSalonIndex: number;
  bigCardIdx: number;
  setBigCardIdx: (index: number) => void;
  clickedCard: number;
  setClickedCard: (index: number) => void;
}

const salonImages = [
  'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg',  // 모던한 헤어살롱
  'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg',  // 스타일리시한 미용실
  'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg',  // 네일아트샵
  'https://images.pexels.com/photos/3985298/pexels-photo-3985298.jpeg',  // 스파
  'https://images.pexels.com/photos/3985320/pexels-photo-3985320.jpeg',  // 메이크업
  'https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg',  // 프리미엄 살롱
];

const salonPrices = [
  { original: 70000, special: 49000 },
  { original: 85000, special: 59500 },
  { original: 65000, special: 45500 },
  { original: 90000, special: 63000 },
  { original: 75000, special: 52500 },
  { original: 80000, special: 56000 },
];

export default function TimeSpecialSection({
  randomSalonIndex,
  bigCardIdx,
  setBigCardIdx,
  clickedCard,
  setClickedCard
}: TimeSpecialSectionProps) {
  const salonNames = Object.keys(timeSpecialReviews);

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1240px] mx-auto">
        {/* 섹션 헤더 */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">타임스페셜</h2>
            <p className="text-gray-600">지금 바로 예약하고 특별한 혜택을 받으세요</p>
          </div>
          <div className="flex gap-4">
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
                    <span className="text-sm text-gray-500 mt-1">
                      {timeSpecialReviews[salonName]?.length || 0} 리뷰
                    </span>
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
                <button className="w-full py-3 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors">
                  예약하기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 