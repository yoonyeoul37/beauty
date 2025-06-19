"use client";

interface TestDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onSort: (type: string) => void;
}

export default function TestDropdown({ isOpen, onClose, onSort }: TestDropdownProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg z-50 min-w-[120px] py-2 border border-gray-100"
    >
      <button 
        onClick={() => {
          onSort('distance');
          onClose();
        }}
        className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm"
      >
        거리순
      </button>
      <button 
        onClick={() => {
          onSort('review');
          onClose();
        }}
        className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm"
      >
        리뷰순
      </button>
      <button 
        onClick={() => {
          onSort('price');
          onClose();
        }}
        className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm"
      >
        가격순
      </button>
    </div>
  );
} 