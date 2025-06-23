import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

interface StarRatingProps {
  rating: number;
  customSize?: number;
}

export default function StarRating({ rating, customSize }: StarRatingProps) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star, index) => (
        <span key={star} style={{ marginLeft: index > 0 ? '-4px' : '0' }}>
          <FontAwesomeIcon
            icon={star <= rating ? faStarSolid : faStarRegular}
            className={star <= rating ? "text-yellow-400" : "text-gray-300"}
            style={{ 
              fontSize: customSize || '14px', 
              filter: 'url(#round)'
            }}
          />
        </span>
      ))}
    </div>
  );
} 