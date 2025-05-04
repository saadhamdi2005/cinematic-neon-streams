
import { useRef, useState, useEffect } from "react";
import TypedText from "@/components/ui/TypedText";
import { useLanguage } from "@/contexts/LanguageContext";

// Channel data with the logos you provided
const channels = [
  {
    id: 1,
    name: "Euro News",
    category: "News",
    logo: "/lovable-uploads/de37ace9-e5c0-4e91-89ea-5044f3504298.png",
    hd: true,
    country: "Europe"
  },
  {
    id: 2,
    name: "Al Jazeera Documentary",
    category: "Documentary",
    logo: "/lovable-uploads/e1b3a044-cc20-4696-a88b-caca10023057.png",
    hd: true,
    country: "Qatar"
  },
  {
    id: 3,
    name: "Al Jazeera Media Network",
    category: "News",
    logo: "/lovable-uploads/465d0abd-a959-469b-b82e-2070327b5ddf.png",
    hd: true,
    country: "Qatar"
  },
  {
    id: 4,
    name: "Animal Planet",
    category: "Documentary",
    logo: "/lovable-uploads/62db598d-d1a6-458e-bee1-595d3fbc51df.png",
    hd: true,
    country: "USA"
  },
  {
    id: 5,
    name: "Arte",
    category: "Cultural",
    logo: "/lovable-uploads/3b5ea4b6-6a71-4e63-ba57-cb2b71a2f60a.png",
    hd: true,
    country: "France/Germany"
  },
  {
    id: 6,
    name: "BBC Earth",
    category: "Documentary",
    logo: "/lovable-uploads/9f6d8456-79ad-4bb9-8f4e-a61179c9189c.png",
    hd: true,
    country: "UK"
  },
  {
    id: 7,
    name: "BBC News",
    category: "News",
    logo: "/lovable-uploads/ba378fe3-feeb-40ae-9b1e-1f57fe0408cd.png",
    hd: true,
    country: "UK"
  },
  {
    id: 8,
    name: "beIN Sports",
    category: "Sports",
    logo: "/lovable-uploads/b48df112-d880-4e84-ade3-e59bf123db0b.png",
    hd: true,
    country: "Qatar"
  },
  {
    id: 9,
    name: "Bloomberg",
    category: "Business",
    logo: "/lovable-uploads/a9cdd86c-15c7-4ca3-abc3-472c3899a1d5.png",
    hd: true,
    country: "USA"
  },
  {
    id: 10,
    name: "BT Sport",
    category: "Sports",
    logo: "/lovable-uploads/c7b76c61-391a-491b-a4cd-7756be710fac.png",
    hd: true,
    country: "UK"
  },
  {
    id: 11,
    name: "Canal+ Sport",
    category: "Sports",
    logo: "/lovable-uploads/e365fc79-0f94-4ce2-ba63-1a149be9e383.png",
    hd: true,
    country: "France"
  },
  {
    id: 12,
    name: "CBS Sports",
    category: "Sports",
    logo: "/lovable-uploads/20482f8f-22ee-4241-9549-7137736f00f9.png",
    hd: true,
    country: "USA"
  }
];

// Categories
const categories = ["All", "News", "Sports", "Documentary", "Business", "Cultural"];

