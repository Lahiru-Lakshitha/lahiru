import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useEffect, useState } from "react";


function TypewriterText() {
  const fullText = "Social Media Handler";
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="gradient-text inline-block">
      {displayText}
      <span className={`text-primary ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
    </span>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-primary/20 rounded-full animate-spin" style={{ animationDuration: "25s" }} />
      <div className="absolute top-40 right-20 w-16 h-16 border border-primary/10 rounded-full animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
      <div className="absolute bottom-32 left-10 w-24 h-24 border border-cyan-500/20 rounded-full animate-spin" style={{ animationDuration: "20s" }} />
      
      {/* Abstract Lines */}
      <div className="absolute top-1/3 left-0 w-40 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-32 h-[1px] bg-gradient-to-l from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute bottom-1/3 left-20 w-20 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent rotate-45" />
      
      {/* Floating Dots */}
      <div className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-primary/40 animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-cyan-500/30 animate-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: "1.5s" }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for new projects</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 animate-slide-up">
              Aspiring Digital Marketer &{" "}
              <TypewriterText />
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              IT graduate from the University of Colombo with a passion for digital marketing,social media management, and modern web development.

            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="xl" asChild>
                <a href="/cv.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
              <Button 
                variant="hero-outline" 
                size="xl" 
                onClick={() => {
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Play className="mr-2 h-5 w-5" />
                View Work
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative order-1 lg:order-2 flex justify-center animate-scale-in">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-cyan-500/50 rounded-full blur-3xl opacity-40 animate-pulse" />
              
              {/* Spider-Net Effect - SVG */}
              <svg 
                className="absolute -inset-12 sm:-inset-16 md:-inset-20 w-[calc(100%+6rem)] sm:w-[calc(100%+8rem)] md:w-[calc(100%+10rem)] h-[calc(100%+6rem)] sm:h-[calc(100%+8rem)] md:h-[calc(100%+10rem)] opacity-30"
                viewBox="0 0 400 400"
              >
                {/* Concentric circles */}
                <circle cx="200" cy="200" r="180" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.3" />
                <circle cx="200" cy="200" r="150" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.4" />
                <circle cx="200" cy="200" r="120" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.5" />
                
                {/* Radial lines */}
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const x2 = 200 + 180 * Math.cos(angle);
                  const y2 = 200 + 180 * Math.sin(angle);
                  return (
                    <line 
                      key={i} 
                      x1="200" 
                      y1="200" 
                      x2={x2} 
                      y2={y2} 
                      stroke="hsl(var(--primary))" 
                      strokeWidth="0.5" 
                      opacity="0.3"
                    />
                  );
                })}
                
                {/* Connection dots at intersections */}
                {[120, 150, 180].map((r) =>
                  [...Array(12)].map((_, i) => {
                    const angle = (i * 30 * Math.PI) / 180;
                    const cx = 200 + r * Math.cos(angle);
                    const cy = 200 + r * Math.sin(angle);
                    return (
                      <circle 
                        key={`${r}-${i}`} 
                        cx={cx} 
                        cy={cy} 
                        r="2" 
                        fill="hsl(var(--primary))" 
                        opacity="0.4"
                      />
                    );
                  })
                )}
              </svg>
              
              {/* Image Container with Hover Glow */}
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,255,255,0.4)] hover:border-primary/50 group">
                <img
                  src={profilePhoto}
                  alt="Lahiru - Digital Marketing Expert"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 px-4 py-2 rounded-xl bg-secondary/80 backdrop-blur-xl border border-border animate-float z-10">
                <span className="text-sm font-semibold">📈 Growth Expert</span>
              </div>
              <div className="absolute -bottom-6 -left-6 px-4 py-2 rounded-xl bg-secondary/80 backdrop-blur-xl border border-border animate-float z-10" style={{ animationDelay: "2s" }}>
                <span className="text-sm font-semibold">🎯 ROI Focused</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}