import { useState, useEffect } from "react";
import { Award, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollArrow } from "@/components/ScrollArrow";
import { CertificateModal, Certification } from "@/components/CertificateModal";

const allCertifications: Certification[] = [
  {
    title: "Google Ads Search Certification",
    platform: "Google",
    year: "2024",
    image: "/certificates/google-ads-search.jpg",
    category: "digital-marketing",
  },
  {
    title: "Meta Blueprint Certification",
    platform: "Meta",
    year: "2024",
    image: "/certificates/meta-blueprint.jpg",
    category: "digital-marketing",
  },
  {
    title: "Google Analytics Certification",
    platform: "Google",
    year: "2023",
    image: "/certificates/google-analytics.jpg",
    category: "digital-marketing",
  },
  {
    title: "SEO Fundamentals",
    platform: "HubSpot",
    year: "2023",
    image: "/certificates/seo-fundamentals.jpg",
    category: "digital-marketing",
  },
  {
    title: "Google Ads Display Certification",
    platform: "Google",
    year: "2024",
    image: "/certificates/google-ads-display.jpg",
    category: "digital-marketing",
  },
  {
    title: "Social Media Marketing",
    platform: "Coursera",
    year: "2023",
    image: "/certificates/social-media-marketing.jpg",
    category: "digital-marketing",
  },
  {
    title: "Adobe Photoshop Expert",
    platform: "Adobe",
    year: "2023",
    image: "/certificates/adobe-photoshop.jpg",
    category: "graphic-design",
  },
  {
    title: "Adobe Illustrator Mastery",
    platform: "Adobe",
    year: "2023",
    image: "/certificates/adobe-illustrator.jpg",
    category: "graphic-design",
  },
  {
    title: "Canva Design Professional",
    platform: "Canva",
    year: "2024",
    image: "/certificates/canva-design.jpg",
    category: "graphic-design",
  },
  {
    title: "UI/UX Design Fundamentals",
    platform: "Udemy",
    year: "2023",
    image: "/certificates/ui-ux-design.jpg",
    category: "graphic-design",
  },
  {
    title: "React Developer Certificate",
    platform: "Coursera",
    year: "2024",
    image: "/certificates/react-developer.jpg",
    category: "web-development",
  },
  {
    title: "JavaScript Advanced",
    platform: "Udemy",
    year: "2023",
    image: "/certificates/javascript-advanced.jpg",
    category: "web-development",
  },
  {
    title: "Responsive Web Design",
    platform: "freeCodeCamp",
    year: "2023",
    image: "/certificates/responsive-web.jpg",
    category: "web-development",
  },
  {
    title: "HTML & CSS Mastery",
    platform: "Codecademy",
    year: "2022",
    image: "/certificates/html-css.jpg",
    category: "web-development",
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleCardClick = (cert: Certification) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Button 
              variant="ghost" 
              size="sm" 
              className="mb-6 text-muted-foreground hover:text-foreground"
              asChild
            >
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Certifications</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              My{" "}
              <span className="gradient-text">Certifications</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              A comprehensive collection of my professional certifications across 
              digital marketing, graphic design, and web development.
            </p>
          </div>

          {/* All Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allCertifications.map((cert, index) => (
              <div
                key={cert.title}
                onClick={() => handleCardClick(cert)}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 cursor-pointer animate-gallery-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-secondary/50">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                  
                  {/* Platform Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                    {cert.platform}
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-secondary/90 text-foreground text-xs font-medium">
                    {cert.year}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <div className="text-xs text-primary font-medium mb-2 uppercase tracking-wider">
                    {cert.category.replace(/-/g, ' ')}
                  </div>
                  <h3 className="text-base font-display font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <ScrollArrow />

      {/* Certificate Modal */}
      <CertificateModal
        certification={selectedCert}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
