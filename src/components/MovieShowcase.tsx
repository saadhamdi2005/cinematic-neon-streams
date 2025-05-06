
import { useRef, useEffect, useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import TypedText from "@/components/ui/TypedText";
import { useLanguage } from "@/contexts/LanguageContext";

// Base movie data
const defaultMovies = [
  {
    id: 1,
    title: "The Matrix",
    genre: "Sci-Fi",
    year: 1999,
    rating: 8.7,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop"
  },
  {
    id: 2,
    title: "Inception",
    genre: "Sci-Fi",
    year: 2010,
    rating: 8.8,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=450&fit=crop"
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Sci-Fi",
    year: 2014,
    rating: 8.6,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=450&fit=crop"
  },
  {
    id: 4,
    title: "The Dark Knight",
    genre: "Action",
    year: 2008,
    rating: 9.0,
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=450&fit=crop"
  },
  {
    id: 5,
    title: "Pulp Fiction",
    genre: "Crime",
    year: 1994,
    rating: 8.9,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=450&fit=crop"
  },
  {
    id: 6,
    title: "The Shawshank Redemption",
    genre: "Drama",
    year: 1994,
    rating: 9.3,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=450&fit=crop"
  },
  {
    id: 7,
    title: "The Godfather",
    genre: "Crime",
    year: 1972,
    rating: 9.2,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=450&fit=crop"
  },
  {
    id: 8,
    title: "Fight Club",
    genre: "Drama",
    year: 1999,
    rating: 8.8,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop"
  }
];

// Movie genres
const genres = ["All", "Sci-Fi", "Action", "Drama", "Crime", "Comedy", "Horror", "Animation", "Romance", "Fantasy", "Musical"];

interface MovieProps {
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
  image: string;
}

interface MovieShowcaseProps {
  additionalMovies?: MovieProps[];
}

export function MovieShowcase({ additionalMovies = [] }: MovieShowcaseProps) {
  const { t } = useLanguage();
  // Combine default movies with additional movies
  const allMovies = [...additionalMovies, ...defaultMovies].slice(0, 20);
  
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [visibleMovies, setVisibleMovies] = useState(allMovies);
  const [hoveredMovie, setHoveredMovie] = useState<number | null>(null);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isAutoScrollEnabled = useRef<boolean>(true);
  const scrollPositionRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);

  // Filter movies based on genre
  useEffect(() => {
    if (selectedGenre === "All") {
      setVisibleMovies(allMovies);
    } else {
      setVisibleMovies(allMovies.filter(movie => movie.genre === selectedGenre));
    }
  }, [selectedGenre, allMovies]);

  // Auto-scroll effect with improved performance
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let lastTimestamp: number | null = null;
    const scrollSpeed = 0.6; // Pixels per millisecond

    const animateScroll = (timestamp: number) => {
      if (!isAutoScrollEnabled.current) {
        animationFrameRef.current = requestAnimationFrame(animateScroll);
        return;
      }
      
      if (lastTimestamp === null) {
        lastTimestamp = timestamp;
        animationFrameRef.current = requestAnimationFrame(animateScroll);
        return;
      }
      
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      scrollPositionRef.current += scrollSpeed * deltaTime;
      
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      
      // Reset scroll position when it reaches the end
      if (scrollPositionRef.current >= maxScroll) {
        scrollPositionRef.current = 0;
      }
      
      scrollContainer.scrollLeft = scrollPositionRef.current;
      animationFrameRef.current = requestAnimationFrame(animateScroll);
    };

    // Start auto-scrolling animation
    animationFrameRef.current = requestAnimationFrame(animateScroll);

    // Pause scrolling when user interacts with the container
    const handleInteractionStart = () => {
      isAutoScrollEnabled.current = false;
    };

    // Resume scrolling when user stops interacting
    const handleInteractionEnd = () => {
      scrollPositionRef.current = scrollContainer.scrollLeft;
      lastTimestamp = null;
      isAutoScrollEnabled.current = true;
    };

    scrollContainer.addEventListener("mouseenter", handleInteractionStart);
    scrollContainer.addEventListener("touchstart", handleInteractionStart);
    scrollContainer.addEventListener("mouseleave", handleInteractionEnd);
    scrollContainer.addEventListener("touchend", handleInteractionEnd);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      scrollContainer.removeEventListener("mouseenter", handleInteractionStart);
      scrollContainer.removeEventListener("touchstart", handleInteractionStart);
      scrollContainer.removeEventListener("mouseleave", handleInteractionEnd);
      scrollContainer.removeEventListener("touchend", handleInteractionEnd);
    };
  }, [visibleMovies]);

  return (
    <section id="movies" className="py-20 bg-gradient-to-b from-yassin-dark to-yassin-darkest relative">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 z-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(30,174,219,0.15),transparent),radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.1),transparent)]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 fade-in-up">
            <TypedText
              text="Unlimited Movies & Series"
              className="holographic-text"
              delay={100}
            />
          </h2>
          <p className="text-xl text-white/70 fade-in-up" style={{transitionDelay: "0.2s"}}>
            Explore our vast library of <span className="text-yassin-neon-purple font-semibold">40,000+</span> movies and TV shows
          </p>
        </div>

        {/* Genre Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 fade-in-up" style={{transitionDelay: "0.3s"}}>
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-2 rounded-full transition-all transform hover:scale-105 ${
                selectedGenre === genre
                  ? "bg-gradient-to-r from-yassin-neon-pink to-yassin-neon-purple text-white shadow-lg shadow-yassin-neon-pink/20"
                  : "bg-black/30 text-white/70 border border-white/10 hover:border-white/20"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Enhanced Scrolling Movie Display */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-6 hide-scrollbar fade-in-up"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", transitionDelay: "0.4s" }}
          >
            <div className="flex gap-6" style={{ minWidth: "max-content" }}>
              {visibleMovies.map((movie) => (
                <div 
                  key={movie.id} 
                  className="w-[200px]"
                  onMouseEnter={() => setHoveredMovie(movie.id)}
                  onMouseLeave={() => setHoveredMovie(null)}
                >
                  <div className="loading-border">
                    <GlassCard 
                      className="p-0 overflow-hidden relative h-[300px] border-none"
                      glowOnHover
                      neonColor="pink"
                    >
                      <div className="absolute inset-0">
                        <img 
                          src={movie.image} 
                          alt={movie.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg font-bold">
                          {hoveredMovie === movie.id ? (
                            <TypedText
                              text={movie.title}
                              typingSpeed={20}
                              showCursor={false}
                              className="text-white"
                            />
                          ) : (
                            movie.title
                          )}
                        </h3>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-white/70">{movie.year}</span>
                          <div className="flex items-center">
                            <span className="text-xs bg-yassin-neon-pink/20 text-yassin-neon-pink px-2 py-0.5 rounded">
                              ★ {movie.rating}
                            </span>
                          </div>
                        </div>
                        <span className="inline-block mt-2 px-2 py-0.5 bg-white/10 rounded text-xs">
                          {movie.genre}
                        </span>
                        
                        {hoveredMovie === movie.id && (
                          <div className="absolute left-0 right-0 -bottom-12 transform translate-y-0 opacity-0 group-hover:opacity-100 group-hover:-translate-y-12 transition-all duration-300 flex justify-center">
                            <button className="bg-yassin-neon-purple/80 hover:bg-yassin-neon-purple text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg shadow-yassin-neon-purple/30">
                              Watch Now
                            </button>
                          </div>
                        )}
                      </div>
                    </GlassCard>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced scroll indicators */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-yassin-darkest to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-yassin-darkest to-transparent pointer-events-none"></div>
        </div>

        <div className="text-center mt-12 fade-in-up" style={{transitionDelay: "0.5s"}}>
          <p className="text-white/60 mb-4">40,000+ movies and episodes in our collection</p>
          <a href="#pricing" className="btn-primary">
            Access Full Library
          </a>
        </div>
      </div>
    </section>
  );
}

export default MovieShowcase;
