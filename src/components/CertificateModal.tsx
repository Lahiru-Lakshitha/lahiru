import { useEffect } from "react";
import { X, Award } from "lucide-react";

export interface Certification {
  title: string;
  platform: string;
  year: string;
  image: string;
  category: string;
  description?: string;
}

interface CertificateModalProps {
  certification: Certification | null;
  isOpen: boolean;
  onClose: () => void;
}

const certificationDescriptions: Record<string, string> = {
  "Google Ads Search Certification": "Mastered search advertising strategies, keyword targeting, ad creation, and campaign optimization for Google's search network.",
  "Meta Blueprint Certification": "Learned advanced Facebook and Instagram advertising, audience targeting, and campaign management across Meta platforms.",
  "Google Analytics Certification": "Gained expertise in web analytics, data interpretation, user behavior tracking, and conversion measurement.",
  "SEO Fundamentals": "Developed skills in search engine optimization, keyword research, on-page SEO, and link building strategies.",
  "Google Ads Display Certification": "Learned display advertising, remarketing strategies, and visual ad creation for Google's display network.",
  "Social Media Marketing": "Mastered social media strategy, content creation, community management, and platform-specific marketing techniques.",
  "Adobe Photoshop Expert": "Advanced photo editing, digital manipulation, compositing, and professional image enhancement techniques.",
  "Adobe Illustrator Mastery": "Vector graphics creation, logo design, illustration techniques, and print-ready artwork preparation.",
  "Canva Design Professional": "Professional design skills using Canva for social media graphics, presentations, and marketing materials.",
  "UI/UX Design Fundamentals": "User interface design principles, user experience research, wireframing, and prototyping techniques.",
  "React Developer Certificate": "Modern React development, hooks, state management, component architecture, and best practices.",
  "JavaScript Advanced": "Advanced JavaScript concepts including ES6+, async programming, closures, and design patterns.",
  "Responsive Web Design": "Mobile-first design, CSS Grid, Flexbox, and creating websites that work across all devices.",
  "HTML & CSS Mastery": "Semantic HTML, modern CSS techniques, animations, and web accessibility standards.",
};

export function CertificateModal({ certification, isOpen, onClose }: CertificateModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certification) return null;

  const description = certification.description;


  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-md" />

      {/* Modal Content */}
      <div
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-auto rounded-2xl bg-card border border-border shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-secondary/80 hover:bg-secondary text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Image */}
        <div className="relative bg-secondary/30">
          <img
            src={certification.image}
            alt={certification.title}
            className="w-full h-auto max-h-[60vh] object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop`;
            }}
          />
        </div>

        {/* Certificate Details */}
        <div className="p-6 space-y-4">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">{certification.platform}</span>
            </div>
            <div className="px-3 py-1.5 rounded-full bg-secondary text-foreground text-sm font-medium">
              {certification.year}
            </div>
            <div className="px-3 py-1.5 rounded-full bg-secondary/50 text-muted-foreground text-sm">
              {certification.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-display font-bold">
            {certification.title}
          </h2>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
