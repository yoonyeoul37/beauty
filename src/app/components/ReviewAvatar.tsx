import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

interface ReviewAvatarProps {
  image?: string;
  name?: string;
  color?: string;
}

export default function ReviewAvatar({ image, name, color }: ReviewAvatarProps) {
  return (
    <div className={`w-24 h-24 rounded-full mb-4 border-4 object-cover shadow-lg flex items-center justify-center ${color || 'bg-pink-50'} text-3xl font-bold text-pink-400`}>
      {image ? (
        <img src={image} alt={name || 'user'} className="w-full h-full object-cover rounded-full" />
      ) : name ? (
        <span>{name[0]}</span>
      ) : (
        <FontAwesomeIcon icon={faUserCircle} className="text-pink-300 w-16 h-16" />
      )}
    </div>
  );
} 