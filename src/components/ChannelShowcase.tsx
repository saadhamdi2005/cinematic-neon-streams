
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import GlassCard from "@/components/ui/GlassCard";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function ChannelShowcase() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [autoScrollInterval, setAutoScrollInterval] = useState<NodeJS.Timeout | null>(null);
  const channelCarouselRef = useRef<HTMLDivElement>(null);
  const [hoveredChannel, setHoveredChannel] = useState<string | null>(null);

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

  // Create a function to get corresponding neon color based on category
  const getCategoryNeonColor = (category: string) => {
    switch(category) {
      case 'international': return "blue";
      case 'sports': return "purple";
      case 'news': return "green";
      case 'documentary': return "blue";
      case 'entertainment': return "pink";
      case 'music': return "purple";
      default: return "blue";
    }
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut" 
      }
    })
  };

  return (
    <section id="channels" className="py-16 md:py-24 bg-gradient-to-b from-yassin-dark to-yassin-darker relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" 
            style={{ 
              backgroundImage: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 1px, transparent 1px)', 
              backgroundSize: '30px 30px' 
            }}
          />
        </div>
        
        {/* Animated glow spots */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-yassin-neon-purple/10 filter blur-[80px] animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-yassin-neon-blue/10 filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-yassin-neon-pink/10 filter blur-[90px] animate-pulse-slow" style={{ animationDelay: '2.3s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yassin-neon-purple via-yassin-neon-blue to-yassin-neon-purple animate-gradient-x bg-size-200">
            {t('channels_showcase_title')}
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            {t('channels_showcase_description')}
          </p>
        </motion.div>

        {/* Enhanced Worldwide Channels Carousel - Auto-scrolling */}
        <motion.div 
          className="mb-16 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-yassin-neon-blue to-yassin-neon-purple">
            {t('worldwide_channels')}
          </h3>
          
          <div 
            ref={channelCarouselRef}
            className="flex gap-4 pb-4 overflow-x-auto scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
            onMouseDown={handleManualScroll}
            onTouchStart={handleManualScroll}
          >
            {allChannels.map((channel, index) => (
              <div 
                key={`${channel.name}-${index}`} 
                className="flex-none"
                onMouseEnter={() => setHoveredChannel(channel.name)}
                onMouseLeave={() => setHoveredChannel(null)}
              >
                <GlassCard 
                  className={cn(
                    "px-6 py-4 flex items-center justify-center h-20 w-44",
                    "hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  )}
                  glowOnHover 
                  neonColor={getCategoryNeonColor(channel.category) as "purple" | "pink" | "blue" | "green"}
                  tiltEffect
                >
                  <div className="text-center">
                    <div className="text-lg font-bold relative">
                      {channel.name}
                      
                      {/* Animated underline on hover */}
                      <div 
                        className={cn(
                          "absolute bottom-0 left-0 h-0.5 bg-yassin-neon-blue rounded-full transform origin-left transition-all duration-300",
                          hoveredChannel === channel.name ? "w-full" : "w-0"
                        )}
                      />
                    </div>
                    <div className="text-xs text-white/60">{t(channel.category as any)}</div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Categories - Display in a grid with modern layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {Object.entries(channelCategories).map(([category, channelList], catIndex) => (
            <motion.div 
              key={category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={catIndex}
              variants={cardVariants}
            >
              <GlassCard 
                className="h-full transform transition-all duration-500" 
                neonColor={getCategoryNeonColor(category) as "purple" | "pink" | "blue" | "green"}
                glowOnHover
                glowIntensity="medium"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className={`w-5 h-5 text-yassin-neon-${getCategoryNeonColor(category)} animate-pulse-slow`} />
                    <h3 className={`text-xl font-semibold text-yassin-neon-${getCategoryNeonColor(category)}`}>
                      {t(category as any)}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {channelList.map((channelName, idx) => (
                      <li key={idx} className="flex items-center group">
                        <span className={`w-2 h-2 bg-yassin-neon-${getCategoryNeonColor(category)} rounded-full mr-2 group-hover:animate-pulse`}></span>
                        <span className="text-white/90 group-hover:text-white transition-colors duration-200">
                          {channelName}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChannelShowcase;
