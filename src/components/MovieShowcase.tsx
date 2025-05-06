
import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/contexts/LanguageContext";
import GlassCard from "@/components/ui/GlassCard";
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react";

interface Movie {
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
  image: string;
}

interface MovieShowcaseProps {
  additionalMovies?: Movie[];
}

export function MovieShowcase({ additionalMovies = [] }: MovieShowcaseProps) {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeGenre, setActiveGenre] = useState<string | null>(null);
  const [autoScrollInterval, setAutoScrollInterval] = useState<number | null>(null);
  
  // Sample movie data - combined with additionalMovies
  const allMovies = [
    ...additionalMovies,
    // Sample movies if no additional movies provided
    ...(additionalMovies.length === 0 ? [
      {
        id: 1,
        title: "Dune",
        genre: "Sci-Fi",
        year: 2021,
        rating: 8.0,
        image: "/lovable-uploads/d32ccab7-637d-48c7-b9fd-3a214bdec3e3.png"
      },
      {
        id: 2,
        title: "The Batman",
        genre: "Action",
        year: 2022,
        rating: 7.9,
        image: "/lovable-uploads/3b5ea4b6-6a71-4e63-ba57-cb2b71a2f60a.png"
      }
    ] : [])
  ];
  
  // Get unique genres from all movies
  const genres = [...new Set(allMovies.map(movie => movie.genre))];
  
  // Filter movies by selected genre
  const filteredMovies = activeGenre 
    ? allMovies.filter(movie => movie.genre === activeGenre)
    : allMovies;
  
  // Set up auto scrolling for movie images - Enhanced with faster speed
  useEffect(() => {
    let scrollPosition = 0;
    const scrollContainer = carouselRef.current;
    
    // Start auto-scrolling with increased speed
    const interval = window.setInterval(() => {
      if (scrollContainer) {
        // Auto-scroll logic with faster scroll speed
        scrollPosition += 1.5; // Increased from 1 to 1.5 for faster scrolling
        scrollContainer.scrollLeft += 1.5;
        
        // Reset scroll position if we've reached the end
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        if (scrollContainer.scrollLeft >= maxScroll - 2) {
          // Use smooth scrolling for the reset
          scrollContainer.style.scrollBehavior = 'smooth';
          scrollContainer.scrollLeft = 0;
          scrollPosition = 0;
          
          // Reset scroll behavior after the animation
          setTimeout(() => {
            scrollContainer.style.scrollBehavior = 'auto';
          }, 500);
        }
      }
    }, 20); // Adjusted from 30 to 20 for smoother and faster scrolling
    
    setAutoScrollInterval(interval);
    
    // Cleanup function
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [filteredMovies]);
  
  // Stop auto-scroll on manual interaction
  const handleManualScroll = () => {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
      
      // Restart auto-scroll after a period of inactivity
      const timeout = setTimeout(() => {
        let scrollPosition = carouselRef.current?.scrollLeft || 0;
        
        const interval = window.setInterval(() => {
          if (carouselRef.current) {
            // Auto-scroll logic with faster scroll speed
            scrollPosition += 1.5;
            carouselRef.current.scrollLeft += 1.5;
            
            // Reset scroll position if we've reached the end
            const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
            if (carouselRef.current.scrollLeft >= maxScroll - 2) {
              carouselRef.current.scrollLeft = 0;
              scrollPosition = 0;
            }
          }
        }, 20);
        
        setAutoScrollInterval(interval);
      }, 4000); // Wait 4 seconds after manual interaction (reduced from 5000)
      
      return () => clearTimeout(timeout);
    }
  };
  
  return (
    <section id="movies" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient reveal-animation">
            {t('movie_showcase_title')}
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto reveal-animation" data-delay="0.2s">
            {t('movie_showcase_description')}
          </p>
        </div>
        
        {/* Genre Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8 reveal-animation" data-delay="0.3s">
          <button
            className={`px-4 py-2 rounded-full transition-all ${
              activeGenre === null
                ? "bg-gradient-to-r from-yassin-neon-purple to-yassin-neon-blue text-white"
                : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
            }`}
            onClick={() => setActiveGenre(null)}
          >
            {t('all_genres')}
          </button>
          
          {genres.map((genre) => (
            <button
              key={genre}
              className={`px-4 py-2 rounded-full transition-all ${
                activeGenre === genre
                  ? "bg-gradient-to-r from-yassin-neon-purple to-yassin-neon-blue text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
              onClick={() => setActiveGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
        
        {/* Movie Carousel - Auto-scrolling */}
        <div 
          className="w-full overflow-hidden reveal-animation"
          data-delay="0.4s"
          onMouseDown={handleManualScroll}
          onTouchStart={handleManualScroll}
        >
          <div 
            ref={carouselRef} 
            className="flex gap-4 pb-6 overflow-x-auto scrollbar-hide"
            style={{ scrollBehavior: 'auto' }}
          >
            {filteredMovies.map((movie) => (
              <div 
                key={movie.id} 
                className="flex-none w-[280px] transition-transform duration-300 hover:scale-105"
              >
                <GlassCard className="h-full overflow-hidden" neonColor={activeGenre === movie.genre ? "purple" : undefined}>
                  <div className="relative h-[400px] group">
                    {/* Poster Image */}
                    <img 
                      src={movie.image || '/placeholder.svg'} 
                      alt={movie.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-16 h-16 rounded-full bg-yassin-neon-purple/80 flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          <Play className="w-8 h-8 text-white fill-white" />
                        </button>
                      </div>
                      
                      {/* Movie Info */}
                      <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="text-xl font-bold text-white mb-1">{movie.title}</h3>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/70">{movie.genre} • {movie.year}</span>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                            <span className="text-white/90">{movie.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex justify-center mt-8 gap-4 reveal-animation" data-delay="0.5s">
          <button 
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => {
              if (carouselRef.current) {
                carouselRef.current.scrollLeft -= 600;
                handleManualScroll();
              }
            }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button 
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => {
              if (carouselRef.current) {
                carouselRef.current.scrollLeft += 600;
                handleManualScroll();
              }
            }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default MovieShowcase;
