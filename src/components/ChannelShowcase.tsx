
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import GlassCard from "@/components/ui/GlassCard";

export function ChannelShowcase() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [autoScrollInterval, setAutoScrollInterval] = useState<NodeJS.Timeout | null>(null);
  const channelCarouselRef = useRef<HTMLDivElement>(null);

  // Define channels by category
  const channelCategories = {
    international: ["TV5 Monde", "Al Aoula", "2M", "Medi1TV", "France 24"],
    sports: ["TSN Sports", "Sky Sports", "Fox Sports", "DAZN", "BeIN Sports", "ESPN", "Eurosport", "RMC Sport"],
    news: ["TRT World", "BBC World", "Al Jazeera", "CNN", "France Info", "CNBC", "Bloomberg"],
    documentary: ["Viasat History", "National Geographic", "Discovery Channel", "Animal Planet", "History Channel"],
    entertainment: ["HBO", "Canal+", "Disney Channel", "NBC", "AMC", "Fox"],
    music: ["MTV", "VH1", "Trace Urban", "MCM"]
  };

  // Flatten channels for the scrolling carousel
  const allChannels = Object.values(channelCategories).flat().map(name => ({
    name,
    category: Object.keys(channelCategories).find(category => 
      channelCategories[category as keyof typeof channelCategories].includes(name)
    ) || ""
  }));

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
            {allChannels.map((channel, index) => (
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
                    <div className="text-xs text-white/60">{t(channel.category as any)}</div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>

        {/* Categories - Display in a grid exactly like in the image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {Object.entries(channelCategories).map(([category, channelList], catIndex) => (
            <div 
              key={category} 
              className="reveal-animation"
              style={{ animationDelay: `${0.1 * catIndex}s` }}
            >
              <GlassCard className="h-full" neonColor="blue">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-yassin-neon-blue">{t(category as any)}</h3>
                  <ul className="space-y-3">
                    {channelList.map((channelName, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-yassin-neon-blue rounded-full mr-2"></span>
                        <span className="text-white/90">{channelName}</span>
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
