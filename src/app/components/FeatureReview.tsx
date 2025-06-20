"use client"
import Image from "next/image";

export default function FeatureReview() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 텍스트 컨텐츠 */}
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              최고의 책, 가까운 곳에
            </h2>
            <p className="text-gray-600">
              블록을 스크롤하면 마켓플레이스에서 최고의 건강 및 뷰티 비즈니스를 볼 수 있습니다.
            </p>
            <p className="text-gray-600">
              비즈니스 프로필에서 그들의 분위기를 확인하고 다른 사람들이 하는 말을 검증된 리뷰로 들어보세요. 그들의 작품 포트폴리오도 살펴볼 수 있습니다.
            </p>
            <p className="text-gray-600">
              시간을 절약하고 스트레스를 다른 사람에게 맡기세요. Tgana를 사용하면 다음 뷰티 예약을 무료로 쉽게 설정할 수 있습니다.
            </p>
          </div>

          {/* 이미지 컨텐츠 */}
          <div className="flex justify-center">
            <Image 
              src="https://images.pexels.com/photos/776079/pexels-photo-776079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Reviewing beauty service"
              width={500}
              height={500}
              className="rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 