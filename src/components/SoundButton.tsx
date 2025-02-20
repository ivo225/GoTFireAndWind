import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { cn } from '@/lib/utils';
import { useAudio } from '@/contexts/AudioContext';

const SoundButton = () => {
  const { isPlaying, togglePlay } = useAudio();
  const [isHovered, setIsHovered] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setIsPulsing(prev => !prev);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={isPlaying ? "default" : "ghost"}
            size="icon"
            onClick={togglePlay}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
              "w-10 h-10 rounded-full transition-all duration-300",
              isPlaying && "bg-primary hover:bg-primary/90",
              isPulsing && "scale-110",
              isHovered && "shadow-lg"
            )}
          >
            {isPlaying ? (
              <Volume2 className={cn(
                "h-5 w-5 transition-colors duration-300",
                isPlaying && "text-primary-foreground"
              )} />
            ) : (
              <VolumeX className="h-5 w-5" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isPlaying ? 'Stop Music' : 'Play Theme Music'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SoundButton;
