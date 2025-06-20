import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function AppDownloadSection() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendLink = () => {
    // 여기에 실제 백엔드로 SMS 발송 요청을 보내는 로직이 들어갑니다.
    // 지금은 프론트엔드만 구현하므로, 콘솔에 로그만 출력합니다.
    if (phoneNumber) {
      alert(`입력하신 번호 ${phoneNumber}로 앱 다운로드 링크를 전송합니다. (테스트)`);
      console.log(`Sending SMS to: ${phoneNumber}`);
    } else {
      alert('전화번호를 입력해주세요.');
    }
  };

  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            어디서든, 간편하게
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            지금 바로 앱을 다운로드하고, 당신의 다음 스타일 변신을 예약하세요.
            <br />
            특별한 혜택이 당신을 기다립니다.
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          {/* 왼쪽 컨텐츠 */}
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-block p-4 bg-teal-100 rounded-2xl mb-6">
              <Image src="/file.svg" alt="logo" width={40} height={40} />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              앱으로 예약하고<br/>더 많은 혜택을 받으세요
            </h3>
            <p className="text-gray-500 mb-8">
              전화번호를 입력하시면 앱 다운로드 링크를<br/>
              문자 메시지로 바로 보내드립니다.
            </p>

            {/* 전화번호 입력 폼 */}
            <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto md:mx-0">
              {/* 국가번호 선택 (디자인용) */}
              <div className="flex-shrink-0">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-100 h-14 px-4 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors">
                  🇺🇸
                  <span>+1</span>
                  <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3 text-gray-500" />
                </button>
              </div>
              <input 
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="당신의 전화번호"
                className="w-full h-14 bg-gray-100 rounded-xl px-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
              />
              <button 
                onClick={handleSendLink}
                className="w-full sm:w-auto flex-shrink-0 bg-teal-500 text-white font-bold h-14 px-8 rounded-xl hover:bg-teal-600 transition-colors shadow-lg shadow-teal-500/30"
              >
                링크 받기
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4 max-w-md mx-auto md:mx-0">
              메시지 및 데이터 요금이 부과될 수 있습니다.
            </p>
            
            {/* 앱스토어 버튼 */}
            <div className="flex items-center justify-center md:justify-start gap-4 mt-12">
              <a href="#" className="flex items-center gap-3 bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-black transition-colors">
                <FontAwesomeIcon icon={faApple} className="text-2xl" />
                <div>
                  <p className="text-xs -mb-1">Download on the</p>
                  <p className="text-lg font-semibold">App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-black transition-colors">
                <FontAwesomeIcon icon={faGooglePlay} className="text-xl" />
                 <div>
                  <p className="text-xs -mb-1">GET IT ON</p>
                  <p className="text-lg font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* 오른쪽 이미지 */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image 
              src="https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="App in phone"
              width={500}
              height={500}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 