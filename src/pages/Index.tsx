
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ChannelShowcase from "@/components/ChannelShowcase";
import MovieShowcase from "@/components/MovieShowcase";
import PricingSection from "@/components/PricingSection";
import ResellerSection from "@/components/ResellerSection";
import InstallGuide from "@/components/InstallGuide";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ParticleBackground from "@/components/ParticleBackground";
import FeedbackSection from "@/components/FeedbackSection";
import FAQSection from "@/components/FAQSection";
import LanguageNotice from "@/components/LanguageNotice";
import "@/styles/loadingStyles.css";

const Index = () => {
  // Add scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.1, // Trigger when at least 10% of the element is visible
      rootMargin: '0px 0px -10% 0px' // Slightly before the element enters the viewport
    });

    const fadeElements = document.querySelectorAll(".fade-in-up, .reveal-animation");
    fadeElements.forEach((element) => {
      observer.observe(element);
    });

    // Disable right-click context menu (security measure)
    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };
    document.addEventListener("contextmenu", disableRightClick);

    // Disable F12 key (security measure)
    const disableF12 = (e: KeyboardEvent) => {
      if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault();
        return false;
      }
    };
    document.addEventListener("keydown", disableF12);

    // Disable view source (security measure)
    const disableViewSource = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
        return false;
      }
    };
    document.addEventListener("keydown", disableViewSource);

    // Disable selection (security measure)
    const disableSelection = () => {
      return false;
    };
    document.onselectstart = disableSelection;

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Initialize enhanced cursor effect
    const cursorInit = () => {
      const cursor = document.createElement('div');
      cursor.className = "neon-cursor";
      document.body.appendChild(cursor);
      
      const moveCursor = (e: MouseEvent) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      };
      
      const activateCursor = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        cursor.classList.add("hovering");
        
        // Special styling based on element type
        if (target.tagName === 'BUTTON' || target.closest('button')) {
          cursor.classList.add("hovering-button");
        } else if (target.tagName === 'A' || target.closest('a')) {
          cursor.classList.add("hovering-link");
        }
      };
      
      const deactivateCursor = () => {
        cursor.classList.remove("hovering", "hovering-button", "hovering-link");
      };
      
      document.addEventListener('mousemove', moveCursor);
      
      const interactiveElements = document.querySelectorAll('a, button, input, select, textarea');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', activateCursor);
        el.addEventListener('mouseleave', deactivateCursor);
      });
      
      // Create futuristic trail effect
      document.addEventListener('mousemove', (e) => {
        // Throttle to avoid performance issues
        if (Math.random() > 0.8) {
          const trail = document.createElement('div');
          trail.className = 'cursor-trail';
          trail.style.left = `${e.clientX}px`;
          trail.style.top = `${e.clientY}px`;
          document.body.appendChild(trail);
          
          // Remove trail after animation completes
          setTimeout(() => {
            if (document.body.contains(trail)) {
              document.body.removeChild(trail);
            }
          }, 600);
        }
      });
    };
    
    // Call cursor init with a slight delay to ensure DOM is ready
    setTimeout(cursorInit, 100);

    return () => {
      fadeElements.forEach((element) => {
        observer.unobserve(element);
      });
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableF12);
      document.removeEventListener("keydown", disableViewSource);
      document.onselectstart = null;
    };
  }, []);

  // Define movie posters to be added to the MovieShowcase component
  const moviePosters = [
    {
      id: 101,
      title: "Titanic",
      genre: "Romance",
      year: 1997,
      rating: 7.9,
      image: "/lovable-uploads/d32ccab7-637d-48c7-b9fd-3a214bdec3e3.png"
    },
    {
      id: 102,
      title: "Star Wars: The Empire Strikes Back",
      genre: "Sci-Fi",
      year: 1980,
      rating: 8.7,
      image: "/lovable-uploads/c1ed5536-ab6c-4c5a-8aec-9e2ef5c6ada6.png"
    },
    {
      id: 103,
      title: "Supersalidos",
      genre: "Comedy",
      year: 2007,
      rating: 7.6,
      image: "/lovable-uploads/1ece0d5a-0586-484d-b9e2-5ab121bb4910.png"
    },
    {
      id: 104,
      title: "The Big Lebowski",
      genre: "Comedy",
      year: 1998,
      rating: 8.1,
      image: "/lovable-uploads/580a3e78-0271-45f8-9d25-d43dd6b62942.png"
    },
    {
      id: 105,
      title: "The Dark Knight",
      genre: "Action",
      year: 2008,
      rating: 9.0,
      image: "/lovable-uploads/1200eca0-3026-444b-8579-b152bea0a0d4.png"
    },
    {
      id: 106,
      title: "The Godfather",
      genre: "Crime",
      year: 1972,
      rating: 9.2,
      image: "/lovable-uploads/1a31b48b-46cf-4a27-ad8c-d0421820c072.png"
    },
    {
      id: 107,
      title: "The Matrix",
      genre: "Sci-Fi",
      year: 1999,
      rating: 8.7,
      image: "/lovable-uploads/331841f0-afd0-4c62-9d3f-51d4760e8c6e.png"
    },
    {
      id: 108,
      title: "The Notebook",
      genre: "Romance",
      year: 2004,
      rating: 7.8,
      image: "/lovable-uploads/5376cbf9-290d-47d7-b23d-3fc4751a16f1.png"
    },
    {
      id: 109,
      title: "The Shining",
      genre: "Horror",
      year: 1980,
      rating: 8.4,
      image: "/lovable-uploads/6f36df6e-de26-4e77-95f9-98187ac4ecfc.png"
    },
    {
      id: 110,
      title: "Die Hard",
      genre: "Action",
      year: 1988,
      rating: 8.2,
      image: "/lovable-uploads/93dde9aa-2025-4264-812f-6e4dc4e96261.png"
    },
    {
      id: 111,
      title: "Fight Club",
      genre: "Drama",
      year: 1999,
      rating: 8.8,
      image: "/lovable-uploads/a147efac-3c81-41e2-aaea-3279685554ab.png"
    },
    {
      id: 112,
      title: "Forrest Gump",
      genre: "Drama",
      year: 1994,
      rating: 8.8,
      image: "/lovable-uploads/f61546a6-412a-4fe4-a644-490ba93e26fd.png"
    },
    {
      id: 113,
      title: "Get Out",
      genre: "Horror",
      year: 2017,
      rating: 7.7,
      image: "/lovable-uploads/2e3cf246-33dc-4ae6-887e-25d97642a02e.png"
    },
    {
      id: 114,
      title: "Gladiator",
      genre: "Action",
      year: 2000,
      rating: 8.5,
      image: "/lovable-uploads/2582aa7c-692e-408f-bb58-de95751adee6.png"
    },
    {
      id: 115,
      title: "Groundhog Day",
      genre: "Comedy",
      year: 1993,
      rating: 8.0,
      image: "/lovable-uploads/57b76de1-370a-48dc-9cbc-5c0801e6bb94.png"
    },
    {
      id: 116,
      title: "Hereditary",
      genre: "Horror",
      year: 2018,
      rating: 7.3,
      image: "/lovable-uploads/bf7c8b90-df9e-4342-8a10-53e5a44b7238.png"
    },
    {
      id: 117,
      title: "Inception",
      genre: "Sci-Fi",
      year: 2010,
      rating: 8.8,
      image: "/lovable-uploads/8a00e0f3-c27e-4db5-85a9-d34170154cb4.png"
    },
    {
      id: 118,
      title: "Interstellar",
      genre: "Sci-Fi",
      year: 2014,
      rating: 8.6,
      image: "/lovable-uploads/c29f6ab2-7027-4beb-8256-fe5525fdf66d.png"
    },
    {
      id: 119,
      title: "La La Land",
      genre: "Musical",
      year: 2016,
      rating: 8.0,
      image: "/lovable-uploads/7c6072ae-475d-419a-9106-fb6b8388b740.png"
    },
    {
      id: 120,
      title: "Pan's Labyrinth",
      genre: "Fantasy",
      year: 2006,
      rating: 8.2,
      image: "/lovable-uploads/c8a438ff-2981-4b64-aafa-9188e9775fc9.png"
    }
  ];

  return (
    <div className="min-h-screen bg-yassin-darkest overflow-x-hidden">
      {/* Enhanced Animated Background */}
      <div className="animated-bg"></div>
      <div className="animated-grid">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>
      <ParticleBackground />
      
      {/* Enhanced Cyberpunk Light Beams */}
      <div className="light-beam light-beam-1"></div>
      <div className="light-beam light-beam-2"></div>
      <div className="light-beam light-beam-3"></div>
      
      {/* Neural Network Grid Effect */}
      <div className="neural-grid"></div>

      {/* Navigation */}
      <div id="home"></div>
      <NavBar />

      {/* Content Sections */}
      <main className="relative z-10">
        <Hero />
        
        <div className="section-divider"></div>
        
        <div className="divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="currentColor" d="M0,96L80,101.3C160,107,320,117,480,112C640,107,800,85,960,80C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" className="text-yassin-dark"></path>
          </svg>
        </div>
        
        <ChannelShowcase />
        
        <div className="section-divider"></div>
        
        <div className="divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto transform rotate-180">
            <path fill="currentColor" d="M0,96L80,101.3C160,107,320,117,480,112C640,107,800,85,960,80C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" className="text-yassin-dark"></path>
          </svg>
        </div>
        
        <MovieShowcase additionalMovies={moviePosters} />
        
        <div className="section-divider"></div>
        
        <div className="divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="currentColor" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" className="text-yassin-darker"></path>
          </svg>
        </div>
        
        <PricingSection />
        
        <div className="section-divider"></div>
        
        <div className="divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto transform rotate-180">
            <path fill="currentColor" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" className="text-yassin-darker"></path>
          </svg>
        </div>
        
        <ResellerSection />
        
        <div className="section-divider"></div>
        
        <div className="divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="currentColor" d="M0,96L80,80C160,64,320,32,480,32C640,32,800,64,960,69.3C1120,75,1280,53,1360,42.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" className="text-yassin-dark"></path>
          </svg>
        </div>
        
        <InstallGuide />
        
        <div className="section-divider"></div>
        
        {/* Enhanced FAQ Section */}
        <FAQSection />
        
        <div className="section-divider"></div>
        
        <FeedbackSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Elements */}
      <WhatsAppButton 
        phoneNumber="212657263966"
        text="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 animate-float"
      />
      
      {/* Language Notice */}
      <LanguageNotice />
    </div>
  );
};

export default Index;
