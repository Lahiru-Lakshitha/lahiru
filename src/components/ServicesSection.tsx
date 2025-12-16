import { Search, Share2, Target, DollarSign, PenTool, Zap, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Dominate search rankings with technical SEO, content optimization, and link building strategies that drive organic traffic.",
    features: ["Technical SEO Audit", "Keyword Research", "Content Strategy", "Link Building"],
  },
  {
    icon: Share2,
    title: "Social Media Strategy",
    description: "Build a loyal following and engaged community across all major platforms with content that resonates and converts.",
    features: ["Platform Strategy", "Content Calendar", "Community Management", "Influencer Outreach"],
  },
  {
    icon: DollarSign,
    title: "Google Ads Management",
    description: "Maximize ROI with expertly managed PPC campaigns including Search, Display, Shopping, and YouTube ads.",
    features: ["Campaign Setup", "Keyword Bidding", "Ad Copywriting", "Conversion Tracking"],
  },
  {
    icon: Target,
    title: "Meta Ads Marketing",
    description: "Reach your ideal customers on Facebook and Instagram with precision targeting and creative ad formats.",
    features: ["Audience Research", "Creative Development", "A/B Testing", "Retargeting"],
  },
  {
    icon: PenTool,
    title: "Branding & Creative",
    description: "Stand out with compelling brand stories, visual identity, and content that captures your unique value proposition.",
    features: ["Brand Strategy", "Visual Identity", "Content Creation", "Copywriting"],
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description: "Scale your marketing efforts with automated workflows, email sequences, and lead nurturing systems.",
    features: ["Email Automation", "Lead Scoring", "CRM Integration", "Workflow Design"],
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
            Comprehensive Digital{" "}
            <span className="gradient-text">Marketing Solutions</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            From strategy to execution, I provide end-to-end marketing services 
            designed to accelerate your business growth.
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
