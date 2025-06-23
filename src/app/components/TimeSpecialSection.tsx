import TimeSpecialGrid from './TimeSpecialGrid';
import { timeSpecialReviews as allReviews } from '@/app/data/reviews';

interface TimeSpecialSectionProps {
  reviews?: Record<string, { nickname: string; text: string }[]>;
}

const TimeSpecialSection: React.FC<TimeSpecialSectionProps> = ({ reviews = allReviews }) => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TimeSpecialGrid reviews={reviews} />
      </div>
    </section>
  );
}

export default TimeSpecialSection; 