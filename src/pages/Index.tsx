
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ChannelShowcase from "@/components/ChannelShowcase";
import MovieShowcase from "@/components/MovieShowcase";
import PricingSection from "@/components/PricingSection";
import InstallGuide from "@/components/InstallGuide";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ParticleBackground from "@/components/ParticleBackground";
import AIChatbot from "@/components/AIChatbot";

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

    const fadeElements = document.querySelectorAll(".fade-in-up");
    fadeElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      fadeElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  // Define movie posters to be added to the MovieShowcase component
  const moviePosters = [
    {
      id: 101,
      title: "Pride & Prejudice",
      genre: "Drama",
      year: 2005,
      rating: 7.8,
      image: "/lovable-uploads/61ae7544-e0ad-47e5-a07d-85e6f8c68475.png"
    },
    {
      id: 102,
      title: "Schindler's List",
      genre: "Drama",
      year: 1993,
      rating: 8.9,
      image: "/lovable-uploads/9810ba33-9132-47ca-a8ab-5de75f5d019e.png"
    },
    {
      id: 103,
      title: "Spirited Away",
      genre: "Animation",
      year: 2001,
      rating: 8.6,
      image: "/lovable-uploads/1966ec4a-d3b6-4f82-a6a4-99d2781b0976.png"
    },
    {
      id: 104,
      title: "A Quiet Place",
      genre: "Horror",
      year: 2018,
      rating: 7.5,
      image: "/lovable-uploads/1afb61ae-83ad-402f-a90a-b1c65c119429.png"
    },
    {
      id: 105,
      title: "Amélie",
      genre: "Comedy",
      year: 2001,
      rating: 8.3,
      image: "/lovable-uploads/dfd5268e-a3b1-4d7a-8387-1dc5a4623cdb.png"
    },
    {
      id: 106,
      title: "Blade Runner 2049",
      genre: "Sci-Fi",
      year: 2017,
      rating: 8.0,
      image: "/lovable-uploads/0650b9d0-e10d-4a26-a76c-3a9a8072140b.png"
    },
    {
      id: 107,
      title: "Bridesmaids",
      genre: "Comedy",
      year: 2011,
      rating: 6.8,
      image: "/lovable-uploads/18b95498-97f9-4645-9a43-03c03038042c.png"
    },
    {
      id: 108,
      title: "Casablanca",
      genre: "Romance",
      year: 1942,
      rating: 8.5,
      image: "/lovable-uploads/024ca144-5201-4352-8bd9-84476ed3cbd0.png"
    },
    {
      id: 109,
      title: "City of God",
      genre: "Crime",
      year: 2002,
      rating: 8.6,
      image: "/lovable-uploads/2bdd82e6-9a66-42ce-89e3-3d2c7159ace0.png"
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

      {/* Navigation */}
      <div id="home"></div>
      <NavBar />

      {/* Content Sections */}
      <main className="relative z-10">
        <Hero />
        <div className="divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="currentColor" d="M0,96L80,101.3C160,107,320,117,480,112C640,107,800,85,960,80C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" className="text-yassin-dark"></path>
          </svg>
        </div>
        <ChannelShowcase />
        <div className="divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto transform rotate-180">
            <path fill="currentColor" d="M0,96L80,101.3C160,107,320,117,480,112C640,107,800,85,960,80C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" className="text-yassin-dark"></path>
          </svg>
        </div>
        <MovieShowcase additionalMovies={moviePosters} />
        <div className="divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="currentColor" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" className="text-yassin-darker"></path>
          </svg>
        </div>
        <PricingSection />
        <div className="divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto transform rotate-180">
            <path fill="currentColor" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" className="text-yassin-darker"></path>
          </svg>
        </div>
        <InstallGuide />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Elements */}
      <WhatsAppButton 
        phoneNumber="212657263966"
        text="Chat on WhatsApp"
      />
      <AIChatbot />
    </div>
  );
};

export default Index;