export function ChannelShowcase() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleChannels, setVisibleChannels] = useState(channels);
  const [hoveredChannel, setHoveredChannel] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll settings
  const [autoScroll, setAutoScroll] = useState(true);
  const [scrollSpeed, setScrollSpeed] = useState(0.5);
  const scrollPosRef = useRef(0);
  const requestIdRef = useRef<number | null>(null);

  // Filter channels based on category
  useEffect(() => {
    if (selectedCategory === "All") {
      setVisibleChannels(channels);
    } else {
      setVisibleChannels(channels.filter(channel => channel.category === selectedCategory));
    }
  }, [selectedCategory]);

  // Auto-scroll animation
  useEffect(() => {
    if (!autoScroll || !carouselRef.current) return;
    
    const animateScroll = () => {
      if (!carouselRef.current) return;
      
      // Increment scroll position
      scrollPosRef.current += scrollSpeed;
      
      // Calculate max scroll width
      const container = carouselRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      // Reset when reaching the end
      if (scrollPosRef.current >= maxScroll) {
        // Jump back to start with smooth transition
        scrollPosRef.current = 0;
        container.scrollTo({ left: 0, behavior: 'auto' });
      } else {
        // Smooth scrolling
        container.scrollTo({ left: scrollPosRef.current, behavior: 'auto' });
      }
      
      // Continue animation
      requestIdRef.current = requestAnimationFrame(animateScroll);
    };
    
    // Start animation
    requestIdRef.current = requestAnimationFrame(animateScroll);
    
    // Clean up on unmount
    return () => {
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
  }, [autoScroll, scrollSpeed, visibleChannels]);

  // Handle user interaction with carousel
  const handleInteractionStart = () => {
    setAutoScroll(false);
    if (requestIdRef.current) {
      cancelAnimationFrame(requestIdRef.current);
      requestIdRef.current = null;
    }
  };

  const handleInteractionEnd = () => {
    if (carouselRef.current) {
      scrollPosRef.current = carouselRef.current.scrollLeft;
    }
    setAutoScroll(true);
  };

  return (
    <section id="channels" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <TypedText
              text={t("channelsTitle")}
              className="text-gradient"
              delay={100}
            />
          </h2>
          <p className="text-xl text-white/70">
            {t("channelsSubtitle")}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-yassin-neon-purple text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Auto-scrolling Carousel */}
        <div 
          className="relative pb-8 overflow-hidden" 
          onMouseEnter={handleInteractionStart}
          onTouchStart={handleInteractionStart}
          onMouseLeave={handleInteractionEnd}
          onTouchEnd={handleInteractionEnd}
        >
          <div 
            ref={carouselRef}
            className="flex gap-6 py-4 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {visibleChannels.map((channel) => (
              <div 
                key={channel.id}
                className="relative flex-shrink-0 w-[180px]"
                onMouseEnter={() => setHoveredChannel(channel.id)}
                onMouseLeave={() => setHoveredChannel(null)}
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-yassin-neon-blue/50 hover:shadow-[0_0_15px_rgba(30,174,219,0.3)] transform hover:-translate-y-2 h-[180px] flex flex-col items-center justify-between">
                  <div className="relative mb-3 h-16 flex items-center justify-center">
                    <img 
                      src={channel.logo} 
                      alt={channel.name} 
                      className="max-h-16 max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-center font-medium mb-2 truncate w-full">{channel.name}</h3>
                  <div className="flex flex-wrap justify-center gap-1 mt-2">
                    {channel.hd && (
                      <span className="px-1.5 py-0.5 bg-yassin-neon-blue/20 text-yassin-neon-blue text-xs rounded">
                        HD
                      </span>
                    )}
                    <span className="px-1.5 py-0.5 bg-white/10 text-white/70 text-xs rounded">
                      {channel.category}
                    </span>
                  </div>
                  
                  {hoveredChannel === channel.id && (
                    <div className="absolute inset-0 bg-black/70 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <span className="text-yassin-neon-blue text-sm font-medium px-3 py-1 border border-yassin-neon-blue/50 rounded-full animate-pulse">
                        Watch Now
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicators */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-24 h-full bg-gradient-to-r from-yassin-darkest to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-24 h-full bg-gradient-to-l from-yassin-darkest to-transparent pointer-events-none"></div>

          {/* Scroll control pills */}
          <div className="flex justify-center gap-2 mt-4">
            <button 
              className={`w-2 h-2 rounded-full ${autoScroll ? 'bg-yassin-neon-blue' : 'bg-white/30'}`}
              onClick={() => setAutoScroll(!autoScroll)}
              aria-label={autoScroll ? "Pause scrolling" : "Resume scrolling"}
            ></button>
            {[0.2, 0.5, 1].map((speed) => (
              <button
                key={speed}
                className={`w-2 h-2 rounded-full ${scrollSpeed === speed ? 'bg-yassin-neon-purple' : 'bg-white/30'}`}
                onClick={() => setScrollSpeed(speed)}
                aria-label={`Set scroll speed to ${speed}`}
              ></button>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 reveal-animation">
          <p className="text-white/60 mb-4">And 10,000+ more channels available in our package</p>
          <a href="#pricing" className="btn-primary inline-block transform transition-transform hover:scale-105">
            Get Access Now
          </a>
        </div>
      </div>
      
      {/* Modern glowing grid lines in the background */}
      <div className="absolute inset-0 grid grid-cols-6 pointer-events-none z-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border-r border-yassin-neon-blue/30 h-full"></div>
        ))}
        {[...Array(6)].map((_, i) => (
          <div key={i+"row"} className="border-b border-yassin-neon-blue/30 w-full"></div>
        ))}
      </div>
    </section>
  );
}

export default ChannelShowcase;
