'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStore, 
  faMapMarkerAlt, 
  faClock, 
  faPhone, 
  faEdit,
  faSave,
  faUpload,
  faStar,
  faImage,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  
  const [businessData, setBusinessData] = useState({
    businessName: '스타일로그 헤어샵',
    category: '헤어',
    description: '10년 경력의 전문가들이 운영하는 프리미엄 헤어샵입니다.',
    phone: '02-1234-5678',
    email: 'stylelog@example.com',
    address: '서울시 강남구 테헤란로 123',
    averageRating: 4.8,
    totalReviews: 127
  });

  const handleSave = () => {
    setIsEditing(false);
    alert('업체 정보가 저장되었습니다.');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        className={`text-sm ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">업체 관리</h1>
              <p className="text-gray-600">업체 정보를 관리하고 고객과 소통하세요</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-600">평균 평점</div>
                <div className="flex items-center gap-1">
                  {renderStars(businessData.averageRating)}
                  <span className="text-sm font-medium text-gray-900 ml-1">
                    {businessData.averageRating}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-200"
              >
                <FontAwesomeIcon icon={isEditing ? faSave : faEdit} className="mr-2" />
                {isEditing ? '저장' : '편집'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 사이드바 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              {/* 업체 프로필 카드 */}
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={faStore} className="text-3xl text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{businessData.businessName}</h3>
                <p className="text-sm text-gray-600">{businessData.category}</p>
              </div>

              {/* 통계 */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">총 리뷰</span>
                  <span className="font-semibold text-gray-900">{businessData.totalReviews}</span>
                </div>
              </div>

              {/* 네비게이션 */}
              <nav className="space-y-2">
                {[
                  { id: 'profile', label: '업체 정보', icon: faStore },
                  { id: 'images', label: '이미지 관리', icon: faImage },
                  { id: 'location', label: '위치 정보', icon: faLocationDot }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <FontAwesomeIcon icon={tab.icon} className="w-4" />
                    <span className="text-sm font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* 메인 콘텐츠 */}
          <div className="lg:col-span-3">
            {/* 업체 정보 탭 */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">업체 정보</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 기본 정보 */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">기본 정보</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">업체명</label>
                      <input
                        type="text"
                        value={businessData.businessName}
                        onChange={(e) => setBusinessData({...businessData, businessName: e.target.value})}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:bg-gray-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">업종</label>
                      <input
                        type="text"
                        value={businessData.category}
                        disabled
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">업체 소개</label>
                      <textarea
                        value={businessData.description}
                        onChange={(e) => setBusinessData({...businessData, description: e.target.value})}
                        disabled={!isEditing}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:bg-gray-50 resize-none"
                      />
                    </div>
                  </div>

                  {/* 연락처 정보 */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">연락처 정보</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">전화번호</label>
                      <input
                        type="tel"
                        value={businessData.phone}
                        onChange={(e) => setBusinessData({...businessData, phone: e.target.value})}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:bg-gray-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
                      <input
                        type="email"
                        value={businessData.email}
                        onChange={(e) => setBusinessData({...businessData, email: e.target.value})}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:bg-gray-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">주소</label>
                      <input
                        type="text"
                        value={businessData.address}
                        onChange={(e) => setBusinessData({...businessData, address: e.target.value})}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:bg-gray-50"
                      />
                    </div>
                  </div>
                </div>

                {isEditing && (
                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={handleSave}
                      className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-200"
                    >
                      <FontAwesomeIcon icon={faSave} className="mr-2" />
                      저장
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* 이미지 관리 탭 */}
            {activeTab === 'images' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">이미지 관리</h2>
                
                <div className="text-center py-12">
                  <FontAwesomeIcon icon={faImage} className="text-4xl text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">이미지 업로드</h3>
                  <p className="text-gray-600 mb-4">
                    업체 사진, 작업 사진, 인테리어 사진 등을 업로드할 수 있습니다.
                  </p>
                  <button className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-200">
                    <FontAwesomeIcon icon={faUpload} className="mr-2" />
                    이미지 업로드
                  </button>
                </div>
              </div>
            )}

            {/* 위치 정보 탭 */}
            {activeTab === 'location' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">위치 정보</h2>
                
                <div className="text-center py-12">
                  <FontAwesomeIcon icon={faLocationDot} className="text-4xl text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">위치 설정</h3>
                  <p className="text-gray-600 mb-4">
                    정확한 위치는 지도 API를 통해 설정할 수 있습니다.
                  </p>
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                    <span>• 카카오맵 API</span>
                    <span>• 네이버맵 API</span>
                    <span>• Google Maps API</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 