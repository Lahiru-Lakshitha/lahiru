import { useState } from "react";
import { Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CertificateModal, Certification } from "@/components/CertificateModal";

const certifications: Certification[] = [
  {
    title: "Google Ads Search Certification",
    platform: "Google",
    year: "2024",
    image: "/certificates/google-ads-search.jpg",
    category: "Digital Marketing",
  },
  {
    title: "Meta Blueprint Certification",
    platform: "Meta",
    year: "2024",
    image: "/certificates/meta-blueprint.jpg",
    category: "Digital Marketing",
  },
  {
    title: "Google Analytics Certification",
    platform: "Google",
    year: "2023",
    image: "/certificates/google-analytics.jpg",
    category: "Digital Marketing",
  },
  
];

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (cert: Certification) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  const handleViewAllCertifications = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <section id="professional-certifications" className="py-12 md:py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Certifications</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Professional{" "}
            <span className="gradient-text">Certifications</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Continuously learning and staying updated with industry-recognized 
            certifications from leading platforms.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.slice(0, 6).map((cert, index) => (
            <div
              key={cert.title}
              onClick={() => handleCardClick(cert)}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
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
              <div className="p-6">
                <div className="text-xs text-primary font-medium mb-2 uppercase tracking-wider">
                  {cert.category}
                </div>
                <h3 className="text-lg font-display font-semibold group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Button variant="hero" size="lg" asChild onClick={handleViewAllCertifications}>
            <Link to="/certifications">
              View All Certifications
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        certification={selectedCert}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
