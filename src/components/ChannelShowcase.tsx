
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import GlassCard from "@/components/ui/GlassCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ChannelShowcase() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [autoScrollInterval, setAutoScrollInterval] = useState<NodeJS.Timeout | null>(null);
  const channelCarouselRef = useRef<HTMLDivElement>(null);

  const channels = [
    { name: "TV5 Monde", category: "International" },
    { name: "TSN Sports", category: "Sports" },
    { name: "TRT World", category: "News" },
    { name: "Viasat History", category: "Documentary" },
    { name: "BBC World", category: "News" },
    { name: "Al Jazeera", category: "News" },
    { name: "CNN", category: "News" },
    { name: "HBO", category: "Entertainment" },
    { name: "Sky Sports", category: "Sports" },
    { name: "National Geographic", category: "Documentary" },
    { name: "Canal+", category: "Entertainment" },
    { name: "Disney Channel", category: "Entertainment" },
    { name: "Fox Sports", category: "Sports" },
    { name: "DAZN", category: "Sports" },
    { name: "BeIN Sports", category: "Sports" },
    { name: "NBC", category: "Entertainment" },
    { name: "ESPN", category: "Sports" },
    { name: "Discovery Channel", category: "Documentary" },
    { name: "Eurosport", category: "Sports" },
    { name: "MTV", category: "Music" },
  ];

  // Set up auto scrolling for channels
  useEffect(() => {
    const scrollContainer = channelCarouselRef.current;
    if (!scrollContainer) return;
    
    // Start auto-scrolling
    const interval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;
        
        // Reset scroll position if we've reached the end
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        if (scrollContainer.scrollLeft >= maxScroll - 1) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, 30); // Adjust speed of scrolling here
    
    setAutoScrollInterval(interval);
    
    // Cleanup function
    return () => {
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
      }
    };
  }, []);
  
  // Stop auto-scroll on manual interaction
  const handleManualScroll = () => {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
      
      // Restart auto-scroll after a period of inactivity
      const timeout = setTimeout(() => {
        const interval = setInterval(() => {
          if (channelCarouselRef.current) {
            channelCarouselRef.current.scrollLeft += 1;
            
            // Reset scroll position if we've reached the end
            const maxScroll = channelCarouselRef.current.scrollWidth - channelCarouselRef.current.clientWidth;
            if (channelCarouselRef.current.scrollLeft >= maxScroll - 1) {
              channelCarouselRef.current.scrollLeft = 0;
            }
          }
        }, 30);
        
        setAutoScrollInterval(interval);
      }, 5000); // Wait 5 seconds after manual interaction
      
      return () => clearTimeout(timeout);
    }
  };

  // Group channels by category
  const categorizedChannels: Record<string, typeof channels> = {};
  channels.forEach(channel => {
    if (!categorizedChannels[channel.category]) {
      categorizedChannels[channel.category] = [];
    }
    categorizedChannels[channel.category].push(channel);
  });

  return (
    <section id="channels" className="py-16 md:py-24 bg-gradient-to-b from-yassin-dark to-yassin-darker">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient reveal-animation">
            {t('channels_showcase_title')}
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto reveal-animation" data-delay="0.2s">
            {t('channels_showcase_description')}
          </p>
        </div>

        {/* Worldwide Channels Carousel - Auto-scrolling */}
        <div 
          className="mb-16 reveal-animation overflow-hidden" 
          data-delay="0.3s"
          onMouseDown={handleManualScroll}
          onTouchStart={handleManualScroll}
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">{t('worldwide_channels')}</h3>
          
          <div 
            ref={channelCarouselRef}
            className="flex gap-4 pb-4 overflow-x-auto scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {channels.map((channel, index) => (
              <div 
                key={`${channel.name}-${index}`} 
                className="flex-none"
              >
                <GlassCard 
                  className={cn(
                    "px-6 py-4 flex items-center justify-center h-20 w-44",
                    "hover:shadow-lg hover:shadow-yassin-neon-purple/20 transition-all duration-300"
                  )}
                  glowOnHover 
                  neonColor="purple"
                >
                  <div className="text-center">
                    <div className="text-lg font-bold">{channel.name}</div>
                    <div className="text-xs text-white/60">{channel.category}</div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Object.entries(categorizedChannels).map(([category, channelsList], catIndex) => (
            <div 
              key={category} 
              className="reveal-animation"
              style={{ animationDelay: `${0.1 * catIndex}s` }}
            >
              <GlassCard className="h-full" neonColor="blue">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-yassin-neon-blue">{category}</h3>
                  <ul className="space-y-3">
                    {channelsList.map((channel, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-yassin-neon-blue rounded-full mr-2"></span>
                        <span className="text-white/90">{channel.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChannelShowcase;
