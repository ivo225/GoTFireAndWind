import { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '@/components/Section';

const TheWall = () => {
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
            src="/the_wall.jpg"
            alt="The Wall"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <h1 className="absolute bottom-8 left-8 text-4xl md:text-5xl font-bold text-white font-cinzel">
            The Wall
          </h1>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <h2 className="font-cinzel">The Barrier Between Realms</h2>
            <p>
              The Wall is a colossal fortification that stretches for 300 miles along the northern border of the Seven Kingdoms, 
              defending the realm from the dangers that lie beyond. Standing over 700 feet high and made of solid ice and magic, 
              it is one of the most impressive structures ever built by humans.
            </p>

            <h3 className="font-cinzel">Key Fortifications</h3>
            <ul>
              <li>
                <strong>Castle Black</strong> - The headquarters of the Night's Watch and the most well-maintained castle along the Wall.
              </li>
              <li>
                <strong>Eastwatch-by-the-Sea</strong> - The easternmost castle, serving as a port and naval base.
              </li>
              <li>
                <strong>The Shadow Tower</strong> - The westernmost manned castle, guarding the mountain passes.
              </li>
              <li>
                <strong>The Nightfort</strong> - The oldest and largest castle on the Wall, now abandoned and said to be haunted.
              </li>
            </ul>

            <h3 className="font-cinzel">Construction and Magic</h3>
            <p>
              According to legend, the Wall was built by Brandon the Builder with the help of giants and Children of the Forest. 
              It is said to be warded with ancient spells and magic woven into its very ice, preventing the dead from passing. 
              The Wall is not a simple barrier of ice, but a sophisticated piece of magical engineering.
            </p>

            <h3 className="font-cinzel">The Night's Watch</h3>
            <p>
              The Wall is manned by the Night's Watch, an ancient order dedicated to protecting the realms of men. Members of the 
              Watch take a lifelong oath of service and are forbidden from holding lands, taking wives, or fathering children. 
              Once numbering in the thousands, the Watch's numbers have dwindled significantly in recent times.
            </p>

            <h3 className="font-cinzel">Strategic Significance</h3>
            <p>
              Beyond its supernatural purpose, the Wall serves as a crucial military fortification. Its height provides an excellent 
              vantage point for surveillance, while its length makes it an effective barrier against large-scale invasions from the 
              north. The Wall's few passages are heavily fortified, allowing the Night's Watch to control movement between the 
              North and the lands beyond.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default TheWall;
