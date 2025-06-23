'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faBuilding, 
  faEnvelope, 
  faLock, 
  faEye, 
  faEyeSlash,
  faArrowLeft,
  faSpinner,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'user' | 'business'>('user');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // 시뮬레이션된 로그인 처리
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      // 성공 후 홈으로 리다이렉트
      setTimeout(() => {
        window.location.href = '/';
      }, 1500);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 flex items-center justify-center p-4">
      {/* 배경 애니메이션 요소들 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-32 h-32 bg-zinc-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* 뒤로가기 버튼 */}
        <Link 
          href="/"
          className="absolute -top-16 left-0 flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 group"
        >
          <FontAwesomeIcon 
            icon={faArrowLeft} 
            className="transition-transform duration-300 group-hover:-translate-x-1" 
          />
          <span className="text-sm font-medium">홈으로 돌아가기</span>
        </Link>

        {/* 메인 카드 */}
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/30">
          {/* 로고 및 제목 */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">스타일로그</h1>
            <p className="text-gray-600 text-sm">당신의 뷰티 여정을 시작하세요</p>
          </div>

          {/* 탭 버튼들 */}
          <div className="flex bg-gray-100 rounded-2xl p-1 mb-8">
            <button
              onClick={() => setActiveTab('user')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeTab === 'user'
                  ? 'bg-white text-amber-600 shadow-md transform scale-105'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <FontAwesomeIcon icon={faUser} className="text-base" />
              <span>일반 로그인</span>
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeTab === 'business'
                  ? 'bg-white text-amber-600 shadow-md transform scale-105'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <FontAwesomeIcon icon={faBuilding} className="text-base" />
              <span>사업자 로그인</span>
            </button>
          </div>

          {/* 로그인 폼 */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 이메일 입력 */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-amber-500" />
                이메일
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                  placeholder="이메일을 입력하세요"
                  required
                />
              </div>
            </div>

            {/* 비밀번호 입력 */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <FontAwesomeIcon icon={faLock} className="text-amber-500" />
                비밀번호
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                  placeholder="비밀번호를 입력하세요"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>

            {/* 추가 옵션들 */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                  className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                />
                로그인 상태 유지
              </label>
              <Link href="#" className="text-sm text-amber-600 hover:text-amber-700 transition-colors duration-200">
                비밀번호 찾기
              </Link>
            </div>

            {/* 로그인 버튼 */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-xl font-medium text-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                isSuccess 
                  ? 'bg-emerald-600 hover:bg-emerald-700' 
                  : 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                  로그인 중...
                </div>
              ) : isSuccess ? (
                <div className="flex items-center justify-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  로그인 성공!
                </div>
              ) : (
                `${activeTab === 'user' ? '일반' : '사업자'} 로그인`
              )}
            </button>
          </form>

          {/* 회원가입 링크 */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              아직 계정이 없으신가요?{' '}
              <Link href="#" className="text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200">
                회원가입
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 