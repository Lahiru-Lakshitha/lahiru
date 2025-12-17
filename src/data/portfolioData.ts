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
  { id: "social-media-designs", label: "Social Media Designs", icon: Image },
  { id: "website-designs", label: "Website Designs", icon: Palette },
  { id: "social-media-projects", label: "Social Media Projects", icon: Share2 },
  { id: "thumbnails", label: "Thumbnails", icon: Monitor },
  { id: "video-editing", label: "Video Editing", icon: Video },
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
    showOnHomepage: false,
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
  image: "https://i.postimg.cc/151kkSPS/Whats-App-Image-2025-12-11-at-5-01-00-PM.jpg",
  description: "Designed for DJ Event hold by Kamatha Restaurant",
  category: "social-media-designs",
  type: "image",
  showOnHomepage: false,
},

{
  id: "social-design-2",
  title: "Facebook Ad Creatives",
  image: "https://i.postimg.cc/J4ytSb8q/Green-And-White-Modern-Phone-Sale-Instagram-Post.png",
  description: "High-converting ad creatives for paid social campaigns.",
  category: "social-media-designs",
  type: "image",
  showOnHomepage: false,
},

{
  id: "social-design-3",
  title: "Facebook Ad Creatives",
  image: "https://i.postimg.cc/vTXYVZ52/Pink-and-Orange-Modern-Sunset-Party-Poster.png",
  description: "High-converting ad creatives for paid social campaigns.",
  category: "social-media-designs",
  type: "image",
  showOnHomepage: false,
},

{
  id: "social-design-4",
  title: "Facebook Ad Creatives",
  image: "https://i.postimg.cc/kMwqwDtL/Red-and-Navy-Modern-Phone-Repair-Services-Poster-Landscape.png",
  description: "High-converting ad creatives for paid social campaigns.",
  category: "social-media-designs",
  type: "image",
  showOnHomepage: false,
},

{
  id: "social-design-5",
  title: "Facebook Ad Creatives",
  image: "https://i.postimg.cc/T1P8BqW9/Blue-And-White-Creative-Summer-Party-Poster.png",
  description: "High-converting ad creatives for paid social campaigns.",
  category: "social-media-designs",
  type: "image",
  showOnHomepage: false,
},

{
  id: "social-design-6",
  title: "Facebook Ad Creatives",
  image: "https://i.postimg.cc/dVb2dMkR/Blue-Yellow-Simple-Online-Course-Facebook-Post.png",
  description: "High-converting ad creatives for paid social campaigns.",
  category: "social-media-designs",
  type: "image",
  showOnHomepage: false,
},

{
  id: "social-design-7",
  title: "Facebook Ad Creatives",
  image: "https://i.postimg.cc/XNs9LBB3/Dark-Blue-White-Modern-Real-State-For-Sale-Instagram-Post.png",
  description: "High-converting ad creatives for paid social campaigns.",
  category: "social-media-designs",
  type: "image",
  showOnHomepage: true,
},

{
  id: "social-design-8",
  title: "Facebook Ad Creatives",
  image: "https://i.postimg.cc/tgdxxsGc/Red-Illustrative-Burger-Food-Facebook-Post.png",
  description: "High-converting ad creatives for paid social campaigns.",
  category: "social-media-designs",
  type: "image",
  showOnHomepage: false,
},

{
  id: "social-design-9",
  title: "Facebook Ad Creatives",
  image: "https://i.postimg.cc/LssV2k1w/Orange-Professional-English-Course-Facebook-Post.png",
  description: "High-converting ad creatives for paid social campaigns.",
  category: "social-media-designs",
  type: "image",
  showOnHomepage: false,
},

{
  id: "social-design-10",
  title: "Facebook Ad Creatives",
  image: "https://i.postimg.cc/Njmy3KFF/Digital-Marketing-Course-Facebook-Post.png",
  description: "High-converting ad creatives for paid social campaigns.",
  category: "social-media-designs",
  type: "image",
  showOnHomepage: false,
},

{
  id: "social-design-11",
  title: "Facebook Ad Creatives",
  image: "https://i.postimg.cc/m2Fh9PQC/Black-Minimal-Delicious-Burger-Package-Facebook-Post.png",
  description: "High-converting ad creatives for paid social campaigns.",
  category: "social-media-designs",
  type: "image",
  showOnHomepage: false,
},

