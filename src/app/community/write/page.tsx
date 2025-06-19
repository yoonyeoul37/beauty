'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function WritePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') || 'free';
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    setIsSubmitting(true);
    
    // 실제로는 API 호출을 여기에 추가
    setTimeout(() => {
      alert('글이 성공적으로 등록되었습니다!');
      router.push('/community');
    }, 1000);
  };

  const getTabName = (tabKey: string) => {
    const tabNames: Record<string, string> = {
      free: '자유수다',
      review: '진짜 후기',
      qna: '궁금해요',
      story: '하소연/썰'
    };
    return tabNames[tabKey] || '자유수다';
  };

  return (
    <main style={{ minHeight: '100vh', background: '#F7FAFC', paddingBottom: '5rem' }}>
      {/* 헤더 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-800">{getTabName(tab)} 글쓰기</h1>
            <p className="text-sm text-gray-500">새로운 글을 작성해주세요</p>
          </div>
        </div>
      </div>

      {/* 글쓰기 폼 */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 제목 입력 */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              제목
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-200 focus:border-pink-400 transition-colors"
              placeholder="제목을 입력해주세요"
              maxLength={100}
            />
            <div className="text-right text-sm text-gray-500 mt-1">
              {title.length}/100
            </div>
          </div>

          {/* 내용 입력 */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              내용
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={15}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-200 focus:border-pink-400 transition-colors resize-none"
              placeholder="내용을 입력해주세요"
              maxLength={2000}
            />
            <div className="text-right text-sm text-gray-500 mt-1">
              {content.length}/2000
            </div>
          </div>

          {/* 버튼 영역 */}
          <div className="flex gap-4 pt-6">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !title.trim() || !content.trim()}
              className="flex-1 px-6 py-3 bg-pink-500 text-white rounded-xl font-medium hover:bg-pink-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  등록 중...
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
                  등록하기
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
} 