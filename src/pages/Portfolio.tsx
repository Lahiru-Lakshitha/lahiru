import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollArrow } from "@/components/ScrollArrow";
import { PortfolioModal } from "@/components/PortfolioModal";
import { GalleryModal } from "@/components/GalleryModal";
import {
  PortfolioGrid,
  MasonryGallery,
} from "@/components/portfolio/PortfolioCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import {
  categories,
  galleryCategories,
  getItemsByCategory,
  PortfolioItem,
} from "@/data/portfolioData";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const filteredItems = getItemsByCategory(activeCategory);
  const showVideos = activeCategory === "video-editing";

  const isMasonryCategory = [
    "social-media-designs",
    "thumbnails",
    "photo-editing",
  ].includes(activeCategory);

  // ✅ CONSISTENT CLICK BEHAVIOR (NO AUTO OPEN WEBSITE)
  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // Determine which modal to show
  const isGalleryCategory =
    selectedItem && galleryCategories.includes(selectedItem.category);

  // Prepare gallery modal data
  const galleryItem =
    selectedItem && isGalleryCategory
      ? {
          title: selectedItem.title,
          images: selectedItem.images || [selectedItem.image],
          description: selectedItem.description,
        }
      : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Button variant="ghost" className="mb-6" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl">
            A collection of my work across video editing, social media design,
            branding, and complete marketing campaigns.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 border-b border-border sticky top-16 md:top-20 bg-background/95 backdrop-blur-xl z-40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all flex items-center gap-1.5 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                }`}
              >
                {category.icon && <category.icon className="w-3.5 h-3.5" />}
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-muted-foreground mb-8">
            Showing{" "}
            <span className="text-foreground font-medium">
              {filteredItems.length}
            </span>{" "}
            projects
          </p>

          {filteredItems.length > 0 ? (
            isMasonryCategory ? (
              <MasonryGallery
                items={filteredItems}
                onItemClick={handleItemClick}
              />
            ) : (
              <PortfolioGrid
                items={filteredItems}
                showVideos={showVideos}
                onItemClick={handleItemClick}
                columns="4"
              />
            )
          ) : (
            <div className="text-center py-20 text-muted-foreground">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      <Footer />
      <ScrollArrow />

      {/* Gallery Modal */}
      <GalleryModal
        item={galleryItem}
        isOpen={isModalOpen && !!isGalleryCategory}
        onClose={handleCloseModal}
      />

      {/* Portfolio Modal */}
      <PortfolioModal
        item={selectedItem}
        isOpen={isModalOpen && !isGalleryCategory}
        onClose={handleCloseModal}
      />
    </div>
  );
}
