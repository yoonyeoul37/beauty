"use client"

import { TagIcon, TruckIcon, VideoCameraIcon } from '@heroicons/react/24/outline';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  position: { top: number; left: number } | null;
}

export default function FilterModal({ isOpen, onClose, position }: FilterModalProps) {
  if (!isOpen || !position) return null;

  const modalStyle = {
    top: `${position.top + 10}px`, // Add space for the arrow
    left: `${position.left}px`,
  };

  return (
    // Transparent full-screen overlay to catch clicks outside the modal
    <div 
      onClick={onClose}
      className="fixed inset-0 z-40"
    >
      {/* Modal panel positioned absolutely */}
      <div 
        style={modalStyle}
        onClick={(e) => e.stopPropagation()}
        className="absolute bg-white rounded-lg shadow-xl border border-gray-200 w-80"
      >
        {/* The little arrow pointing up */}
        <div className="absolute bg-white w-4 h-4 transform rotate-45 -top-2 left-8 border-l border-t border-gray-200"></div>

        <div className="relative p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">서비스 유형</h3>
          
          <div className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center space-x-3">
                <TagIcon className="h-6 w-6 text-gray-500" />
                <span className="text-gray-700">특별 혜택</span>
              </div>
              <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
            </label>
  
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center space-x-3">
                <TruckIcon className="h-6 w-6 text-gray-500" />
                <span className="text-gray-700">모바일 서비스 (출장)</span>
              </div>
              <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
            </label>
  
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center space-x-3">
                <VideoCameraIcon className="h-6 w-6 text-gray-500" />
                <span className="text-gray-700">온라인 서비스</span>
              </div>
              <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
            </label>
          </div>
  
          <div className="mt-8 flex justify-between space-x-4">
            <button className="w-full py-2 px-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              모두 지우기
            </button>
            <button onClick={onClose} className="w-full py-2 px-4 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-md hover:bg-teal-700">
              결과 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 