
import { useRef, useEffect, useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import TypedText from "@/components/ui/TypedText";

// Example movie data
const movies = [
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
const genres = ["All", "Sci-Fi", "Action", "Drama", "Crime", "Comedy"];

export function MovieShowcase() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [visibleMovies, setVisibleMovies] = useState(movies);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filter movies based on genre
  useEffect(() => {
    if (selectedGenre === "All") {
      setVisibleMovies(movies);
    } else {
      setVisibleMovies(movies.filter(movie => movie.genre === selectedGenre));
    }
  }, [selectedGenre]);

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
  }, [visibleMovies]);

  return (
    <section id="movies" className="py-20 bg-gradient-to-b from-yassin-dark to-yassin-darkest">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <TypedText
              text="Unlimited Movies & Series"
              className="text-gradient"
              delay={100}
            />
          </h2>
          <p className="text-xl text-white/70">
            Explore our vast library of movies and TV shows
          </p>
        </div>

        {/* Genre Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedGenre === genre
                  ? "bg-yassin-neon-pink text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Scrolling Movie Display */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto pb-6 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-6" style={{ minWidth: "max-content" }}>
            {visibleMovies.map((movie) => (
              <div key={movie.id} className="w-[200px]">
                <GlassCard 
                  className="p-0 overflow-hidden relative group h-[300px]"
                  glowOnHover
                  neonColor="pink"
                >
                  <div className="absolute inset-0">
                    <img 
                      src={movie.image} 
                      alt={movie.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold">{movie.title}</h3>
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
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
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