{
  id: "social-design-12",
  title: "Facebook Ad Creatives",
  image: "https://i.postimg.cc/D04f1Nbv/Red-Yellow-and-White-Modern-Delicious-Pizza-Promotion-Facebook-Post.png",
  description: "High-converting ad creatives for paid social campaigns.",
  category: "social-media-designs",
  type: "image",
  showOnHomepage: false,
},

{
  id: "social-design-13",
  title: "Facebook Ad Creatives",
  image: "https://i.postimg.cc/kX8Km1hr/Blue-Modern-Real-State-Facebook-Post.png",
  description: "High-converting ad creatives for paid social campaigns.",
  category: "social-media-designs",
  type: "image",
  showOnHomepage: false,
},

{
  id: "social-design-14",
  title: "Instagram Story Templates",
  image: "https://i.postimg.cc/hvqky4CZ/Blue-Yellow-and-White-Modern-We-re-Hiring-Facebook-Post.png",
  description: "Engaging story templates optimized for maximum engagement.",
  category: "social-media-designs",
  type: "image",
  showOnHomepage: false,
},

{
  id: "social-design-15",
  title: "LinkedIn Post Designs",
  image: "https://i.postimg.cc/XJ613HwQ/White-Yellow-Modern-Job-Vacancy-Instagram-Post.png",
  description: "Professional designs for B2B and corporate content.",
  category: "social-media-designs",
  type: "image",
  showOnHomepage: true,
},

{
  id: "social-design-16",
  title: "Instagram Story Templates",
  image: "https://i.postimg.cc/RZ3gt5dL/Green-Modern-Digital-Marketing-Agency-(Facebook-Post).png",
  description: "Engaging story templates optimized for maximum engagement.",
  category: "social-media-designs",
  type: "image",
  showOnHomepage: false,
},

{
  id: "social-design-17",
  title: "LinkedIn Post Designs",
  image: "https://i.postimg.cc/NFJxyprk/Red-Black-and-White-Modern-Digital-Marketing-Facebook-Post.png",
  description: "Professional designs for B2B and corporate content.",
  category: "social-media-designs",
  type: "image",
  showOnHomepage: false,
},

{
  id: "social-design-18",
  title: "LinkedIn Post Designs",
  image: "https://i.postimg.cc/qqRsdyZn/White-and-Blue-Modern-We-Are-Hiring-Facebook-Post.png",
  description: "Professional designs for B2B and corporate content.",
  category: "social-media-designs",
  type: "image",
  showOnHomepage: false,
},

{
  id: "social-design-19",
  title: "Instagram Story Templates",
  image: "https://i.postimg.cc/rwXwZ3Zz/Whats-App-Image-2025-12-11-at-9-17-26-PM.jpg",
  description: "Engaging story templates optimized for maximum engagement.",
  category: "social-media-designs",
  type: "image",
  showOnHomepage: false,
},

{
  id: "social-design-20",
  title: "LinkedIn Post Designs",
  image: "https://i.postimg.cc/g2W6LxWS/Whats-App-Image-2025-12-11-at-5-01-00-PM-(1).jpg",
  description: "Professional designs for B2B and corporate content.",
  category: "social-media-designs",
  type: "image",
  showOnHomepage: false,
},


  // Social Media Projects
  {
  id: "social-project-1",
  title: "Timber Craft – Facebook Page (Practice Project)",
  image: "https://i.postimg.cc/ncrfpkgF/Whats-App-Image-2025-12-11-at-9-47-42-PM-(1).jpg",
  images: [
    "https://i.postimg.cc/WbLYf7V0/Whats-App-Image-2025-12-11-at-10-07-55-PM.jpg",
    "https://i.postimg.cc/pdG1GbVt/Whats-App-Image-2025-12-11-at-10-07-57-PM.jpg",
    "https://i.postimg.cc/WbLYf7V0/Whats-App-Image-2025-12-11-at-10-07-55-PM.jpg",
  ],
  description:
    "This practice project was created to enhance my skills in social media branding and page optimization. I designed a full Facebook page for a fictional handcrafted timber business, including branding, content style, and page structure that reflects a real professional presence.",
  category: "social-media-projects",
  type: "image",
  results: "Practice project – focus on branding & page optimization",
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
  title: "Web Project – Premium Real Estate for Modern Living",
  image: "https://i.postimg.cc/hGRwKx3Z/Screenshot-2025-12-11-130751.png",
  description:
    "Explore high-end real estate opportunities designed for comfort, elegance, and long-term value. Find your perfect home or investment property in prestigious neighborhoods.",
  category: "website-designs",
  type: "image",
  websiteUrl: "https://bit.ly/4rRx91W",
  features: [
    "Responsive design for all devices",
    "Custom animations and micro-interactions",
    "Modern hero section with premium branding",
    "Optimized for real estate businesses",
    "Property search filter (location, type, price, bedrooms)",
  ],
  showOnHomepage: false,
},
{
  id: "website-1",
  title: "Web Project – ÉLÉGANCE Luxury Fashion Website",
  image: "https://i.postimg.cc/4N1Z2xzz/Screenshot-2025-12-17-165045.png",
  description:
    "A premium fashion website designed for modern elegance and timeless style. ÉLÉGANCE showcases curated collections with a clean, sophisticated interface that enhances brand identity and delivers a high-end shopping experience.",
  category: "website-designs",
  type: "image",
  websiteUrl: "https://elegance-phi-six.vercel.app/",
  features: [
    "Luxury-focused minimalist UI with elegant typography",
    "Full-width hero section with cinematic visuals",
    "Smooth animations and refined hover interactions",
    "Responsive layout optimized for desktop, tablet, and mobile",
    "Clear navigation for Shop, New Arrivals, and Collections",
    "Premium brand aesthetics using soft tones and balanced spacing",
    "Conversion-optimized call-to-action buttons (Shop Now, View Collection)"
  ],
  showOnHomepage: true,
},


