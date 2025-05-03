
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import TypedText from "@/components/ui/TypedText";

const NavLinks = [
  { name: "Home", url: "/" },
  { name: "Channels", url: "#channels" },
  { name: "Movies", url: "#movies" },
  { name: "Pricing", url: "#pricing" },
  { name: "Installation", url: "#install" },
];

const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "ar", name: "العربية" },
  { code: "es", name: "Español" },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  // Detect browser language on mount
  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    const supportedLang = languages.find(lang => lang.code === browserLang);
    if (supportedLang) {
      setCurrentLanguage(supportedLang.code);
    }
  }, []);

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

  // Add neon cursor effect
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('neon-cursor');
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const addHovering = () => cursor.classList.add('hovering');
    const removeHovering = () => cursor.classList.remove('hovering');

    document.addEventListener('mousemove', moveCursor);
    
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', addHovering);
      el.addEventListener('mouseleave', removeHovering);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', addHovering);
        el.removeEventListener('mouseleave', removeHovering);
      });
      document.body.removeChild(cursor);
    };
  }, []);

  // Get language name from code
  const getLanguageName = (code) => {
    return languages.find(lang => lang.code === code)?.name || 'English';
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

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
            <span className="text-3xl logo-text text-gradient">
              <TypedText
                text="YassinIPTV"
                typingSpeed={70}
                showCursor={false}
                loop={false}
              />
            </span>
          </Link>

          {/* Desktop Navigation - Now properly centered */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 space-x-8">
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
          
          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative group">
              <button 
                onClick={toggleLanguageMenu} 
                className="language-selector group"
              >
                <Globe className="w-4 h-4 text-yassin-neon-purple" />
                <span>{getLanguageName(currentLanguage)}</span>
              </button>
              
              {languageMenuOpen && (
                <div className="language-dropdown">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLanguage(lang.code);
                        setLanguageMenuOpen(false);
                      }}
                      className={`language-option ${currentLanguage === lang.code ? 'bg-white/10' : ''}`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <a href="#trial" className="btn-primary">
              Free Trial
            </a>
          </div>

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
                    "text-white/80 hover:text-white py-2 transition-colors duration-200 font-medium text-center",
                    activeSection === link.name && "text-white border-l-2 border-yassin-neon-purple pl-2"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <TypedText text={link.name} typingSpeed={50} delay={100 * NavLinks.indexOf(link)} showCursor={false} />
                </a>
              ))}
              
              {/* Language selector in mobile menu */}
              <div className="py-2">
                <div className="flex justify-center gap-3">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => setCurrentLanguage(lang.code)}
                      className={`px-3 py-1 rounded ${
                        currentLanguage === lang.code 
                          ? 'bg-yassin-neon-purple/20 text-white' 
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      {lang.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
              
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
