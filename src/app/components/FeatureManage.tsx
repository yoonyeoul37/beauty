"use client"
import Image from "next/image";

export default function FeatureManage() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 이미지 컨텐츠 */}
          <div className="flex justify-center">
            <Image 
              src="https://images.pexels.com/photos/5676016/pexels-photo-5676016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Managing appointments"
              width={500}
              height={500}
              className="rounded-3xl object-cover shadow-xl"
            />
          </div>

          {/* 텍스트 컨텐츠 */}
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              무슨 일 있어요? 우리가 당신을 잡았습니다.
            </h2>
            <p className="text-gray-600">
              무료 온라인 예약 앱인 Tgana를 다운로드하여 어디서든 예약을 관리하고, 전화를 받지 않고 일정을 변경하거나 취소하세요.
            </p>
            <p className="text-gray-600">
              그리고 우리는 삶이 바빠진다는 것을 알기 때문에, 여러분께 상기시켜 드리겠습니다. 다른 약속을 절대 잊거나 놓칠 수 없습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 