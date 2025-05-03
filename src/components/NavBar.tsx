
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import TypedText from "@/components/ui/TypedText";

const NavLinks = [
  { name: "Home", url: "/" },
  { name: "Channels", url: "#channels" },
  { name: "Movies", url: "#movies" },
  { name: "Pricing", url: "#pricing" },
  { name: "Installation", url: "#install" },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Detect which section is in view
      const sections = document.querySelectorAll("section[id], div[id='home']");
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute("id");
        
        if (sectionTop < window.innerHeight / 2 && sectionTop > -window.innerHeight / 2) {
          const navLink = NavLinks.find(link => link.url === `#${sectionId}` || (link.url === "/" && sectionId === "home"));
          if (navLink) {
            setActiveSection(navLink.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to set initial state
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4",
        isScrolled ? "bg-black/80 backdrop-blur-xl shadow-lg shadow-black/10" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl font-bold text-gradient">
              <TypedText
                text="YassinIPTV"
                typingSpeed={70}
                showCursor={false}
                loop={false}
              />
            </span>
          </Link>

          {/* Desktop Navigation - Now centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {NavLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className={cn(
                  "text-white/80 hover:text-white transition-colors duration-200 font-medium relative",
                  activeSection === link.name && "text-white after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-yassin-neon-purple"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Action Button */}
          <a href="#trial" className="hidden md:inline-block btn-primary">
            Free Trial
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 glass-card rounded-xl animate-fade-in-up">
            <div className="flex flex-col space-y-4 px-6 py-2">
              {NavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className={cn(
                    "text-white/80 hover:text-white py-2 transition-colors duration-200 font-medium",
                    activeSection === link.name && "text-white border-l-2 border-yassin-neon-purple pl-2"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <TypedText text={link.name} typingSpeed={50} delay={100 * NavLinks.indexOf(link)} showCursor={false} />
                </a>
              ))}
              <a href="#trial" className="btn-primary text-center mt-2">
                Free Trial
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
