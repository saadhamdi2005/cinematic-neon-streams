
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

const Index = () => {
  // Add scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
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

  return (
    <div className="min-h-screen bg-yassin-darkest overflow-x-hidden">
      {/* Animated Background */}
      <div className="animated-bg"></div>
      <ParticleBackground />

      {/* Navigation */}
      <NavBar />

      {/* Content Sections */}
      <main>
        <Hero />
        <ChannelShowcase />
        <MovieShowcase />
        <PricingSection />
        <InstallGuide />
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton 
        phoneNumber="212657263966"
        text="Chat on WhatsApp"
      />
    </div>
  );
};

export default Index;
