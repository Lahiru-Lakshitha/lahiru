import { BarChart3, Share2, Megaphone, Code, Palette, Zap, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Creating and managing social media content, post scheduling, basic analytics,and engagement strategies while building hands-on experience..",
    features: ["Content Planning", "Keyword Research", "Post Design", "Scheduling ","Engagement "],
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description: "Learning and applying digital marketing fundamentals including SEO basics,paid ads concepts, content marketing, and analytics.",
    features: ["SEO Basics", "Google Ads ", "Analytics", "Content Strategy"],
  },
  {
    icon: Megaphone,
    title: "Social Media Advertising",
    description: "Practicing Facebook and Instagram ad setup, audience targeting,creative testing, and performance analysis.",
    features: ["Meta Ads", "Audience Targeting ", "Creative Testing", "Conversion Tracking"],
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Designing and developing responsive websites using modern tools while improving UI, UX, and performance.",
    features: ["HTML ", "CSS ", "JavaScript ", "React","Responsive Design"],
  },
  {
    icon: Palette,
    title: "Basic Branding & Design",
    description: "Creating simple brand visuals, social media designs, and layouts to support online presence.",
    features: ["Canva ", "Social Media Design", "UI Basics"],
  },
  {
    icon: Zap,
    title: "Continuous Learning",
    description: "Actively learning new tools, platforms, and strategies to improve skills in marketing and web development.",
    features: ["Practice Projects", "Online Courses", "Certifications "],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-12 md:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Services</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Skills & Services {" "}
            <span className="gradient-text">I’m Building</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Focused on learning, practicing, and delivering quality digital solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-display font-semibold mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </h3>
                
                <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
