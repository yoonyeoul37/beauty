"use client"
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChartLine, faUsers, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

export default function BusinessSection() {
  const features = [
    {
      icon: faCalendarCheck,
      title: "간편한 예약 관리",
      description: "온라인으로 24시간 예약을 받고, 캘린더에서 모든 스케줄을 한눈에 확인하세요.",
      color: "text-indigo-500"
    },
    {
      icon: faUsers,
      title: "스마트한 고객 관리",
      description: "고객 정보를 체계적으로 관리하고, 타겟 마케팅으로 단골 고객을 늘려보세요.",
      color: "text-purple-500"
    },
    {
      icon: faChartLine,
      title: "매출 데이터 분석",
      description: "일별, 월별 매출 데이터를 시각적인 차트로 분석하고 비즈니스 성장을 계획하세요.",
      color: "text-pink-500"
    }
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* 왼쪽 컨텐츠 (이미지) */}
          <div className="md:w-1/2 w-full">
            <div className="relative">
              <Image 
                src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Business meeting"
                width={600}
                height={600}
                className="rounded-3xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-indigo-500 text-white p-6 rounded-2xl shadow-lg w-64">
                <p className="text-3xl font-bold">+25%</p>
                <p className="text-sm">평균 매출 성장률</p>
              </div>
            </div>
          </div>
          
          {/* 오른쪽 컨텐츠 (텍스트) */}
          <div className="md:w-1/2 w-full text-center md:text-left">
            <span className="text-indigo-600 font-semibold mb-2 inline-block">FOR BUSINESS PARTNERS</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              사장님의 비즈니스를<br/>한 단계 성장시키세요
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              저희와 함께라면 더 많은 고객을 만나고, 더 효율적으로 샵을 운영할 수 있습니다.
              지금 바로 비즈니스 파트너로 등록하세요.
            </p>

            <div className="space-y-6 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center bg-gray-100 ${feature.color}`}>
                    <FontAwesomeIcon icon={feature.icon} className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">{feature.title}</h4>
                    <p className="text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-gray-900 text-white font-bold py-4 px-8 rounded-full hover:bg-black transition-colors text-lg inline-flex items-center gap-2 shadow-lg">
              비즈니스 시작하기
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 