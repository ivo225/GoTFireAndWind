import { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '@/components/Section';

const KingsLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Section className="py-16">
        {/* Back Navigation */}
        <Link 
          to="/" 
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Home
        </Link>

        {/* Hero Image */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <img
            src="/kings_landing.jpg"
            alt="King's Landing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <h1 className="absolute bottom-8 left-8 text-4xl md:text-5xl font-bold text-white font-cinzel">
            King's Landing
          </h1>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <h2 className="font-cinzel">The Capital of the Seven Kingdoms</h2>
            <p>
              King's Landing is the capital and largest city of the Seven Kingdoms. Located on the east coast of Westeros in the Crownlands, 
              it sits upon the Blackwater Rush and overlooks Blackwater Bay. It is the site of the Iron Throne and the Red Keep, the seat of 
              the King of the Seven Kingdoms.
            </p>

            <h3 className="font-cinzel">Notable Landmarks</h3>
            <ul>
              <li>
                <strong>The Red Keep</strong> - The fortress and residence of the King of the Seven Kingdoms, containing the Great Hall and the Iron Throne.
              </li>
              <li>
                <strong>The Great Sept of Baelor</strong> - The center of religious worship in the city and the seat of the Faith of the Seven.
              </li>
              <li>
                <strong>The Dragonpit</strong> - A massive dome-like structure built to house the Targaryen dragons.
              </li>
              <li>
                <strong>Flea Bottom</strong> - The poorest slum district of the city.
              </li>
            </ul>

            <h3 className="font-cinzel">History</h3>
            <p>
              King's Landing was founded by Aegon the Conqueror after his successful conquest of Westeros. Built upon three hills, the city grew rapidly 
              from a small fort into the largest city in the Seven Kingdoms. The city's rapid growth led to it becoming a major center for trade, politics, 
              and culture in Westeros.
            </p>

            <h3 className="font-cinzel">Strategic Importance</h3>
            <p>
              As the seat of the Iron Throne, King's Landing is the center of power in Westeros. Its location on Blackwater Bay makes it a crucial 
              port city, while its central position in the Crownlands allows for relatively easy access to most other regions of the continent.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default KingsLanding;
