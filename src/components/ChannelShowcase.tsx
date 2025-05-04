
import { useRef, useState, useEffect } from "react";
import TypedText from "@/components/ui/TypedText";

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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleChannels, setVisibleChannels] = useState(channels);
  const [hoveredChannel, setHoveredChannel] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filter channels based on category
  useEffect(() => {
    if (selectedCategory === "All") {
      setVisibleChannels(channels);
    } else {
      setVisibleChannels(channels.filter(channel => channel.category === selectedCategory));
    }
  }, [selectedCategory]);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset scroll position when it reaches the end
      if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    // Start auto-scrolling animation
    animationId = requestAnimationFrame(scroll);

    // Pause scrolling when user interacts with the container
    const handleInteraction = () => {
      cancelAnimationFrame(animationId);
    };

    scrollContainer.addEventListener("mouseenter", handleInteraction);
    scrollContainer.addEventListener("touchstart", handleInteraction);

    // Resume scrolling when user stops interacting
    const handleInteractionEnd = () => {
      // Update scroll position based on current scroll
      scrollPosition = scrollContainer.scrollLeft;
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener("mouseleave", handleInteractionEnd);
    scrollContainer.addEventListener("touchend", handleInteractionEnd);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleInteraction);
      scrollContainer.removeEventListener("touchstart", handleInteraction);
      scrollContainer.removeEventListener("mouseleave", handleInteractionEnd);
      scrollContainer.removeEventListener("touchend", handleInteractionEnd);
    };
  }, [visibleChannels]);

  return (
    <section id="channels" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <TypedText
              text="Explore Premium Channels"
              className="text-gradient"
              delay={100}
            />
          </h2>
          <p className="text-xl text-white/70">
            Browse through our extensive collection of live channels from around the world
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

        {/* Modern Channel Grid Display instead of scrolling cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {visibleChannels.map((channel) => (
            <div 
              key={channel.id}
              className="relative group"
              onMouseEnter={() => setHoveredChannel(channel.id)}
              onMouseLeave={() => setHoveredChannel(null)}
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-yassin-neon-blue/50 hover:shadow-[0_0_15px_rgba(30,174,219,0.3)] transform hover:-translate-y-2">
                <div className="relative mb-3 h-16 flex items-center justify-center">
                  <img 
                    src={channel.logo} 
                    alt={channel.name} 
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
                <h3 className="text-center font-medium mb-2 truncate">{channel.name}</h3>
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
                  <div className="absolute inset-0 bg-black/70 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-yassin-neon-blue text-sm font-medium px-3 py-1 border border-yassin-neon-blue/50 rounded-full animate-pulse">
                      Watch Now
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
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
