
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Tv, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import MovieShowcase from "./MovieShowcase";

interface ChannelsAndMoviesSectionProps {
  movieData?: any[];
}

// New combined section for channels and movies in the same section (per user request)
const ChannelsAndMoviesSection: React.FC<ChannelsAndMoviesSectionProps> = ({ movieData = [] }) => {
  const { t } = useLanguage();

  // Sample channels data
  const featuredChannels = [
    { name: "ESPN", category: "Sports", logo: "/lovable-uploads/f61546a6-412a-4fe4-a644-490ba93e26fd.png" },
    { name: "HBO", category: "Movies", logo: "/lovable-uploads/bf7c8b90-df9e-4342-8a10-53e5a44b7238.png" },
    { name: "CNN", category: "News", logo: "/lovable-uploads/1200eca0-3026-444b-8579-b152bea0a0d4.png" },
    { name: "Discovery", category: "Documentary", logo: "/lovable-uploads/c29f6ab2-7027-4beb-8256-fe5525fdf66d.png" },
    { name: "Disney+", category: "Family", logo: "/lovable-uploads/8a00e0f3-c27e-4db5-85a9-d34170154cb4.png" },
    { name: "Sky Sports", category: "Sports", logo: "/lovable-uploads/93dde9aa-2025-4264-812f-6e4dc4e96261.png" }
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-yassin-darkest via-yassin-darker to-yassin-darkest">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--yassin-neon-purple)_0%,transparent_70%)] opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yassin-neon-blue to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yassin-neon-purple to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yassin-neon-blue via-yassin-neon-purple to-yassin-neon-pink">
              Premium Entertainment
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Explore our vast library of movies and TV shows along with thousands of live channels from around the world
          </p>
        </div>

        {/* Tabs for Content Types */}
        <div className="flex justify-center mb-10 gap-4">
          <Button className="bg-gradient-to-r from-yassin-neon-blue to-yassin-neon-purple rounded-full px-6 py-2 text-white font-medium shadow-glow" aria-pressed="true">
            <Tv className="mr-2 h-5 w-5" />
            All Content
          </Button>
          <Button variant="outline" className="rounded-full px-6 py-2 text-white border border-white/20 bg-black/20 hover:bg-yassin-neon-blue/20">
            <Globe className="mr-2 h-5 w-5" />
            Live TV
          </Button>
          <Button variant="outline" className="rounded-full px-6 py-2 text-white border border-white/20 bg-black/20 hover:bg-yassin-neon-blue/20">
            <Film className="mr-2 h-5 w-5" />
            Movies & Series
          </Button>
        </div>

        {/* Featured TV Channels Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-white flex items-center">
              <Tv className="text-yassin-neon-blue mr-2" />
              Featured Channels
            </h3>
            <Button variant="link" className="text-yassin-neon-blue hover:text-yassin-neon-purple">
              View All Channels →
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {featuredChannels.map((channel, index) => (
              <div 
                key={index}
                className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 p-4 flex flex-col items-center hover:border-yassin-neon-blue/50 transition-all duration-300 hover:shadow-glow-sm group"
              >
                <div className="w-16 h-16 mb-3 bg-white/5 rounded-full p-2 flex items-center justify-center">
                  <img 
                    src={channel.logo} 
                    alt={channel.name} 
                    className="max-w-full max-h-full object-contain" 
                  />
                </div>
                <h4 className="font-semibold text-white group-hover:text-yassin-neon-blue transition-colors">
                  {channel.name}
                </h4>
                <span className="text-xs text-yassin-neon-purple">{channel.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Movies Showcase Section (reusing the improved component) */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-white flex items-center">
              <Film className="text-yassin-neon-pink mr-2" />
              Featured Movies & Series
            </h3>
            <Button variant="link" className="text-yassin-neon-pink hover:text-yassin-neon-purple">
              View Full Library →
            </Button>
          </div>
          
          {/* Render movie showcases here */}
          <div className="relative mt-8 py-4">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-6">
              {movieData.slice(0, 10).map((movie) => (
                <div 
                  key={movie.id}
                  className="flex-shrink-0 w-48 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="group relative rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)] h-72">
                    <img 
                      src={movie.image} 
                      alt={movie.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h4 className="text-white font-semibold truncate">{movie.title}</h4>
                      <div className="text-sm flex justify-between items-center mt-1">
                        <span className="text-yassin-neon-blue">{movie.year}</span>
                        <span className="bg-yellow-500/90 text-black px-2 py-0.5 rounded-sm text-xs font-bold">
                          {movie.rating.toFixed(1)}
                        </span>
                      </div>
                      <p className="text-white/60 text-xs mt-1">{movie.genre}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Left and right gradients for scroll indication */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-yassin-darkest to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-yassin-darkest to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-yassin-neon-purple to-yassin-neon-blue p-[1px] rounded-full">
            <Button 
              size="lg"
              className="bg-yassin-darkest hover:bg-black text-white font-semibold text-lg px-8 py-6 rounded-full"
              onClick={() => window.location.href = '/payment'}
            >
              Start Free Trial
            </Button>
          </div>
          <p className="text-white/60 mt-4">No credit card required, cancel anytime</p>
        </div>
      </div>
      
      {/* Decorative gradient blobs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-yassin-neon-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-yassin-neon-purple/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ChannelsAndMoviesSection;
