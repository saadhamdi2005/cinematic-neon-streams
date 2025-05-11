import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import AutoScrollingCarousel from "./AutoScrollingCarousel";
import MovieCarousel from "./MovieCarousel";
import { toast } from "sonner";

interface Movie {
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
  image: string;
}

interface ChannelsAndMoviesSectionProps {
  movieData: Movie[];
}

const ChannelsAndMoviesSection: React.FC<ChannelsAndMoviesSectionProps> = ({ movieData }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"all" | "live" | "movies" | "featured">("all");
  
  // Channels list with logos for auto-scrolling
  const channels = [
    { name: "ESPN", logo: "/lovable-uploads/e1b3a044-cc20-4696-a88b-caca10023057.png", category: "Sports" },
    { name: "HBO", logo: "/lovable-uploads/0650b9d0-e10d-4a26-a76c-3a9a8072140b.png", category: "Movies" },
    { name: "CNN", logo: "/lovable-uploads/20482f8f-22ee-4241-9549-7137736f00f9.png", category: "News" },
    { name: "Discovery", logo: "/lovable-uploads/c7b76c61-391a-491b-a4cd-7756be710fac.png", category: "Documentary" },
    { name: "Disney+", logo: "/lovable-uploads/e365fc79-0f94-4ce2-ba63-1a149be9e383.png", category: "Family" },
    { name: "Sky Sports", logo: "/lovable-uploads/465d0abd-a959-469b-b82e-2070327b5ddf.png", category: "Sports" },
    { name: "BBC", logo: "/lovable-uploads/1966ec4a-d3b6-4f82-a6a4-99d2781b0976.png", category: "Entertainment" },
    { name: "Fox", logo: "/lovable-uploads/18b95498-97f9-4645-9a43-03c03038042c.png", category: "Entertainment" },
    { name: "Paramount+", logo: "/lovable-uploads/9f6d8456-79ad-4bb9-8f4e-a61179c9189c.png", category: "Movies" },
    { name: "NBC", logo: "/lovable-uploads/ba378fe3-feeb-40ae-9b1e-1f57fe0408cd.png", category: "Entertainment" },
    { name: "ABC", logo: "/lovable-uploads/61ae7544-e0ad-47e5-a07d-85e6f8c68475.png", category: "Entertainment" },
    { name: "Netflix", logo: "/lovable-uploads/de37ace9-e5c0-4e91-89ea-5044f3504298.png", category: "Movies" },
    { name: "Amazon Prime", logo: "/lovable-uploads/dfd5268e-a3b1-4d7a-8387-1dc5a4623cdb.png", category: "Movies" },
    { name: "NFL Network", logo: "/lovable-uploads/b48df112-d880-4e84-ade3-e59bf123db0b.png", category: "Sports" },
    { name: "History", logo: "/lovable-uploads/3b5ea4b6-6a71-4e63-ba57-cb2b71a2f60a.png", category: "Documentary" },
    { name: "MTV", logo: "/lovable-uploads/6cd53962-48d0-4424-9b03-e32da4604648.png", category: "Music" },
    { name: "Cartoon Network", logo: "/lovable-uploads/2bdd82e6-9a66-42ce-89e3-3d2c7159ace0.png", category: "Kids" },
    { name: "National Geographic", logo: "/lovable-uploads/9810ba33-9132-47ca-a8ab-5de75f5d019e.png", category: "Documentary" },
    { name: "Fox Sports", logo: "/lovable-uploads/9d9fdc01-80ae-4fdd-a283-69f73a5343ea.png", category: "Sports" },
    { name: "HGTV", logo: "/lovable-uploads/7f7caaed-046e-4c56-9691-77c579c38f8d.png", category: "Lifestyle" },
  ];

  // Handler for adding to favorites (demo)
  const handleAddToFavorites = (title: string) => {
    toast.success(`Added "${title}" to favorites!`, {
      position: "bottom-right",
      duration: 3000,
    });
  };

  return (
    <section id="channels" className="py-16 px-4 bg-yassin-darkest">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Entertainment</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore our vast library of movies and shows with thousands of live channels from around the world
          </p>
        </div>
        
        {/* Content tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {["all", "live", "movies", "featured"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-yassin-neon-purple to-yassin-neon-blue text-white shadow-lg"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {tab === "all" && "All Content"}
              {tab === "live" && "Live TV"}
              {tab === "movies" && "Movies & Shows"}
              {tab === "featured" && "Featured Channels"}
            </button>
          ))}
        </div>

        {/* Featured Channels Section */}
        {(activeTab === "all" || activeTab === "featured" || activeTab === "live") && (
          <div className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Featured Channels</h3>
              <a href="#all-channels" className="text-yassin-neon-blue hover:text-yassin-neon-purple transition-colors">
                View all channels →
              </a>
            </div>
            
            {/* Auto-scrolling channel carousel */}
            <AutoScrollingCarousel 
              id="channel-carousel" 
              speed={0.3} 
              className="mb-8"
            >
              {channels.map((channel, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center justify-center p-4 min-w-[160px]"
                >
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-white/5 to-black/30 p-4 flex items-center justify-center mb-3 border border-white/10 backdrop-blur-sm hover:border-yassin-neon-blue/30 transition-all duration-300 hover:scale-110">
                    <img 
                      src={channel.logo} 
                      alt={channel.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h4 className="font-medium text-center">{channel.name}</h4>
                  <p className="text-xs text-white/50">{channel.category}</p>
                </div>
              ))}
            </AutoScrollingCarousel>
          </div>
        )}
        
        {/* Movies & Shows Section */}
        {(activeTab === "all" || activeTab === "movies") && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Movies & Series Highlights</h3>
              <a href="#full-library" className="text-yassin-neon-blue hover:text-yassin-neon-purple transition-colors">
                View full library →
              </a>
            </div>
            
            {/* NEW: Using the MovieCarousel component for movies with automatic scrolling */}
            <MovieCarousel movies={movieData} autoScroll={true} autoScrollInterval={5000} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ChannelsAndMoviesSection;