{
  id: "website-2",
  title: "Glow Luxe – Luxury Beauty & Wellness Salon Website",
  image: "https://i.postimg.cc/bwJjSQzY/Screenshot-2025-12-11-132258.png",
  description:
    "A premium beauty salon website designed with an elegant and luxurious aesthetic. Showcasing spa services, treatments, and booking options with a smooth, calming user experience.",
  category: "website-designs",
  type: "image",
  websiteUrl: "https://glowluxe.vercel.app/",
  features: [
    "Elegant hero section with luxury-focused typography",
    "Clean and minimal navigation",
    "Online booking call-to-action",
    "Services showcase with pricing",
    "Photo gallery highlighting salon ambience",
    "Responsive design for mobile and desktop",
    "WhatsApp quick contact button",
    "Modern UI/UX with soft gradients and smooth transitions",
  ],
  showOnHomepage: true,
},

{
  id: "website-3",
  title: "Lovable Brew – Coffee Shop Website",
  image: "https://i.postimg.cc/PrK4J7rt/Screenshot-2025-12-11-163609.png",
  description:
    "A cozy and inviting coffee shop website designed to reflect warmth and charm. Showcasing premium coffee, pastries, and café atmosphere with smooth navigation and delightful visuals.",
  category: "website-designs",
  type: "image",
  websiteUrl: "https://crescentcup.lovable.app/?#home",
  features: [
    "Warm hero section with inviting visuals",
    "Simple and intuitive navigation",
    "Menu showcase with pricing",
    "Photo gallery of café interior and products",
    "Mobile-optimized layout",
    "Modern UI/UX with smooth transitions",
  ],
  showOnHomepage: false,
},

{
  id: "website-4",
  title: "NexusPhones – Premium Mobile Store Website",
  image: "https://i.postimg.cc/K8xDSqRy/Screenshot-2025-12-11-212838.png",
  description:
    "A modern mobile e-commerce website featuring a sleek dark UI, clean product cards, advanced filters, and a smooth shopping experience.",
  category: "website-designs",
  type: "image",
  websiteUrl: "https://nexusphones.vercel.app/",
  features: [
    "Advanced filters for brand, OS, and price range",
    "Product tags: New, Featured, Bestseller, Sale",
    "Product ratings and reviews",
    "High-quality product cards with variants",
    "Quick view popup for product details",
    "Wishlist and hover animations",
    "Fully responsive design",
    "E-commerce-ready add-to-cart flow",
  ],
  showOnHomepage: true,
},

