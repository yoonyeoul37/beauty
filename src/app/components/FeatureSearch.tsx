"use client"
import Image from "next/image";

export default function FeatureSearch() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* 텍스트 컨텐츠 */}
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              약속이 더 잘 이루어졌습니다
            </h2>
            <p className="text-gray-600">
              다음 번에 지역 이발사, 헤어 스타일리스트, 마사지 치료사 또는 네일 아티스트와의 약속을 원하시나요? 수염 다듬기, 눈썹 왁스 또는 딥 티슈 마사지 예약이 필요하신가요?
            </p>
            <p className="text-gray-600">
              스타일로그는 무료 뷰티 스케줄링 앱으로, 몇 초 만에 쉽게 찾고 예약할 수 있습니다. 더 이상 전화 태그가 없습니다. 언제 어디서나 연중무휴로 예약하세요.
            </p>
            <p className="text-gray-800 font-semibold">
              귀하의 지역에서 최고의 비즈니스를 발견하고 스타일로그로 즉시 예약하세요.
            </p>
          </div>

          {/* 이미지 컨텐츠 */}
          <div className="flex justify-center">
            <Image 
              src="/images/makeup-1289325_640.jpg" 
              alt="Applying makeup with a brush"
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