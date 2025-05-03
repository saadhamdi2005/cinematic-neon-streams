
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

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

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-black/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl font-bold text-gradient">YassinIPTV</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NavLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
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
                  className="text-white/80 hover:text-white py-2 transition-colors duration-200 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="#trial" className="btn-primary text-center">
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
