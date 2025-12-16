import { useState } from "react";
import { Target, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PortfolioModal } from "@/components/PortfolioModal";
import { GalleryModal } from "@/components/GalleryModal";
import { PortfolioGrid } from "@/components/portfolio/PortfolioCard";
import { getHomepageItems, galleryCategories, PortfolioItem } from "@/data/portfolioData";

export function PortfolioSection() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const homepageItems = getHomepageItems();

  const handleViewFullPortfolio = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // Determine which modal to show based on category
  const isGalleryCategory = selectedItem && galleryCategories.includes(selectedItem.category);
  
  // Prepare gallery item with images array
  const galleryItem = selectedItem && isGalleryCategory ? {
    title: selectedItem.title,
    images: selectedItem.images || [selectedItem.image],
    description: selectedItem.description,
  } : null;

  // Determine if we should show video cards
  const showVideos = homepageItems.some(item => item.type === "video" && item.category === "video-editing");

  return (
    <section id="portfolio" className="py-12 md:py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Portfolio</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Case Studies That{" "}
            <span className="gradient-text">Speak Results</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Real campaigns, real numbers. Here's a glimpse of how I've helped 
            businesses achieve measurable growth.
          </p>
        </div>

        {/* Projects Grid */}
        <PortfolioGrid 
          items={homepageItems} 
          showVideos={showVideos}
          onItemClick={handleItemClick}
          columns="3"
        />

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Button variant="hero" size="lg" asChild onClick={handleViewFullPortfolio}>
            <Link to="/portfolio">
              View Full Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#contact">
              Discuss Your Project
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Gallery Modal for non-web design categories */}
      <GalleryModal 
        item={galleryItem} 
        isOpen={isModalOpen && !!isGalleryCategory} 
        onClose={handleCloseModal} 
      />
      
      {/* Portfolio Modal for web design and video categories */}
      <PortfolioModal 
        item={selectedItem} 
        isOpen={isModalOpen && !isGalleryCategory} 
        onClose={handleCloseModal} 
      />
    </section>
  );
}
