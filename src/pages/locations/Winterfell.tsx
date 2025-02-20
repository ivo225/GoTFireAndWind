import { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '@/components/Section';

const Winterfell = () => {
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
            src="/winterfell_mapv2.jpg"
            alt="Winterfell"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <h1 className="absolute bottom-8 left-8 text-4xl md:text-5xl font-bold text-white font-cinzel">
            Winterfell
          </h1>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <h2 className="font-cinzel">The Ancient Seat of House Stark</h2>
            <p>
              Winterfell is the ancestral castle and seat of power of House Stark and is considered the capital of the North. 
              Located in the center of the North, it was built around a godswood containing a heart tree and sits atop hot springs 
              that help keep the castle warm during the harsh northern winters.
            </p>

            <h3 className="font-cinzel">Notable Features</h3>
            <ul>
              <li>
                <strong>The Godswood</strong> - An ancient grove with a heart tree at its center, representing the old gods.
              </li>
              <li>
                <strong>The Crypts</strong> - An extensive underground complex where the Lords of Winterfell are buried.
              </li>
              <li>
                <strong>The Great Hall</strong> - Where the Lord of Winterfell holds court and feasts.
              </li>
              <li>
                <strong>The Broken Tower</strong> - An ancient watchtower struck by lightning centuries ago.
              </li>
              <li>
                <strong>The Glass Gardens</strong> - Greenhouses heated by the hot springs, providing fresh produce even in winter.
              </li>
            </ul>

            <h3 className="font-cinzel">Architecture and Design</h3>
            <p>
              Winterfell consists of two massive walls with a moat between them. The castle itself contains multiple buildings 
              and towers connected by covered bridges. The castle's unique heating system, powered by natural hot springs, runs 
              through the walls like blood through a body, keeping the castle warm even in the coldest winters.
            </p>

            <h3 className="font-cinzel">Historical Significance</h3>
            <p>
              Built by Brandon the Builder over 8,000 years ago, Winterfell has stood as a symbol of the North's strength and 
              resilience. It has never fallen by force and has been the seat of House Stark since the Age of Heroes. The castle 
              has witnessed countless historical events and has been central to many of the major conflicts in Westeros.
            </p>

            <h3 className="font-cinzel">Strategic Importance</h3>
            <p>
              As the capital of the North, Winterfell serves as both a military stronghold and an administrative center. Its 
              central location in the North makes it an ideal base for coordinating the defense of the region, while its hot 
              springs and glass gardens provide crucial resources during long winters.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Winterfell;
