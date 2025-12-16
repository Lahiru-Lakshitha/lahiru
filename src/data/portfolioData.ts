import { Video, Image, Camera, Share2, Palette, Monitor, Megaphone } from "lucide-react";

export interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  images?: string[];
  videoUrl?: string;
  websiteUrl?: string;
  description: string;
  category: string;
  type: "video" | "image";
  results?: string;
  features?: string[];
  client?: string;
  showOnHomepage: boolean;
}

export const categories = [
  { id: "all", label: "All", icon: null },
  { id: "video-editing", label: "Video Editing", icon: Video },
  { id: "social-media-designs", label: "Social Media Designs", icon: Image },
  { id: "social-media-projects", label: "Social Media Projects", icon: Share2 },
  { id: "website-designs", label: "Website Designs", icon: Palette },
  { id: "thumbnails", label: "Thumbnails", icon: Monitor },
  { id: "advertisements", label: "Advertisements", icon: Megaphone },
  { id: "photo-editing", label: "Photo Editing", icon: Camera },
];

export const galleryCategories = [
  "social-media-designs",
  "social-media-projects",
  "thumbnails",
  "advertisements",
  "photo-editing",
];

export const portfolioItems: PortfolioItem[] = [
  // Video Editing
  {
    id: "video-1",
    title: "YouTube Video Production",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Full video editing for YouTube content creators.",
    category: "video-editing",
    type: "video",
    showOnHomepage: true,
  },
  {
    id: "video-2",
    title: "TikTok & Reels Editing",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Trendy short-form video editing with effects.",
    category: "video-editing",
    type: "video",
    showOnHomepage: false,
  },
  {
    id: "video-3",
    title: "Corporate Videos",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Professional video editing for business presentations.",
    category: "video-editing",
    type: "video",
    showOnHomepage: false,
  },
  {
    id: "video-4",
    title: "Motion Graphics",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Animated graphics and visual effects for videos.",
    category: "video-editing",
    type: "video",
    showOnHomepage: false,
  },

  // Social Media Designs
  {
    id: "social-design-1",
    title: "Brand Campaign Graphics",
    image: "https://images.unsplash.com/photo-611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop",
    description: "Eye-catching social media graphics for brand awareness campaigns.",
    category: "social-media-designs",
    type: "image",
    showOnHomepage: true,
  },
  {
    id: "social-design-2",
    title: "Instagram Story Templates",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&h=400&fit=crop",
    description: "Engaging story templates optimized for maximum engagement.",
    category: "social-media-designs",
    type: "image",
    showOnHomepage: false,
  },
  {
    id: "social-design-3",
    title: "LinkedIn Post Designs",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop",
    description: "Professional designs for B2B and corporate content.",
    category: "social-media-designs",
    type: "image",
    showOnHomepage: false,
  },
  {
    id: "social-design-4",
    title: "Facebook Ad Creatives",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
    description: "High-converting ad creatives for paid social campaigns.",
    category: "social-media-designs",
    type: "image",
    showOnHomepage: false,
  },

  // Social Media Projects
  {
    id: "social-project-1",
    title: "E-Commerce Launch Campaign",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=900&h=900&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1080&h=1350&fit=crop",
    ],
    description: "Complete social media strategy for product launch with engaging visuals and targeted content.",
    category: "social-media-projects",
    type: "image",
    results: "150K+ reach in first week",
    showOnHomepage: true,
  },
  {
    id: "social-project-2",
    title: "Restaurant Rebrand",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&h=900&fit=crop",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1080&h=1350&fit=crop",
    ],
    description: "Full social media presence overhaul and content strategy for a modern dining experience.",
    category: "social-media-projects",
    type: "image",
    results: "280% engagement increase",
    showOnHomepage: false,
  },
  {
    id: "social-project-3",
    title: "Fitness Influencer Growth",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&h=900&fit=crop",
    ],
    description: "Content strategy and management for fitness brand with motivational visuals.",
    category: "social-media-projects",
    type: "image",
    results: "50K new followers in 3 months",
    showOnHomepage: false,
  },
  {
    id: "social-project-4",
    title: "Tech Startup Awareness",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=900&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1080&h=1350&fit=crop",
    ],
    description: "B2B social media campaign for SaaS product with professional tech aesthetics.",
    category: "social-media-projects",
    type: "image",
    results: "1,200+ qualified leads",
    showOnHomepage: false,
  },

  // Website Designs
  {
    id: "website-1",
    title: "Tech Startup Website",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
    description: "Modern website design for innovative tech startups with cutting-edge UI/UX.",
    category: "website-designs",
    type: "image",
    websiteUrl: "https://example.com",
    features: [
      "Responsive design for all devices",
      "Custom animations and micro-interactions",
      "SEO optimized structure",
      "Fast loading performance",
    ],
    showOnHomepage: true,
  },
  {
    id: "website-2",
    title: "Restaurant Website",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop",
    description: "Beautiful restaurant website with online reservations and menu showcase.",
    category: "website-designs",
    type: "image",
    websiteUrl: "https://example.com",
    features: [
      "Online table reservation system",
      "Interactive menu with photos",
      "Integration with delivery platforms",
      "Mobile-first design approach",
    ],
    showOnHomepage: true,
  },
  {
    id: "website-3",
    title: "E-Commerce Store",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    description: "Full-featured e-commerce website for online retailers with seamless checkout.",
    category: "website-designs",
    type: "image",
    websiteUrl: "https://example.com",
    features: [
      "Secure payment gateway integration",
      "Product filtering and search",
      "User account management",
      "Inventory tracking system",
    ],
    showOnHomepage: false,
  },

  // Thumbnails
  {
    id: "thumb-1",
    title: "YouTube Gaming Thumbnails",
    image: "https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=600&h=400&fit=crop",
    description: "Eye-catching thumbnails that maximize click-through rates.",
    category: "thumbnails",
    type: "image",
    showOnHomepage: true,
  },
  {
    id: "thumb-2",
    title: "Educational Content Thumbnails",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
    description: "Professional thumbnails for educational creators.",
    category: "thumbnails",
    type: "image",
    showOnHomepage: false,
  },
  {
    id: "thumb-3",
    title: "Podcast Cover Art",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop",
    description: "Stunning podcast covers and episode thumbnails.",
    category: "thumbnails",
    type: "image",
    showOnHomepage: false,
  },

  // Advertisements
  {
    id: "ad-1",
    title: "Google Display Ads",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    description: "High-converting display ad designs for Google Ads.",
    category: "advertisements",
    type: "image",
    showOnHomepage: false,
  },
  {
    id: "ad-2",
    title: "Meta Ad Campaigns",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop",
    description: "Scroll-stopping ad creatives for Facebook and Instagram.",
    category: "advertisements",
    type: "image",
    showOnHomepage: false,
  },
  {
    id: "ad-3",
    title: "LinkedIn Sponsored Ads",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=600&h=400&fit=crop",
    description: "Professional B2B advertising creatives.",
    category: "advertisements",
    type: "image",
    showOnHomepage: false,
  },

  // Photo Editing
  {
    id: "photo-1",
    title: "Product Photography",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
    description: "Professional product photo retouching and enhancement.",
    category: "photo-editing",
    type: "image",
    showOnHomepage: false,
  },
  {
    id: "photo-2",
    title: "Portrait Retouching",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=400&fit=crop",
    description: "High-end portrait editing for personal branding.",
    category: "photo-editing",
    type: "image",
    showOnHomepage: false,
  },
  {
    id: "photo-3",
    title: "Real Estate Photography",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    description: "Property photo enhancement and virtual staging.",
    category: "photo-editing",
    type: "image",
    showOnHomepage: false,
  },
  {
    id: "photo-4",
    title: "Food Photography",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop",
    description: "Appetizing food photo editing for restaurants.",
    category: "photo-editing",
    type: "image",
    showOnHomepage: false,
  },
];

// Helper functions
export const getHomepageItems = () => portfolioItems.filter(item => item.showOnHomepage);
export const getItemsByCategory = (category: string) => 
  category === "all" ? portfolioItems : portfolioItems.filter(item => item.category === category);