{
  id: "website-5",
  title: "Axiom – Intelligent Data & Analytics Platform Website",
  image: "https://i.postimg.cc/KYbhtyqN/Screenshot-2025-12-11-210237.png",
  description:
    "A futuristic analytics platform website showcasing powerful data tools, dashboards, and early-access offerings with bold UI and high-tech visual styling.",
  category: "website-designs",
  type: "image",
  websiteUrl: "https://leadgen-khaki.vercel.app/",
  features: [
    "High-impact hero section with data visuals",
    "Clean and minimal navigation bar",
    "Early access call-to-action",
    "Watch demo CTA for walkthroughs",
    "Data visualization showcase",
    "Fully responsive layout",
    "Modern UI/UX with dark mode and neon highlights",
  ],
  showOnHomepage: false,
},


  // Thumbnails
  {
  id: "thumb-1",
  title: "YouTube Gaming Thumbnails",
  image: "https://i.postimg.cc/QMtTxVWc/Black-and-Yellow-Modern-Make-Money-You-Tube-Thumbnail.png",
  description: "Eye-catching thumbnails that maximize click-through rates.",
  category: "thumbnails",
  type: "image",
  showOnHomepage: false,
},

{
  id: "thumb-2",
  title: "Educational Content Thumbnails",
  image: "https://i.postimg.cc/8PNszsqZ/Blue-Abstract-Modern-How-To-Make-Website-Tutorial-You-Tube-Thumbnail-(1).png",
  description: "Professional thumbnails for educational creators.",
  category: "thumbnails",
  type: "image",
  showOnHomepage: false,
},

{
  id: "thumb-3",
  title: "Podcast Cover Art",
  image: "https://i.postimg.cc/4dtRZ2mZ/Red-Yellow-and-White-Dynamic-Earn-Money-Online-You-Tube-Thumbnail.png",
  description: "Stunning podcast covers and episode thumbnails.",
  category: "thumbnails",
  type: "image",
  showOnHomepage: false,
},

{
  id: "thumb-4",
  title: "Podcast Cover Art",
  image: "https://i.postimg.cc/MTtbcqcP/Blue-Modern-Coding-Made-Easy-Youtube-Thumbnail.png",
  description: "Stunning podcast covers and episode thumbnails.",
  category: "thumbnails",
  type: "image",
  showOnHomepage: false,
},

{
  id: "thumb-5",
  title: "Podcast Cover Art",
  image: "https://i.postimg.cc/gjQhRJGs/Yellow-and-Black-Bold-Gamer-Tutorial-You-Tube-Thumbnail.png",
  description: "Stunning podcast covers and episode thumbnails.",
  category: "thumbnails",
  type: "image",
  showOnHomepage: false,
},

{
  id: "thumb-6",
  title: "Podcast Cover Art",
  image: "https://i.postimg.cc/rs008k5c/Blue-Futuristic-Coding-Tutorial-Youtube-Thumbnail.png",
  description: "Stunning podcast covers and episode thumbnails.",
  category: "thumbnails",
  type: "image",
  showOnHomepage: false,
},

{
  id: "thumb-7",
  title: "Podcast Cover Art",
  image: "https://i.postimg.cc/K85P8dqf/Green-and-black-Brush-Strokes-Creative-You-Tube-Thumbnail.png",
  description: "Stunning podcast covers and episode thumbnails.",
  category: "thumbnails",
  type: "image",
  showOnHomepage: false,
},

{
  id: "thumb-8",
  title: "Podcast Cover Art",
  image: "https://i.postimg.cc/K85P8dqf/Green-and-black-Brush-Strokes-Creative-You-Tube-Thumbnail.png",
  description: "Stunning podcast covers and episode thumbnails.",
  category: "thumbnails",
  type: "image",
  showOnHomepage: false,
},

{
  id: "thumb-9",
  title: "Podcast Cover Art",
  image: "https://i.postimg.cc/K85P8dqf/Green-and-black-Brush-Strokes-Creative-You-Tube-Thumbnail.png",
  description: "Stunning podcast covers and episode thumbnails.",
  category: "thumbnails",
  type: "image",
  showOnHomepage: false,
},

{
  id: "thumb-10",
  title: "Podcast Cover Art",
  image: "https://i.postimg.cc/K85P8dqf/Green-and-black-Brush-Strokes-Creative-You-Tube-Thumbnail.png",
  description: "Stunning podcast covers and episode thumbnails.",
  category: "thumbnails",
  type: "image",
  showOnHomepage: false,
},

{
  id: "thumb-11",
  title: "Podcast Cover Art",
  image: "https://i.postimg.cc/K85P8dqf/Green-and-black-Brush-Strokes-Creative-You-Tube-Thumbnail.png",
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
