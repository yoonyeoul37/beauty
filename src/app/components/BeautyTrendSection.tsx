'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const trendData = [
  {
    image: '/images/makeup-1289325_640.jpg',
    title: "올가을 유행 예감, '슬릭컷' 스타일링 팁",
    tags: ['#시크함', '#도시적', '#연예인헤어'],
    link: '/community/1'
  },
  {
    image: '/images/cosmetics-9086984_640.jpg',
    title: '전문가 추천, 손이 화사해 보이는 네일 컬러',
    tags: ['#가을네일', '#톤업컬러', '#인기디자인'],
    link: '/community/2'
  },
  {
    image: '/images/chanel-4743979_1280.jpg',
    title: "환절기 필수! '속건조' 잡는 스킨케어 루틴",
    tags: ['#수분충전', '#꿀피부', '#홈케어'],
    link: '/community/3'
  },
];

const BeautyTrendSection = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            스타일로그's Pick: 오늘의 뷰티 트렌드
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            전문가가 엄선한 최신 뷰티 트렌드와 팁을 만나보세요.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendData.map((item, index) => (
            <Link 
              href={item.link} 
              key={index} 
              className="group block bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-3 line-clamp-2 h-[56px]">{item.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-amber-600 font-semibold text-sm group-hover:text-amber-700 transition-colors">
                  <span>더 알아보기</span>
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeautyTrendSection; 