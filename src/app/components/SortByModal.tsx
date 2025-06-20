"use client"

interface SortByModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (option: string) => void;
  position: { top: number; left: number } | null;
  currentSort: string;
}

const sortOptions = ["추천", "거리순", "리뷰순", "가격순"];

export default function SortByModal({ isOpen, onClose, onSelect, position, currentSort }: SortByModalProps) {
  if (!isOpen || !position) return null;

  const modalStyle = {
    top: `${position.top + 10}px`, // Add space for the arrow
    left: `${position.left}px`,
  };

  const handleSelect = (option: string) => {
    onSelect(option);
    onClose();
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
        className="absolute bg-white rounded-lg shadow-xl border border-gray-200 w-48"
      >
        {/* The little arrow pointing up */}
        <div className="absolute bg-white w-4 h-4 transform rotate-45 -top-2 left-8 border-l border-t border-gray-200"></div>

        <div className="relative p-2">
            <ul className="space-y-1">
                {sortOptions.map((option) => (
                    <li key={option}>
                        <button 
                            onClick={() => handleSelect(option)}
                            className={`w-full text-left px-3 py-2 text-sm rounded-md ${
                                currentSort === option 
                                ? 'bg-teal-50 text-teal-700 font-semibold' 
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
} 