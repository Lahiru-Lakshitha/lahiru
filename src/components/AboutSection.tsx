import { Target, Lightbulb, TrendingUp, Zap, BarChart3, PenTool, Mail, Search, Share2, DollarSign } from "lucide-react";

const skills = [
  { name: "SEO", icon: Search, level: 95 },
  { name: "Social Media", icon: Share2, level: 90 },
  { name: "Google Ads", icon: DollarSign, level: 92 },
  { name: "Meta Ads", icon: Target, level: 88 },
  { name: "Content Creation", icon: PenTool, level: 85 },
  { name: "Email Marketing", icon: Mail, level: 87 },
  { name: "Analytics", icon: BarChart3, level: 93 },
  { name: "Marketing Automation", icon: Zap, level: 84 },
];

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Lightbulb className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">About Me</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Transforming Brands Into{" "}
              <span className="gradient-text">Digital Powerhouses</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              I'm Marty X, a results-driven digital marketer with over 8 years of experience 
              helping businesses—from startups to Fortune 500 companies—achieve explosive growth 
              through strategic digital marketing.
            </p>
            
            <p className="text-muted-foreground mb-8">
              My mission is simple: turn your marketing budget into measurable revenue. 
              I combine data analytics with creative storytelling to craft campaigns that 
              don't just get attention—they convert. Whether it's SEO, paid advertising, 
              or content strategy, I bring a holistic approach to every project.
            </p>

            {/* Mission Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors duration-300">
                <Target className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-display font-semibold mb-2">Data-Driven</h3>
                <p className="text-sm text-muted-foreground">Every decision backed by analytics and real performance metrics.</p>
              </div>
              <div className="p-4 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors duration-300">
                <TrendingUp className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-display font-semibold mb-2">Growth Focused</h3>
                <p className="text-sm text-muted-foreground">Strategies designed to scale your business sustainably.</p>
              </div>
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-2xl" />
            
            <div className="relative p-6 md:p-8 rounded-3xl bg-card/50 backdrop-blur-xl border border-border">
              <h3 className="text-xl font-display font-semibold mb-6">Core Skills</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name} 
                    className="group p-4 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                        <skill.icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{skill.name}</h4>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-400 transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
